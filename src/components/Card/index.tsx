/* eslint-disable jsx-a11y/alt-text */
type CardType = {
  card: {
    date: string
    genre: string
    id: string
    img: string
    title: string,
    description: string
  }
};

export const Card = ({ card } : CardType) => {
  return (
    <div className="flex flex-col items-startspace-y-3" style={{minWidth: '215px'}}>
      <a href="#_" className="block">
        <img
          className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
          src={card.img}
        />
      </a>
      <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
        <span>{card.genre}</span>
      </div>
      <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
        <a href="#_">{card.title}</a>
      </h2>
      <p className="text-sm text-gray-500">
        {card.description}
      </p>
      <p className="pt-2 text-xs font-medium">
        
        · <span className="mx-1">{card.date}</span> ·{" "}
        <span className="mx-1 text-gray-600">60 min</span>
      </p>
    </div>
  );
};
