import { Divider } from "@mui/material";
import { getDetailsController } from "backend/controllers/getDetailsController";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import { BodyDetalhes } from "components/bodyDetalhes";
import Footer from "components/Footer";
import { HeaderBackdrop } from "components/HeaderBackdrop";
import { OtherNavBar } from "components/NavBar";
import { RecomendedToThis } from "components/RecomendedToThis";
import { ReviewsLocal } from "components/ReviewLocal";
import { Similar } from "components/Similar";
import { TraillersLocal } from "components/TraillersLocal";
import { My404 } from "pages/My40/My404";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detalhes = () => {
  const [Infos, setInfos] = useState<ApiExternalResults>({
    vote_average: 0,
    media_type: "movie",
    id: 0,
  });

  let { search } = useParams<{ search: string }>();

  useEffect(() => {
    const controller = new getDetailsController();
    controller.handle(search).then((data) => {
      if (data.data.results.length < 1) {
      } else {
        /// pega somente o primeiro resultado
        const justFirst = data.data.results[0];
        /// set the data
        setInfos(justFirst);
      }
    });
  }, [search]);

  return (
    <>
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
    </>
  );
};
