import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Trailler } from "components/Trailler";
import { ApiExternalTraillers } from "backend/types/ApiExternalTraillers";
import { getPopularTraillersController } from "backend/controllers/getPopularTraillersController";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import { LocalSwipperTrailler } from "components/LocalSwipperTrailler";

type Props = {
  alldata: ApiExternalResults;
};

export const TraillersLocal = ({ alldata }: Props) => {
  const [traillers, setTraillers] = useState<ApiExternalTraillers>({
    results: []
  });

  useEffect(() => {
    const controller = new getPopularTraillersController();
    controller.handle(alldata.id, alldata.media_type).then(( response ) => {
      setTraillers( response.data );
    });
  }, [alldata]);

  return (
    <>
      {/* Section */}
      <section className={`bg-bgColor ${traillers.results.length > 1 ? "block" : "hidden"}`}>
        <div className="relative bg-bgColor dark:bg-gray-700 flex flex-col mt-10 pb-3">
          <h2 className="font-extrabold leading-5 tracking-tight text-sm mb-5 text-center sm:text-left pl-5 dark:text-gray-50">Traillers</h2>
          {/* Local trailler swipper */}
            <LocalSwipperTrailler>
            {traillers.results.slice(0, 4).map((traillerData) => {
                return (
                  <SwiperSlide key={`trailler_${String(Math.random() * 1000)}`}>
                    <Trailler traillerData={traillerData} />
                  </SwiperSlide>
                );
              })}
            </LocalSwipperTrailler>
        </div>
      </section>
    </>
  );
};
