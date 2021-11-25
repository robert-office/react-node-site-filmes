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
      className='flex flex-col justify-between primaryNonDarkColorBorder rounded-lg p-1'
      id={card.id}
      style={{ minWidth: "215px" }}
    >
      <div>
        <a href="#_" className="block">
          <img
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
            src={card.img}
          />
        </a>
        <div className="primaryNonDarkColorBackground text-center flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
          <span>{card.genre}</span>
        </div>
        <h2 className="text-lg text-center font-bold sm:text-xl md:text-2xl">
          <a href="#_">{card.title}</a>
        </h2>
        <p className="text-sm text-gray-500">{card.description}</p>
        <p className="pt-2 text-xs font-medium">
          · <span className="mx-1">{card.date}</span> ·{" "}
          <span className="mx-1 text-gray-600">60 min</span>
        </p>
      </div>
      <a href="#_" className="w-full primaryNonDarkColorButton mt-5">
        Detalhes
      </a>
    </div>
  );
};
