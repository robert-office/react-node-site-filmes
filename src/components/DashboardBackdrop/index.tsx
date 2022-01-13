import { useContext, useState } from 'react';
import { UserContext } from 'utils/userContext';
import imageBackdrop from '../../assets/images/statics/backdropD.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

type InformativeProps = {
    title?: string;
    subtitle?: string;
    icon?: JSX.Element;
    href?: string;
}

export const DashboardBackdrop = () => {

    const [favoritesCount, setFavoritesCount] = useState(0);
    const [watchistCount, setWatchistCount] = useState(0);

    const dataInformatives: InformativeProps[] = [
        {
            title: "Lista de Espera",
            subtitle: `Você possui ${watchistCount} na Lista de espera`,
            icon: <BookmarkBorderIcon />,
            href: `#_`
        },
        {
            title: "Favoritos",
            subtitle: `Você possui ${favoritesCount} na Lista de Favoritos`,
            icon: <FavoriteBorderIcon />,
            href: `#_`
        },
    ]


    /// user context
    const { value } = useContext(UserContext);


    return (
        <section className="relative w-full dark:bg-gray-700 bg-gray-100 rounded-t-lg">
            <img
                style={{ zIndex: "1" }}
                className="h-20 w-full rounded-t-lg shadow-md object-cover object-center"
                src={imageBackdrop}
                alt="imgPoster"
            />
            <div className="absolute -mt-10 w-full z-10 flex flex-col sm:flex-row sm:justify-between">
                <div className='relative sm:w-1/4 w-full flex justify-center sm:block'>
                    <div className='relative w-20 h-20 bg-gray-200 rounded-full sm:ml-6'></div>
                </div>
                <div className='sm:flex hidden w-3/4 h-full mt-11 p-2'>
                    <h2 className='font-extrabold tracking-tight dark:text-gray-100 text-gray-600 text-xl ml-auto mr-3'> Olá, seja bem vindo, {value.user.name} </h2>
                </div>
            </div>

            <div className='relative my-10'></div>

            <section className="text-gray-600 flex flex-col sm:flex-row py-10">
                {dataInformatives.map((dataInformative) => {
                    return (
                        <div className="p-4 lg:w-1/2 md:w-full" key={ String(Math.floor( Math.random() * 100) + "_dataInformative") }>
                            <div className="flex border-2 rounded-lg border-gray-400 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                    {dataInformative.icon}
                                </div>
                                <div className="flex-grow">
                                    <h2 className="dark:text-white text-gray-900 text-lg title-font font-medium mb-3">
                                        {dataInformative.title}
                                    </h2>
                                    <p className="leading-relaxed text-base dark:text-white text-gray-400">
                                        {dataInformative.subtitle}
                                    </p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center"
                                        href={dataInformative.href}>

                                        Ver mais
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            

        </section >
    );
}

const DashboardInformative = (Props: InformativeProps) => {
    return (
        <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-400 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">

                </div>
                <div className="flex-grow">
                    <h2 className="dark:text-white text-gray-900 text-lg title-font font-medium mb-3">
                        {Props.title}
                    </h2>
                    <p className="leading-relaxed text-base dark:text-white text-gray-400">
                        {Props.subtitle}
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center"
                        href={Props.href}>
                        Ver mais
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}