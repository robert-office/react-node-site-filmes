import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="text-gray-700 bg-white dark:bg-gray-800 body-font px-2 md:px-0">
        <div className="container flex flex-col items-center py-8 sm:flex-row max-w-6xl px-8 xl:px-5 mx-auto">
          <span className="bg-gray-700 dark:bg-white p-2 text-xl font-black leading-none text-white dark:text-gray-700 select-none">
            AcompanyOn<span className="text-indigo-600">.</span>
          </span>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
            © 2021 - Powered by Robert Uillians
          </p>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a href="https://github.com/robert-office" target='_blank' className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/robert-uillians-001660195/" target='_blank'  className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedLin</span>
              <LinkedInIcon />
            </a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
