import { styled, TextField } from "@mui/material";
import { postUserController } from "backend/controllers/laravel-api/postUserController";
import { useSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
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

            setValue({user: response.data.user, token: value.token});
        }).catch(() => {
            enqueueSnackbar('Houve um erro ao mudar a imagem', {
                variant: 'warning',
            });
        })
    };

    return (
        <>
            <section className="w-full flex sm:flex-row flex-col">
                <div className="sm:w-1/2 w-full flex justify-center sm:justify-start align-middle flex-col sm:mt-0 my-10">
                    <FileUploader handleChange={uploadAndChangeUserImg} name="file" types={fileTypes} maxSize={2} minSize={0} label={"Drope ou clique para escolher sua foto"}>
                        { img !== "" ? (
                            <img className="relative w-52 h-52 bg-cover bg-center rounded-full mx-auto sm:mt-10 cursor-pointer" src={img} />

                        ) : (
                            <div className="relative w-52 h-52 rounded-full mx-auto sm:mt-10 cursor-pointer bg-gray-300" ></div>
                        )}
                    </FileUploader>
                </div>
                <div className="relative sm:w-1/2 w-full mt-2">
                    <fieldset className="relative space-y-4 w-full flex flex-col border black:border-gray-100 border-warmGray-400 py-2 px-2 rounded">
                        <legend className="text-lg font-bold dark:text-white text-gray-500">Informações Pessoais</legend>

                        {themeDark ? (
                            <>
                                <CssTextFieldBlack label="Nome" id="custom-css-outlined-input" sx={{ input: { color: 'white', width: '100%' } }} />
                                <CssTextFieldBlack label="E-mail" id="custom-css-outlined-input" sx={{ input: { color: 'white' } }} />
                                <CssTextFieldBlack multiline minRows={4} maxRows={4} label="Descrição" id="custom-css-outlined-input" sx={{ input: { color: 'white' } }} />
                            </>
                        ) : (
                            <>
                                <CssTextFieldWhite label="Nome" id="custom-css-outlined-input" sx={{ input: { color: 'gray', width: '100%' } }} />
                                <CssTextFieldWhite label="E-mail" id="custom-css-outlined-input" sx={{ input: { color: 'gray' } }} />
                                <CssTextFieldWhite multiline minRows={4} maxRows={4} label="Descrição" id="custom-css-outlined-input" sx={{ input: { color: 'gray' } }} />
                            </>
                        )}

                    </fieldset>
                </div>
            </section>
        </>
    );
}