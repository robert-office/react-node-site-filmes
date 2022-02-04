import { Divider, Rating, Skeleton } from "@mui/material";
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
      <div className="flex">
        <div className="p-4 w-full">
          <div className="h-full bg-opacity-40 p-8 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="block w-5 h-5 text-gray-500 mb-4"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed mb-6 text-gray-600 dark:text-bgColor text-center sm:text-left" style={
              {
                maxHeight: '100px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }
            }>
              {reviewData.content}
            </p>
            <a className="flex flex-col sm:flex-row items-center">
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
                  width={128}
                  height={128}
                />
              )}
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium dark:text-white text-gray-600 text-center sm:text-left">
                  {reviewData.author}
                </span>
                <div className="relative w-full sm:w-auto h-auto my-4 flex flex-row sm:justify-start justify-center">
                  <Rating
                    name="read-only"
                    value={Math.round(reviewData.author_details.rating) / 2}
                    max={5}
                    readOnly
                  />
                </div>
                <span className="text-gray-500 text-sm text-center sm:text-left">{formatLocalDate(String(reviewData.created_at).slice(0, -14), "dd/MM/yyyy")}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <Divider/>
    </>
  );
}
