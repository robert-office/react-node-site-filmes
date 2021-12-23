import { DashboardContainer } from "components/DashboardContainer";
import Footer from "components/Footer";
import { OtherNavBar } from "components/NavBar";


export const DashboardSettingsPage = () => {
    return (
        <>
        <OtherNavBar/>
            <DashboardContainer>
                <h1> SETTINGS </h1>
            </DashboardContainer>
        <Footer/>
        </>
    );
}