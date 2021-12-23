import { DashboardContainer } from "components/DashboardContainer";
import Footer from "components/Footer";
import { OtherNavBar } from "components/NavBar";

export const DashboardWatchlistPage = () => {
    return (
        <>
        <OtherNavBar/>
            <DashboardContainer>
                <h1> WATCHLIST </h1>
            </DashboardContainer>
        <Footer/>
        </>
    );
}