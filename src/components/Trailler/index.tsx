import { TraillerResult } from "backend/types/ApiExternalTraillers";
import "./styles.css";

type Props = {
  traillerData: TraillerResult;
};

export const Trailler = ({ traillerData }: Props) => {
  return (
    <object width="100%" height="100%" className="relative h-96 min-w-full">
      <param
        name="movie"
        value={`http://www.youtube.com/embed/${traillerData.key}?html5=1&amp;rel=0&amp;hl=en_US&amp;version=3`}
      />
      <param name="allowFullScreen" value="true" />
      <param name="allowscriptaccess" value="always" />
      <embed
        width="640"
        height="360"
        src="http://www.youtube.com/embed/yt-video-id?html5=1&amp;rel=0&amp;hl=en_US&amp;version=3"
        className="youtube-player"
        type="text/html"
      />
    </object>
  );
};
