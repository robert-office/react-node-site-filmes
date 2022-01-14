import { DashboardBackdrop } from "components/DashboardBackdrop";
import { DashboardContainer } from "components/DashboardContainer";
import { Favorites } from "components/Favorites";

export const DashboardHomePage = () => {
    return (
        <>
            <DashboardContainer>
                <DashboardBackdrop/>
                <Favorites/>
            </DashboardContainer>
        </>
    );
}