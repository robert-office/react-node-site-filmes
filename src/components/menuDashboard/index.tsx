import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
                menuName: "Settings",
                menuHref: process.env.PUBLIC_URL + "/dashboard/settings",
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
            }
        ]
    }

    return (
        <section className="w-full px-8 text-gray-700 bg-white dark:bg-gray-800">
            <TabList className="container flex flex-col flex-wrap items-center py-5 mx-auto md:flex-row max-w-7xl">
                {menu.menus.map((menu) => {
                    return (
                        <div className="w-auto">
                            <Tab><DashboardList menuList={menu} /></Tab>
                        </div>
                    );
                })}
            </TabList>
        </section>
    );
}

type Props = {
    menuList: list
}

export const DashboardList = ({ menuList }: Props) => {
    return (
        <button
            className="w-40 text-indigo-600 dark:text-white flex items-center p-4 transition-colors duration-200 
            justify-start md:bg-gradient-to-t bg-gradient-to-r from-white to-blue-100 border-b-4 border-indigo-600 dark:from-gray-700 dark:to-gray-800
            hover:text-blue-400"
        >
            <span className="text-left font-extrabold">
                <p>{menuList.svg}</p>
            </span>
            <span className="mx-4 text-sm font-bold">{menuList.menuName}</span>
        </button>
    );
}