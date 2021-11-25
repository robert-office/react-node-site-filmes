import { Card } from "components/Card";
import { http } from "services/api";
import { useEffect, useState } from "react";
import { Label } from "components/MoviesLabel";

export const MoviePopular = () => {
  const [cards, setCards] = useState([]);
  
  const envolviment = {
    SectionTitle : "Popular",
    SectionSubTitle: "Filmes"
  }

  useEffect(() => {
    http.get("/movie/popular").then(({ data }) => setCards(data.cards));
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
