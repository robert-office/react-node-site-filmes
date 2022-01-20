import { styled, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { FileUploader } from "react-drag-drop-files";
import usePersistedState from "utils/usePersistedState";

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

    const [file, setFile] = useState(null);
    const [img, setImg] = useState('');

    useEffect(() => {
        console.log(file);
    }, [file]);

    const handleChange = (file: any) => {
        setFile(file);
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            setImg(fileReader.result as string);
        }
        fileReader.readAsDataURL(file);
    };

    const [themeDark] = usePersistedState('theme', false);

    return (
        <>
            <section className="w-full flex sm:flex-row flex-col">
                <div className="sm:w-1/2 w-full flex justify-center sm:justify-start align-middle flex-col sm:mt-0 my-10">
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} maxSize={2} minSize={0} label={"Drope ou clique para escolher sua foto"}>
                        {!file ? (
                            <div className="relative w-52 h-52 dark:bg-gray-100 bg-gray-400 rounded-full mx-auto sm:mt-10 cursor-pointer">

                            </div>
                        ) : (
                            <img className="relative w-52 h-52 bg-cover bg-center rounded-full mx-auto sm:mt-10 cursor-pointer" src={img} />
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