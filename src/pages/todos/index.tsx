import { BodyDetalhes } from "components/bodyDetalhes";
import Footer from "components/Footer";
import { LocalSearch } from "components/LocalSearch";
import { OtherNavBar } from "components/NavBar";
import { useParams } from "react-router-dom";


const Todos = () => {
  let { content } = useParams<{ content: string }>();

  return (
    <>
      <OtherNavBar />
      <BodyDetalhes>
        <LocalSearch content={content}/>
      </BodyDetalhes>
      <Footer />
    </>
  );
};

export default Todos;
