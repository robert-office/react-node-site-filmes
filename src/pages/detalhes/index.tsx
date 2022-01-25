import { getDetailsController } from "backend/controllers/external-api/getDetailsController";
import { historyController } from "backend/controllers/laravel-api/historyController";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import { BodyDetalhes } from "components/bodyDetalhes";
import Footer from "components/Footer";
import { HeaderBackdrop } from "components/HeaderBackdrop";
import { OtherNavBar } from "components/NavBar";
import { RecomendedToThis } from "components/RecomendedToThis";
import { ReviewsLocal } from "components/ReviewLocal";
import { Similar } from "components/Similar";
import { TraillersLocal } from "components/TraillersLocal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatStringWithReplaceSlash } from "utils/format";

export const Detalhes = () => {
  const [Infos, setInfos] = useState<ApiExternalResults>({
    vote_average: 0,
    media_type: "movie",
    id: 0,
  });

  let { search, id } = useParams<{ search: string; id: string }>();

  const user = localStorage.getItem('user');
  const userJson = JSON.parse(user!);
  const userToken = userJson.token;

  useEffect(() => {
    const controller = new getDetailsController();
    controller.handle(search).then((data) => {
      if (data.data.results.length < 1) {
      } else {
        /// pega somente o primeiro resultado
        const justFirst = data.data.results[0];
        /// seta já pra primeira correspondencia
        let correctMovie = justFirst;

        /// procura nos resultados o id que foi informado
        /// se tiver então vamos utilizar os dados dele
        /// senão encontrar, provalvemente vai mostrar errado
        /// então agente só seta pra primeira correspondencia 
        /// que mais parece com a string do nome do filme
        data.data.results.map(movie => {
          if (String(movie.id) === id) {
            correctMovie = movie;
          }
        })

        /// set the data
        setInfos(correctMovie);
      }
    });
  }, [id, search]);

  useEffect(() => {
    const historyC = new historyController();

    historyC.addInHistory(userToken, 1, formatStringWithReplaceSlash(search)).then(() => {
      console.log('history adicionado com sucesso!');
    });
  }, []);

  return (
    <>
      <OtherNavBar />
      <BodyDetalhes>
        <HeaderBackdrop alldata={Infos} />
        <TraillersLocal alldata={Infos} />
        <Similar alldata={Infos} />
        <RecomendedToThis alldata={Infos} />
        <ReviewsLocal alldata={Infos} />
      </BodyDetalhes>
      <Footer />
    </>
  );
};
