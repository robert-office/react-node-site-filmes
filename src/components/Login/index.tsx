import svg from "../../assets/images/svgs/assistindoNoite.svg";

export const LoginForm = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-10 lg:px-16 lg:my-0">
                <div className="w-1/2 lg:w-full flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                  <img src={svg} alt="svg" />
                </div>
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold my-2 lg:text-left text-center">Login</h4>
                <p className="text-lg text-gray-500">
                  ou, então você pode{" "}
                  <a href={process.env.REACT_APP_BASE_URL+"/cadastro"} className="text-blue-600 underline">
                    cadastrar-se
                  </a>
                  , se ainda não possui uma conta
                </p>
                <div className="relative w-full mt-10 space-y-8">
                  
                  <div className="relative">
                    <label className="font-medium text-gray-900">Email</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Coloque Seu Endereço De Email"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-medium text-gray-900">Senha</label>
                    <input
                      type="password"
                      className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                      placeholder="Coloque Sua Senha"
                    />
                  </div>
                  <div className="relative">
                    <a
                      href="#_"
                      className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-blue-700 ease"
                    >
                      Login
                    </a>
                    <a
                      href="#_"
                      className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease"
                    >
                      Login Através do Google
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
