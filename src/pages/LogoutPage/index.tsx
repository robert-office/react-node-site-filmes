import { Backdrop, CircularProgress } from "@mui/material";
import { postLogoutController } from "backend/controllers/laravel-api/postLogoutController";
import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import usePersistedState from "utils/usePersistedState";
import { UserContext } from "utils/userContext";

export const LogoutPage = () => {
    
    //// loading backdrop
    const [open, setOpen] = useState(false);
    const handleLoading = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    /// redirect controller
    const [redirect, setRedirect] = useState(false);

    /// user context
    const { setValue } = useContext(UserContext);

    useEffect(() => {
        /// loading
        handleLoading();

        const controller = new postLogoutController();

        const user = localStorage.getItem('user');
        const userJson = JSON.parse(user!);
        const userToken = userJson.token;

        if (userToken) {
            controller.handle(userToken).then((response) => {
                setValue({});

            }).catch(() => {
                setValue({});

            }).finally(() => {
                setTimeout(()=> {
                    /// fecha o loading
                    handleClose();

                    /// redirecionamento
                    setRedirect(true);
                }, 600)
            })
        }
    }, []);

    /// theme
    const [themeDark] = usePersistedState('theme', false);
    function setTheme() {
        const html = document.querySelector("html")!;

        (!themeDark) ? html.classList.remove("dark") : html.classList.add("dark");
    }
    useEffect(() => {
        setTheme();
    }, [themeDark]);


    return (
        <>

            {/* backdrop Loading  */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <div className="flex flex-row">
                    <CircularProgress color="inherit" /> <h2 className="text-2xl text-gray-400 font-extrabold m-auto ml-3"> Desconectando, só um momento... </h2>
                </div>
            </Backdrop>

            {redirect && (
                <Redirect to="/" />
            )}

            <section className="h-screen w-screen flex dark:bg-gray-800 bg-gray-100"></section>
        </>
    );
}