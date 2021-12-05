import { Card } from "components/Card";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { LocalSwipper } from "components/LocalSwipper";
import {
  ApiExternalResponse,
  ApiExternalResults,
} from "backend/types/ApiExternalResponse";
import { getRecomendedToThisController } from "backend/controllers/getRecomendedToThisController";

type Props = {
  alldata: ApiExternalResults;
};

export const RecomendedToThis = ({ alldata }: Props) => {
  const [cards, setCards] = useState<ApiExternalResponse>({
    results: [],
    page: 1,
    total_pages: 10,
    total_results: 500
  });

  useEffect(() => {
    const controller = new getRecomendedToThisController();
    controller.handle(alldata.media_type, alldata.id).then((response) => {
      setCards(response.data);
    });
  }, [alldata.id, alldata.media_type]);

  return (
    <>
      {/* Section */}
      <section className="bg-bgColor dark:bg-gray-700">
        <div className="w-full px-5 py-6 mx-auto space-y-5 my-4 max-w-7xl">
          {cards.results.length < 1 ? (
            <>{/* NÃO HÁ SIMILARES NO MOMENTO */}</>
          ) : (
            <>
              <h2 className="font-extrabold leading-5 tracking-tight text-sm text-center sm:text-left dark:text-gray-50">
                Recomendados para quem viu esse
              </h2>
              {/* Local Cards */}
              <LocalSwipper>
                {cards.results.map((card) => {
                  return (
                    <SwiperSlide
                      key={`similares_${String(Math.random() * 1000)}`}
                    >
                      <Card card={card} />
                    </SwiperSlide>
                  );
                })}
              </LocalSwipper>
            </>
          )}
        </div>
      </section>
    </>
  );
};
