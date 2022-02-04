import { Skeleton } from "@mui/material";
import { getWatchlistController } from "backend/controllers/laravel-api/getWatchlistController";
import { LaravelResponseContent } from "backend/types/ApiExternalResponse";
import CardMinimized from "components/CardMinimized";
import { DashboardContainer } from "components/DashboardContainer";
import { Label } from "components/MoviesLabel";
import { useEffect, useState } from "react";

export const DashboardWatchlistPage = () => {

    const [cards, setCards] = useState<LaravelResponseContent>({
        contents: []
    });

    const envolviment = {
        isNormalLabel: false,
        SectionTitle: "Todos da Lista De Espera",
        SectionSubTitle: "",
        NoButton: true
    };

    const user = localStorage.getItem('user');
    const userJson = JSON.parse(user!);
    const userToken = userJson.token;

    useEffect(() => {
        const controller = new getWatchlistController();
        controller.handle(userToken).then((response) => {
            setCards(response.data);
        });
    }, []);

    return (
        <DashboardContainer>
            <Label envolviment={envolviment} />

            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">

                {cards.contents.length > 0 ? (
                    cards.contents.map((card) => {
                        return (
                            <CardMinimized card={card} />
                        );
                    })
                ) :
                    <>
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton variant="rectangular" height={290} />
                    </>
                }
            </div>
        </DashboardContainer>
    );
}