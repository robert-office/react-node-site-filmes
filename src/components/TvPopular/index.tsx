import { Card } from "components/Card";
import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";
import { httpController } from "backend/controllers/htppController";

export const TvPopular = () => {
  const [cards, setCards] = useState([]);
  
  const envolviment = {
    SectionTitle : "Mais assistidos",
    SectionSubTitle: "Tv / Séries"
  }

  useEffect(() => {
    const http = new httpController(); 
    http.handle().get("/tv/popular").then(({ data }) => setCards(data.cards));
  }, []);

  return (
    
    <>
      {/* Section */}
      <section className="bg-white">
        <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          
          {/* Label */}
          <Label envolviment={envolviment} />

          {/* Local Cards */}
          <div className="flex pb-10 sm:px-5 gap-x-8 gap-y-16 overflow-x-scroll">
            {cards.map((card) => {
              return <Card card={card} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
