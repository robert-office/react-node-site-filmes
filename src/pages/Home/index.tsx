import Footer from "components/Footer";
import { LandindPage } from "components/LandindPage";
import { OtherNavBar } from "components/NavBar";
import { MoviePopular } from "components/Popular";
import { Recomendeds } from "components/Recomended";
import { TvPopular } from "components/TvPopular";

const Home = () => {
  return (
    < >
      <OtherNavBar />
      <LandindPage/>
      <Recomendeds/>
      <MoviePopular/>
      <TvPopular/>
      <Footer/>
    </>
  );
};

export default Home;
