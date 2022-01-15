import { DashboardBackdrop } from "components/DashboardBackdrop";
import { DashboardContainer } from "components/DashboardContainer";
import { Favorites } from "components/Favorites";
import { Watchlist } from "components/Watchlist";

export const DashboardHomePage = () => {
    return (
        <>
            <DashboardContainer>
                <DashboardBackdrop/>
                <Favorites/>
                <Watchlist/>
            </DashboardContainer>
        </>
    );
}