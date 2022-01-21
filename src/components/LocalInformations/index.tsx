import { Backdrop, CircularProgress, styled, TextField } from "@mui/material";
import { postUserController } from "backend/controllers/laravel-api/postUserController";
import { useSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { serializeForm } from "utils/serializeForms";
import usePersistedState from "utils/usePersistedState";
import { UserContext } from "utils/userContext";

const fileTypes = ["JPG", "PNG", "GIF", "jpeg", "png", "gif", "jpg"];

const CssTextFieldBlack = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& label': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(59, 130, 246, 0.5)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(59, 130, 246, 0.5)',
        },
    },
});

const CssTextFieldWhite = styled(TextField)({
    '& label.Mui-focused': {
        color: 'gray',
    },
    '& label': {
        color: 'gray',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'gray',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(59, 130, 246, 0.5)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(59, 130, 246, 0.5)',
        },
    },
});

export const LocalInformations = () => {

    /// user context
    const { value, setValue } = useContext(UserContext);
    const [themeDark] = usePersistedState('theme', false);
    const [file, setFile] = useState(null);
    const [img, setImg] = useState(value.user.path_img || '');
    const userController = new postUserController();
    const { enqueueSnackbar } = useSnackbar();

    /// é acionado quando o usuario for trocar a foto
    const uploadAndChangeUserImg = (file: any) => {
        /// seta o aquivo
        setFile(file);
        /// faz a pré-visualização
        const fileReader = new FileReader()
        /// callback
        fileReader.onloadend = () => {
            setImg(fileReader.result as string);
        }
        /// põem pra trabalhar
        fileReader.readAsDataURL(file);
        /// cria o formadata
        let formData = new FormData();
        formData.append('imagem[]', file);

        userController.updateImg(value.token!, formData).then((response) => {
            enqueueSnackbar('Imagem mudada com sucesso!', {
                variant: 'success',
            });

            setValue({ user: response.data.user, token: value.token });
        }).catch(() => {
            enqueueSnackbar('Houve um erro ao mudar a imagem', {
                variant: 'warning',
            });
        })
    };

    //// loading backdrop
    const [open, setOpen] = useState(false);
    const handleLoading = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const update = (e: any) => {
        /// previne o padão default que o form reproduz que é o de recarregar a tela
        e.preventDefault();
        /// chama o backdrop do loading
        handleLoading();
        /// recupera os dados do formulario
        const form: any = document.querySelector('#updateForm')!;
        var data = serializeForm(form);
        /// chama o controller do Cadastro
        const controller = new postUserController();
        /// utiliza a função para cadastrar
        controller.updateInfos(value.token!, data).then((response) => {
            /// storing the user
            setValue({ user: response.data, token: value.token });
            enqueueSnackbar('Informações mudadas com sucesso!', {
                variant: 'success',
            });

        }).catch(() => {
            enqueueSnackbar('Infelizmente algo deu errado!!', {
                variant: 'warning',
            });
        }).finally(() => {
            /// fecha o loading backdrop
            handleClose();
        });
    }



    return (
        <>
            {/* backdrop Loading  */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <section className="w-full flex sm:flex-row flex-col">
                <div className="sm:w-1/2 w-full flex justify-center sm:justify-start align-middle flex-col sm:mt-0 my-10">
                    <FileUploader handleChange={uploadAndChangeUserImg} name="file" types={fileTypes} maxSize={2} minSize={0} label={"Drope ou clique para escolher sua foto"}>
                        {img !== "" ? (
                            <img className="relative w-52 h-52 bg-cover bg-center rounded-full mx-auto sm:mt-10 cursor-pointer" src={img} />

                        ) : (
                            <div className="relative w-52 h-52 rounded-full mx-auto sm:mt-10 cursor-pointer bg-gray-300" ></div>
                        )}
                    </FileUploader>
                </div>
                <form onSubmit={update} id="updateForm" className="relative sm:w-1/2 w-full mt-2">
                    <fieldset className="relative space-y-4 w-full flex flex-col border black:border-gray-100 border-warmGray-400 py-2 px-2 rounded">
                        <legend className="text-lg font-bold dark:text-white text-gray-500">Informações Pessoais</legend>

                        {themeDark ? (
                            <>
                                <CssTextFieldBlack defaultValue={value.user.name} label="Nome" name="name" id="custom-css-outlined-input" sx={{ input: { color: 'white', width: '100%' } }} />
                                <CssTextFieldBlack defaultValue={value.user.email} label="E-mail" type="email" disabled id="custom-css-outlined-input" sx={{ input: { color: 'white' } }} />
                                <CssTextFieldBlack defaultValue={value.user.descricao} multiline minRows={4} name="descricao" maxRows={4} label="Descrição" id="custom-css-outlined-input" sx={{ input: { color: 'white' } }} />
                            </>
                        ) : (
                            <>
                                <CssTextFieldWhite label="Nome" defaultValue={value.user.name} name="name" id="custom-css-outlined-input" sx={{ input: { color: 'gray', width: '100%' } }} />
                                <CssTextFieldWhite label="E-mail" defaultValue={value.user.email} type="email" disabled id="custom-css-outlined-input" sx={{ input: { color: 'gray' } }} />
                                <CssTextFieldWhite multiline minRows={4} defaultValue={value.user.descricao} name="descricao" maxRows={4} label="Descrição" id="custom-css-outlined-input" sx={{ input: { color: 'gray' } }} />
                            </>
                        )}

                        <button
                            type="submit"
                            className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-700 ease"
                        >
                            Atualizar
                        </button>
                    </fieldset>
                </form>
            </section>
        </>
    );
}