import { DashboardContainer } from "components/DashboardContainer";
import Footer from "components/Footer";
import { LocalInformations } from "components/LocalInformations";
import { OtherNavBar } from "components/NavBar";


export const DashboardSettingsPage = () => {
    return (
        <DashboardContainer>
            <LocalInformations />
        </DashboardContainer>
    );
}