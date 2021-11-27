/* eslint-disable jsx-a11y/alt-text */
type CardType = {
  card: {
    date: string;
    genre: string;
    id: string;
    img: string;
    title: string;
    description: string;
  };
};

export const Card = ({ card }: CardType) => {

  let state = {
    showBox: false
  };

  const handleBoxToggle = () => state.showBox = !state.showBox;

  return (
    <div
      onMouseEnter={handleBoxToggle}
      className='relative flex flex-col justify-between primaryNonDarkColorBorder rounded-b'
      id={card.id}
      style={{ minWidth: "215px" }}
    >
      <div className="bg-indigo-600 rounded-t-lg"
      style={{minHeight: '420px'}}>
        <a href="#_" className="block">
          <img
            className="object-cover w-full mb-2 overflow-hidden rounded-t-lg shadow-sm"
            style={{minHeight: '220px'}}
            src={card.img}
          />
        </a>
        <h2 className="absolute top-1 z-10 w-full bg-yellow-500 px-3 py-1.5 text-xs font-medium uppercase text-black">
          <p className="w-full text-center">{card.genre}</p>
        </h2>
        <h2 className="text-lg text-center font-bold sm:text-xl md:text-2xl my-3 uppercase">
          <a href="#_" className="text-white">{card.title} {card.title} {card.title}</a>
        </h2>
       
        <p className="pt-2 text-xs font-medium text-center mt-1 text-white">
          · <span className="mx-1 text-white">{card.date}</span> ·{" "}
          <span className="mx-1 text-white">60 min</span>
        </p>

        <p className="pt-2 text-xs font-medium text-center mt-1">
          <span className="mx-1 text-white">Rating</span>{" "}
        </p>
      </div>
      <a href="#_" className="w-full primaryNonDarkColorButton mt-0.5">
        <p className="w-auto mx-auto"> Detalhes </p>
      </a>
      <a href="#_" className="w-full primaryNonDarkColorButton mt-0.5">
        <p className="w-auto mx-auto"> Trailler </p>
      </a>
    </div>
  );
};
