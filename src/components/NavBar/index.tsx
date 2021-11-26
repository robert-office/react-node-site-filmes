import TextLogo from "assets/images/Logos/acompanyOnlyText.png";
import { PerfilSvg } from "assets/images/svgs/PerfilSvg";
import { MenuBarSvg } from "assets/images/svgs/MenuBarSvg";
import Logo from "assets/images/Logos/yourlogo.png";

export const OtherNavBar = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="#_"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                AcompanyOn<span className="text-indigo-600">.</span>
              </span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a
                href={process.env.REACT_APP_BASE_URL}
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href={process.env.REACT_APP_BASE_URL+"/recomendados"}
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Recomendados
              </a>

              <a
                href={process.env.REACT_APP_BASE_URL+"/populares"}
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Filmes
              </a>
              
              <a
                href={process.env.REACT_APP_BASE_URL+"/tv"}
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                T.V
              </a>
            </nav>
          </div>
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href={process.env.REACT_APP_BASE_URL+"/cadastro"}
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              Cadastra-se
            </a>
            <a
              href={process.env.REACT_APP_BASE_URL+"/login"}
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Logue-se
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
