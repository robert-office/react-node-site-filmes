import ProfileButton from "components/ProfileButton";
import { useContext, useEffect, useState } from "react"
import usePersistedState from "utils/usePersistedState";
import { UserContext } from "utils/userContext";
import SearchIcon from '@material-ui/icons/Search';
import DarkModeIcon from '@material-ui/icons/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css';

export const OtherNavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    /// theme
    const [themeDark, setthemeDark] = usePersistedState('theme', false);
    function setTheme() {
        const html = document.querySelector("html")!;

        (!themeDark) ? html.classList.remove("dark") : html.classList.add("dark");
    }
    useEffect(() => {
        setTheme();
    }, [themeDark]);

    /// user context
    const { value, setValue } = useContext(UserContext)

    return (
        <>
            <div className="container mx-auto max-w-6xl px-8 xl:px-5 flex items-center h-20 justify-between bg-white dark:bg-gray-800 relative z-50">
                <div className="h-8">
                    <a
                        href={process.env.REACT_APP_BASE_URL}
                        className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
                    >
                        <span className="bg-gray-700 dark:bg-white p-2 mx-auto text-xl font-black leading-none text-white dark:text-gray-700 select-none">
                            AcompanyOn<span className="text-indigo-600">.</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 ml-10 items-center hidden lg:flex">
                    <a
                        href={process.env.REACT_APP_BASE_URL}
                        className="mr-5 font-medium leading-6 text-gray-600 dark:text-white dark:hover:text-indigo-300 hover:text-gray-900"
                    >
                        Home
                    </a>
                    <a
                        href={process.env.REACT_APP_BASE_URL + "/todos/recomendados"}
                        className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-indigo-300"
                    >
                        Recomendados
                    </a>

                    <a
                        href={process.env.REACT_APP_BASE_URL + "/todos/populares"}
                        className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-indigo-300"
                    >
                        Filmes
                    </a>

                    <a
                        href={process.env.REACT_APP_BASE_URL + "/todos/tv"}
                        className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-indigo-300"
                    >
                        T.V
                    </a>
                </div>
                <div className="items-center hidden lg:flex">

                    {value.token == null ? (

                        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end justify-center">
                            <a
                                href={process.env.REACT_APP_BASE_URL + "/cadastro"}
                                className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 dark:text-white dark:hover:text-indigo-300"
                            >
                                Cadastre-se
                            </a>
                            <a
                                href={process.env.REACT_APP_BASE_URL + "/login"}
                                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                                Logue-se
                            </a>
                        </div>

                    ) : (
                        <ProfileButton />
                    )}

                </div>

                {!themeDark ? (
                    <span className="lg:hidden">
                        <MenuIcon
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-white text-3xl cursor-pointer flex"
                            sx={{ color: 'black' }}

                        />
                    </span>
                ) : (
                    <span className="lg:hidden">
                        <MenuIcon
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-white text-3xl cursor-pointer flex"
                        />
                    </span>
                )}

                {mobileOpen && (
                    <div className="bg-white dark:bg-gray-800 absolute top-full left-0 flex flex-col w-full lg:hidden">
                        <div className="flex-1 flex flex-col items-center text-xl justify-center align-middle">
                            <a
                                href={process.env.REACT_APP_BASE_URL}
                                className="pb-2 w-full h-full text-center border-b border-gray-200 dark:border-white no-underline px-2 my-2 text-gray-600 dark:text-white dark:hover:text-indigo-300 font-medium hover:text-indigo-600"
                            >
                                Home
                            </a>
                            <a
                                href={process.env.REACT_APP_BASE_URL + "/todos/recomendados"}
                                className="pb-2 w-full h-full text-center border-b border-gray-200 dark:border-white no-underline px-2 my-2 text-gray-600 dark:text-white dark:hover:text-indigo-300 font-medium hover:text-indigo-600"
                            >
                                Recomendados
                            </a>
                            <a
                                href={process.env.REACT_APP_BASE_URL + "/todos/filmes"}
                                className="pb-2 w-full h-full text-center border-b border-gray-200 dark:border-white no-underline px-2 my-2 text-gray-600 dark:text-white dark:hover:text-indigo-300 font-medium hover:text-indigo-600"
                            >
                                Filmes
                            </a>
                            <a
                                href={process.env.REACT_APP_BASE_URL + "/todos/tv"}
                                className="pb-2 w-full h-full text-center border-b border-gray-200 dark:border-white no-underline px-2 my-2 text-gray-600 dark:text-white dark:hover:text-indigo-300 font-medium hover:text-indigo-600"
                            >
                                T.V
                            </a>

                            {value.token == null ? (

                                <>
                                    <a
                                        href={process.env.REACT_APP_BASE_URL + "/cadastro"}
                                        className="pb-2 w-full h-full text-center border-b border-gray-200 dark:border-white no-underline px-2 my-2 text-gray-600 dark:text-white dark:hover:text-indigo-300 font-medium hover:text-indigo-600"
                                    >
                                        Cadastro
                                    </a>
                                    <a
                                        href={process.env.REACT_APP_BASE_URL + "/login"}
                                        className="pb-2 w-full h-full text-center border-b border-gray-200 dark:border-white no-underline px-2 my-2 text-gray-600 dark:text-white dark:hover:text-indigo-300 font-medium hover:text-indigo-600"
                                    >
                                        Login
                                    </a>
                                </>

                            ) : (
                                <a
                                    href={process.env.REACT_APP_BASE_URL + "/dashboard"}
                                    className="pb-2 w-full h-full text-center border-b border-gray-200 dark:border-white no-underline px-2 my-2 text-gray-600 dark:text-white dark:hover:text-indigo-300 font-medium hover:text-indigo-600"
                                >
                                    Conta
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <nav className="container flex flex-wrap items-center justify-between mx-auto flex-row max-w-6xl px-8 xl:px-5">
                <form className="relative sm:w-4/5 w-3/5 h-12 flex flex-row">
                    <div className="relative w-full" >
                        <input placeholder="Pesquise por filmes ou séries neste campo..."
                            type="text"
                            className="w-full h-full relative border dark:bg-gray-600 bg-gray-100 shadow-xl border-gray-800 dark:border-white rounded-l-md px-2 dark:text-white text-gray-700" />
                    </div>
                    <button className="relative dark:bg-white bg-gray-600 border-r border-gray-800 dark:border-white rounded-r-md w-10 p-1 flex items-center">
                        {!themeDark ? (
                            <SearchIcon sx={{ color: 'white' }} />
                        ) : (
                            <SearchIcon />
                        )}
                    </button>
                </form>

                <div className="flex flex-row items-center">
                    <input type="checkbox" name="checkboxDarkMode" checked={themeDark} id="checkbox" className="hidden" onChange={(e) => {
                        setthemeDark(e.target.checked);
                    }} />
                    <label htmlFor="checkbox" className="cursor-pointer shadow-xl">
                        <div className="w-9 h-5 flex items-center bg-gray-300 rounded-md p2 shadow-xl">
                            <div className="w-6 h-6 dark:bg-white bg-gray-600 rounded-md shadow switch-ball"></div>
                        </div>
                    </label>

                    {!themeDark ? (
                        <LightModeIcon className="bg-gray-300 rounded-full p-1 ml-3  shadow-xl" />
                    ) : (
                        <DarkModeIcon className="bg-white rounded-full p-1 ml-3  shadow-xl" />
                    )}
                </div>

                <div className="h-0.5 w-full bg-gray-500 rounded-full mt-2 shadow-lg" />
            </nav>
        </>
    )
}