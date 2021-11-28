import { ApiExternalResults } from "backend/types/ApiExternalResponse";

type Props = {
  card: ApiExternalResults;
}

export const Card = ({ card } : Props) => {

  return (
    <div
      className='relative flex flex-col justify-between primaryNonDarkColorBorder rounded-b'
      id={String(card.id)}
      style={{ minWidth: "215px" }}
    >
      <div className="relative rounded-t-lg">
        <a href={`${process.env.REACT_APP_BASE_URL}/detalhes/${card.name ? card.name : card.title}`} className="block">
          <img
            className="object-cover w-full mb-2 overflow-hidden rounded-t-lg shadow-sm"
            style={{minHeight: '320px'}}
            alt="PostImage"
            src={"https://image.tmdb.org/t/p/w300"+card.poster_path}
          />
        </a>
      </div>
    </div>
  );
};