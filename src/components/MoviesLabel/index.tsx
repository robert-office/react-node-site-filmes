type EnvolvimentLabel = {
  envolviment: {
    SectionTitle: string;
    SectionSubTitle: string;
    ButtonAllHref: string;
  };
};

export const Label = ({ envolviment }: EnvolvimentLabel) => {
  return (
    
      <div className="relative flex items-end font-bold flex-row justify-between">
        <div className="flex flex-col sm:flex-row ">
          <h2 className="text-2xl text-gray-50">{envolviment.SectionTitle} </h2>
          <a className="sm:ml-10 flex items-center text-gray-400 dark:text-gray-300 sm:mt-0 mt-2">
            <span className="text-sm">{envolviment.SectionSubTitle}</span>
            <svg
              className="ml-3 h-3.5"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
              />
            </svg>
          </a>
        </div>
        <div className="md:ml-auto flex w-auto sm:mt-0 mt-3">
          <a
            href={"/todos" + envolviment.ButtonAllHref}
            className="primaryNonDarkColorButton sm:w-auto sm:text-lg text-xs"
          >
            Ver Todos
          </a>
        </div>
      </div>
    
  );
};
