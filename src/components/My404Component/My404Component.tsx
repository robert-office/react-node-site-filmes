import { useHistory } from "react-router-dom";
import svg from "../../assets/images/svgs/ArquivosVideo.svg";
import './styles.css';

export const My404Component = () => {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <>
      {/* This is an example component */}
      <div className="bg-bgColor dark:bg-gray-800 flex items-center container mx-auto min-h-screen">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-center px-5 text-gray-800 dark:text-gray-50">
          <div className="max-w-md flex align-middle flex-col">
            <div className="text-5xl font-dark font-bold text-center dark:text-gray-50">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal md:text-left text-center my-4 dark:text-gray-50">
              Desculpe, não encontramos essa página.{" "}
            </p>
            <p className="mb-8 md:text-left text-center my-4 dark:text-gray-50">
              Mas não se preocupe, volte a página que estava e siga procurando
              pelo conteúdo que desejava...
            </p>
            <button
              onClick={goToPreviousPath}
              className="w-auto px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-indigo-600 active:bg-blue-600 hover:bg-indigo-700"
            >
              Volte a ultima pagina
            </button>
          </div>
          <div className="max-w-md ml-4 mt-10 p-5 bounce">
            <img src={svg} alt="svg videos"></img>
          </div>
        </div>
      </div>
    </>
  );
};
