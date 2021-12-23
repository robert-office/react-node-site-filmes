import { DashboardContainer } from "components/DashboardContainer";
import Footer from "components/Footer";
import { OtherNavBar } from "components/NavBar";
import React from "react";

export class DashboardDeafault extends React.Component {
  render() {
    return (
      <>
        <OtherNavBar />
        <DashboardContainer>
          {this.props.children}
        </DashboardContainer>
        <Footer />
      </>
    );
  }
};

export default DashboardDeafault;