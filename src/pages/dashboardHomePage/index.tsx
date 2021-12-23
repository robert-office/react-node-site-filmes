import { DashboardContainer } from "components/DashboardContainer";
import Footer from "components/Footer";
import { OtherNavBar } from "components/NavBar";

export const DashboardHomePage = () => {
    return (
        <>
        <OtherNavBar/>
            <DashboardContainer>
                <h1> HOMEPAGE </h1>
            </DashboardContainer>
        <Footer/>
        </>
    );
}