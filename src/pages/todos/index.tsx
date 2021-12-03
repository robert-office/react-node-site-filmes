import { BodyDetalhes } from "components/bodyDetalhes";
import Footer from "components/Footer";
import { LocalTodos } from "components/LocalTodos";
import { OtherNavBar } from "components/NavBar";
import { useParams } from "react-router-dom";


const Todos = () => {
  let { content } = useParams<{ content: string }>();

  return (
    <>
      <OtherNavBar />
      <BodyDetalhes>
        <LocalTodos content={content}/>
      </BodyDetalhes>
      <Footer />
    </>
  );
};

export default Todos;
