import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import "./styles.css";


type Props = {
  card: ApiExternalResults;
}

export const Card = ({ card } : Props) => {

  return (
    <div
      className='relative flex flex-col justify-between primaryNonDarkColorBorder rounded-t-lg card'
      id={String(card.id)}
      style={{ minWidth: "150px" }}
    >

      <div className="relative rounded-t-lg">
        <a href={`${process.env.REACT_APP_BASE_URL}/detalhes/${card.name ? card.name.replace(/ /g, "_") : card.title?.replace(/ /g, "_") }`} className="block">
          <img
            className="object-cover w-full mb-2 overflow-hidden rounded-t-lg shadow-sm grow"
            style={{minHeight: '150px'}}
            alt="PostImage"
            src={"https://image.tmdb.org/t/p/w300"+card.poster_path}
          />
        </a>
      </div>
    </div>
  );
};