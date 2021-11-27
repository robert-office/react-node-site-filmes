
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

  return (
    <div
      className='relative flex flex-col justify-between primaryNonDarkColorBorder rounded-b'
      id={card.id}
      style={{ minWidth: "215px" }}
    >
      <div className="relative rounded-t-lg">
        <a href={process.env.REACT_APP_BASE_URL+"/"+card.title} className="block">
          <img
            className="object-cover w-full mb-2 overflow-hidden rounded-t-lg shadow-sm"
            style={{minHeight: '320px'}}
            src={card.img}
          />
        </a>
        <h2 className="absolute top-1 z-10 w-full rounded-t-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium uppercase text-white"
        style={{opacity: '0.8'}}>
          <p className="w-full text-center">{card.genre}</p>
        </h2>
        <h2 className="absolute w-full bg-indigo-600 bottom-2 text-lg text-center font-bold sm:text-xl md:text-2xl uppercase"
        style={{opacity: '0.8'}}>
          <a href={process.env.REACT_APP_BASE_URL+"/"+card.title} className="text-white">{card.title} {card.title} {card.title}</a>
        </h2>
      </div>
    </div>
  );
};
