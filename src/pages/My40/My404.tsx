import Footer from "components/Footer";
import { My404Component } from "components/My404Component/My404Component";
import { OtherNavBar } from "components/NavBar";
import "./styles.css";


export const My404 = () => {
  return (
    <>
      <OtherNavBar />
      <My404Component/>
      <Footer />
    </>
  );
}
