export const LoginForm = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div className="mb-4">
          <p className="text-gray-600">Logar-se</p>
          <h2 className="text-xl font-bold">Entre em nossa comunidade</h2>
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Senha"
          />
        </div>
        <div>
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
            Logar-se
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label
              htmlFor="comments"
              className="ml-2 text-sm font-normal text-gray-600"
            >
              Lembre-me
            </label>
          </div>
          <div>
            <a className="text-sm text-blue-600 hover:underline" href="_#">
              Esqueceste a senha?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
