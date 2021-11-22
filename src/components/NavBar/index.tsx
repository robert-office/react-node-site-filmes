import TextLogo from "assets/images/Logos/acompanyOnlyText.png";
import { PerfilSvg } from "assets/images/svgs/PerfilSvg";
import { MenuBarSvg } from "assets/images/svgs/MenuBarSvg";

export const NavBar = () => {
  return (
    <>
      <header className="sticky top-0 w-full h-auto z-50 bg-purple-800">
        <nav className="relative flex flex-col container mx-auto">
          <div className="relative flex justify-between">
            <button className="block font-bold font-sans text-xs text-white text-center">
              <MenuBarSvg/>
            </button>

            <div className="">
              <img src={TextLogo} alt="Logo Enterprise" ></img>
            </div>

            <button className="mm:hidden block font-bold font-sans 850px:text-base text-xs text-white text-center">
              <PerfilSvg/>
            </button>
          </div>
        </nav>

        <div className="absolute -bottom-4 w-full py-2 bg-opacity-70 bg-purple-600"></div>
      </header>
    </>
  );
};
