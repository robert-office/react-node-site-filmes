import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { NavLink } from 'react-router-dom';

type list = {
    menuName: string;
    menuHref: string;
    svg: JSX.Element;
}


type menuArray = {
    menus: list[];
}

export const MenuDashboard = () => {
    
    const menu: menuArray = {
        menus: [
            {
                menuName: "Home",
                menuHref: process.env.REACT_APP_BASE_URL+"/dashboard",
                svg: <AccountBoxIcon />
            },
            {
                menuName: "Settings",
                menuHref: process.env.REACT_APP_BASE_URL+"/dashboard/settings",
                svg: <AccountBoxIcon />
            },
            {
                menuName: "WatchList",
                menuHref: process.env.REACT_APP_BASE_URL+"/dashboard/watchlist",
                svg: <AccountBoxIcon />
            },
            {
                menuName: "Favorites",
                menuHref: process.env.REACT_APP_BASE_URL+"/dashboard/favorites",
                svg: <AccountBoxIcon />
            }
        ]
    }
    
    return (
        <nav className="mt-6">

            {menu.menus.map((menu) => {
                return (
                    <div>
                        <DashboardList menuList={menu}/>
                    </div>
                );
            })}

        </nav>
    );
}

type Props = {
    menuList: list
}

export const DashboardList = ({menuList} : Props) => {
    return (
        <a
        className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 "
        href={menuList.menuHref}
        >
            <span className="text-left">
                {menuList.svg}
            </span>
            <span className="mx-4 text-sm font-normal">{menuList.menuName}</span>
        </a>
    );
}