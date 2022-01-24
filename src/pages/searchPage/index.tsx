import { BodyDetalhes } from "components/bodyDetalhes";
import Footer from "components/Footer";
import { LocalSearch } from "components/LocalSearch";
import { OtherNavBar } from "components/NavBar";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  let { pesquisa } = useParams<{ pesquisa: string }>();

  return (
    <>
      <OtherNavBar />
      <BodyDetalhes>
        <LocalSearch pesquisa={pesquisa}/>
      </BodyDetalhes>
      <Footer />
    </>
  );
};

export default SearchPage;
