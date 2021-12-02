import { Divider, Rating, Skeleton } from "@mui/material";
import { ApiExternalResultsReviews } from "backend/services/getReviewsService";

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
      <figure className="bg-gray-100 rounded-xl p-4 border-l-8 border-indigo-600">
        {Havehttps ? (
          <Skeleton
            variant="circular"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mx-auto"
          />
        ) : (
          <img
            className="w-32 h-32 rounded-full mx-auto"
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
            <div className="text-cyan-600">{reviewData.author}</div>
            <div className="text-gray-500">{reviewData.created_at}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
