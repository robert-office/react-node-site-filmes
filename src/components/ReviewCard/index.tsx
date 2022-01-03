import { Rating, Skeleton } from "@mui/material";
import { ApiExternalResultsReviews } from "backend/services/external-api/getReviewsService";
import { formatLocalDate } from "utils/format";

type reviewCard = {
  reviewData: ApiExternalResultsReviews;
};

export default function ReviewCard({ reviewData }: reviewCard) {
  let patch = reviewData.author_details.avatar_path;
  let Havehttps = false;
  Havehttps =
    patch != null
      ? reviewData.author_details.avatar_path.toLowerCase().includes("https")
      : true;

  return (
    <>
      <figure className="group relative bg-gray-100 dark:bg-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl border-2 hover:border-indigo-600" style={{minWidth: "220px"}}> 
        {Havehttps ? (
          <Skeleton
            variant="circular"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mx-auto border-2 group-hover:border-indigo-600 transition-colors"
          />
        ) : (
          <img
            className="w-32 h-32 rounded-full mx-auto border-2 group-hover:border-indigo-600 p-1"
            src={`https://image.tmdb.org/t/p/w300${reviewData.author_details.avatar_path}`}
            alt="foto perfil"
            width={384}
            height={512}
          />
        )}

        <div className="pt-2 text-center space-y-4">
          <figcaption className="font-medium">
            <div className="relative w-full h-auto my-4 flex flex-row justify-center">
              <Rating
                name="read-only"
                value={Math.round(reviewData.author_details.rating) / 2}
                max={5}
                readOnly
              />
            </div>
            <div className="text-cyan-600 ">{reviewData.author}</div>
            <div className="text-gray-500 dark:text-gray-50">{formatLocalDate(  String( reviewData.created_at).slice(0, -14)  , "dd/MM/yyyy")}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
