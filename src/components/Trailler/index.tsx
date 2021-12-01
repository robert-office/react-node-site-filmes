import { TraillerResult } from "backend/types/ApiExternalTraillers";
import "./styles.css";

type Props = {
  traillerData: TraillerResult;
};

export const Trailler = ({ traillerData }: Props) => {
  return (
    <iframe
      width={"100%"}
      className="w-full h-96"
      src={`https://www.youtube.com/embed/${traillerData.key}?`}
      allowFullScreen
      title={`${traillerData.key}`}
    ></iframe>
  );
};
