import { DashboardContainer } from "components/DashboardContainer";
import Footer from "components/Footer";
import { OtherNavBar } from "components/NavBar";


export const DashboardFavoritesPage = () => {
    return (
        <>
        <OtherNavBar/>
            <DashboardContainer>
                <h1> FAVORITES </h1>
            </DashboardContainer>
        <Footer/>
        </>
    );
}