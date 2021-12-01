import { getDetailsController } from "backend/controllers/getDetailsController";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import { BodyDetalhes } from "components/bodyDetalhes";
import Footer from "components/Footer";
import { HeaderBackdrop } from "components/HeaderBackdrop";
import { OtherNavBar } from "components/NavBar";
import { TraillersLocal } from "components/TraillersLocal";
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
      /// pega somente o primeiro resultado
      const justFirst = data.data.results[0];
      /// set the data
      setInfos(justFirst);
    });
  }, [search]);

  return (
    <>
      <OtherNavBar />
      <BodyDetalhes>
        <HeaderBackdrop alldata={Infos} />
        <TraillersLocal alldata={Infos} />
        
      </BodyDetalhes>
      <Footer />
    </>
  );
};
