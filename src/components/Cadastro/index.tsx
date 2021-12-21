import { postCadastroController } from "backend/controllers/laravel-api/postCadastroController";
import { serializeForm } from "utils/serializeForms";
import svg from "../../assets/images/svgs/assistindoVideos.svg";

export const CadastroForm = () => {

  /// cadastra o usuario
  const cadastrar = (e: any) => {
    e.preventDefault();
    const form : HTMLFormElement  = document.querySelector('#form_cadastro')!;
    var data = serializeForm(form);

    const controller = new postCadastroController();

    controller.handle(data).then((response) => {
      console.log(response);
    });
  }


  return (
    <>
      {/* Section 1 */}
      <section className="w-full bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r ">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  
                  <img src={svg} alt="svg" />
                  
                </div>
              </div>
            </div>
            <form id="form_cadastro" className="w-full bg-white dark:bg-gray-700 lg:w-6/12 xl:w-5/12" onSubmit={(e) => cadastrar(e)}>
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold my-2 dark:text-gray-50">Cadastre-se</h4>
                <p className="text-lg text-gray-500 dark:text-gray-200">
                  ou, então você pode{" "}
                  <a href={process.env.REACT_APP_BASE_URL+"/login"} className="text-blue-600 underline">
                    logar-se
                  </a>
                  , se já possuir uma conta
                </p>
                <div className="relative w-full mt-10 space-y-8">
                  <div className="relative">
                    <label className="font-medium text-gray-900 dark:text-gray-50">Nome</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Coloque Seu Nome"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900 dark:text-gray-50">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Coloque Seu Endereço De Email"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900 dark:text-gray-50">
                      Senha
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Coloque Sua Senha"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900 dark:text-gray-50">
                      Cornfirme a senha
                    </label>
                    <input
                      required
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Coloque Sua Senha"
                    />
                  </div>
                  <div className="relative">
                    <button
                     
                      className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-700 ease"
                    >
                      Criar Conta Grátis
                    </button>
                    <a
                      href="#_"
                      className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                    >
                      Cadastro Através do Google
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
