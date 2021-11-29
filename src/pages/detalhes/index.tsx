import { getDetailsController } from "backend/controllers/getDetailsController";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import Footer from "components/Footer";
import { HeaderBackdrop } from "components/HeaderBackdrop";
import { OtherNavBar } from "components/NavBar";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

export const Detalhes = () => {
  const [Infos, setInfos] = useState<ApiExternalResults>({});

  let { search } = useParams<{ search: string }>();

  useEffect(() => {
    const controller = new getDetailsController();
    controller.handle(search).then((data) => {
        /// pega somente o primeiro resultado
        const justFirst =  data.data.results[0];
        /// set the data
        setInfos( justFirst );
    });
  }, []);

  return (
    <>
      <OtherNavBar />
      <HeaderBackdrop alldata={Infos}/>
      <Footer />
    </>
  );
};
