import "./style.css";
import DarkModeIcon from '@material-ui/icons/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from "react";

export const OtherNavBar = () => {

  function setSwitch() {
    const html = document.querySelector("html")!;

    (!btnSwitch) ? html.classList.add("dark") : html.classList.remove("dark");
  }

  function changeMode(mode: boolean) {
    console.log(mode);
  }

  const [btnSwitch, setBtnSwitch] = useState(false);

  useEffect(() => {
    changeMode(btnSwitch);
  }, [btnSwitch]);

  return (
    <>
      {/* Section 1 */}
      <section className="w-full px-2 md:px-0 text-gray-700 bg-white dark:bg-gray-800 flex flex-col">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto sm:flex-row max-w-6xl px-8 xl:px-5">
          <div className="relative flex flex-col md:flex-row">
            <a
              href={process.env.REACT_APP_BASE_URL}
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="bg-gray-700 dark:bg-white p-2 mx-auto text-xl font-black leading-none text-white dark:text-gray-700 select-none">
                AcompanyOn<span className="text-indigo-600">.</span>
              </span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
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
            </nav>
          </div>
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end justify-center">
            <a
              href={process.env.REACT_APP_BASE_URL + "/cadastro"}
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 dark:text-white dark:hover:text-indigo-300"
            >
              Cadastra-se
            </a>
            <a
              href={process.env.REACT_APP_BASE_URL + "/login"}
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Logue-se
            </a>
          </div>
        </div>

        <div className="container flex flex-wrap items-center justify-between mx-auto flex-row max-w-6xl px-8 xl:px-5">
          <form className="relative sm:w-4/5 w-3/5 h-12 flex flex-row">
            <div className="relative w-full" >
              <input placeholder="Pesquise por filmes ou séries neste campo..."
                type="text"
                className="w-full h-full relative border bg-gray-600 border-gray-800 dark:border-white rounded-l-md px-2 text-white" />
            </div>
            <button className="relative dark:bg-white bg-gray-600 border-r border-gray-800 dark:border-white rounded-r-full w-10 p-1 flex items-center">
              <SearchIcon />
            </button>
          </form>

          <div className="flex flex-row items-center">

            <input type="checkbox" name="checkboxDarkMode" value="" id="checkbox" className="hidden" onChange={(e) => {
              setBtnSwitch(e.target.checked);
              setSwitch();
            }} />
            <label htmlFor="checkbox" className="cursor-pointer">
              <div className="w-9 h-5 flex items-center bg-gray-300 rounded-full p2">
                <div className="w-4 h-4 bg-white rounded-full shadow switch-ball"></div>
              </div>
            </label>

            {!btnSwitch ? (
              <LightModeIcon className="bg-white rounded-full p-1 ml-1" />
            ) : (
              <DarkModeIcon className="bg-white rounded-full p-1 ml-1" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
