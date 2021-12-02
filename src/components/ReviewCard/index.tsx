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
    <figure
      className="relative bg-gray-100 rounded-xl p-8 overflow-y-scroll overflow-x-hidden"
      style={{ minWidth: "300px", maxWidth: "300px", maxHeight: "400px" }}
    >
      {Havehttps ? (
        <Skeleton
          variant="circular"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full mx-auto object-center object-cover"
        />
      ) : (
        <img
          className="w-32 h-32 rounded-full mx-auto object-center object-cover"
          src={`https://image.tmdb.org/t/p/w300${reviewData.author_details.avatar_path}`}
          alt="imageUser"
        />
      )}

      <div className="relative w-full h-auto my-4 flex flex-row justify-center">
        <Rating
          name="read-only"
          value={Math.round(reviewData.author_details.rating) / 2}
          max={5}
          readOnly
        />
      </div>

      <Divider />

      <figcaption className="font-medium py-2">
        <div className="text-indigo-600 text-center">{reviewData.author}</div>
        <div className="text-gray-500 text-center">
          {reviewData.author}, {reviewData.created_at}
        </div>
      </figcaption>

      <Divider />

      <div className="pt-6 text-center space-y-4 mx-auto">
        <blockquote>
          <p className="text-xs font-semibold">{reviewData.content}</p>
        </blockquote>
      </div>
    </figure>
  );
}
