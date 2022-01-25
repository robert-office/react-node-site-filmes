import { DashboardBackdrop } from "components/DashboardBackdrop";
import { DashboardContainer } from "components/DashboardContainer";
import { Favorites } from "components/Favorites";
import { LocalHistory } from "components/LocalHistory";
import { Watchlist } from "components/Watchlist";

export const DashboardHomePage = () => {
    return (
        <>
            <DashboardContainer>
                <DashboardBackdrop />
                <LocalHistory />
                <Favorites />
                <Watchlist />
            </DashboardContainer>
        </>
    );
}