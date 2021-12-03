export const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between sm:p-6 p-2 sm:space-x-6 rounded-xl shadow-lg hover:shadow-xl">
      <div className="flex bg-gray-100 p-4 sm:w-72 w-full space-x-4 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="bg-gray-100 outline-none"
          type="text"
          placeholder="nome do filme ou série..."
        />
      </div>
      <div className="relative bg-indigo-600 sm:mt-0 mt-2 sm:w-auto w-full py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer text-center">
        <span className="text-center">Procurar</span>
      </div>
    </div>
  );
};
