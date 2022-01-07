import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Divider } from '@mui/material';

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
                menuHref: process.env.PUBLIC_URL + "/dashboard",
                svg: <AccountBoxIcon />
            },

            {
                menuName: "WatchList",
                menuHref: process.env.PUBLIC_URL + "/dashboard/watchlist",
                svg: <AccountBoxIcon />
            },
            {
                menuName: "Favorites",
                menuHref: process.env.PUBLIC_URL + "/dashboard/favorites",
                svg: <AccountBoxIcon />
            },
            {
                menuName: "Settings",
                menuHref: process.env.PUBLIC_URL + "/dashboard/settings",
                svg: <AccountBoxIcon />
            }
        ]
    }

    return (
        <div className="w-full bg-gray-100 dark:bg-gray-600 rounded">
            <nav className="flex flex-col sm:flex-row">
                {menu.menus.map((menu) => {
                    return (
                        <DashboardList menuList={menu} />
                    );
                })}
            </nav>
        </div>
    );
}

type Props = {
    menuList: list
}

export const DashboardList = ({ menuList }: Props) => {
    return (
        <>
            <a
                href={menuList.menuHref}
                className="flex dark:text-white text-gray-600 dark:bg-gray-600 bg-gray-100 py-4 px-6 hover:text-indigo-600 focus:outline-none border-b-2 font-medium border-indigo-600 hover:bg-opacity-50 justify-between ">
                <span className='pr-2'>{menuList.svg}</span>
                <p>{menuList.menuName}</p>
            </a>
            <Divider/>
        </>
    );
}