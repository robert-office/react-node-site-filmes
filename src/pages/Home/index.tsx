import Footer from "components/Footer";
import { LandindPage } from "components/LandindPage";
import { OtherNavBar } from "components/NavBar";
import { Recomendeds } from "components/Recomended";

const Home = () => {
  return (
    < >
      <OtherNavBar />
      <LandindPage/>
      <Recomendeds/>
      <Footer/>
    </>
  );
};

export default Home;
