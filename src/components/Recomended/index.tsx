import { SpecialCard } from "components/EspecialCard";
import { Card } from "components/Card";
import { http } from "services/api";
import { useEffect, useState } from "react";

export const Recomendeds = () => {


  const [cards, setCards] = useState([]);

  useEffect(() => {
    http.get('/movie/recomends').then( ({data}) => setCards( data ) );
  });


  return (
    <>
      {/* Section 1 */}
      <section className="bg-white">
        <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          
          {/* Local Recomendado */}

          {/* Local Cards */}
          <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
            
          </div>
        </div>
      </section>
    </>
  );
};
