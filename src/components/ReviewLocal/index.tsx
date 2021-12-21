import { getReviewsController } from "backend/controllers/external-api/getReviewsController";
import { ApiExternalResponseReviews } from "backend/services/external-api/getReviewsService";
import { ApiExternalResults } from "backend/types/ApiExternalResponse";
import ReviewCard from "components/ReviewCard";
import { useEffect, useState } from "react";

type Props = {
  alldata: ApiExternalResults;
};

export const ReviewsLocal = ({ alldata }: Props) => {
  const [reviews, setReviews] = useState<ApiExternalResponseReviews>({
    results: [],
  });

  useEffect(() => {
    const controller = new getReviewsController();
    controller.handle(alldata.media_type, alldata.id).then((response) => {
      setReviews(response.data);
    });
  }, [alldata]);

  return (
    <>
      {/* Section */} 
      <section className="bg-bgColor dark:bg-gray-700 py-4 overflow-x-scroll">
        <div className={`relative bg-bgColor dark:bg-gray-700 flex flex-col mt-10 px-5 ${reviews.results.length > 1 ? "flex" : "hidden"}`}>
          <h2 className="font-extrabold leading-5 tracking-tight text-sm mb-5 text-center sm:text-left dark:text-gray-50">
            Reviews
          </h2>
          <div className="flex flex-row gap-2 p2">
            {reviews.results.map((review) => {
              return <ReviewCard reviewData={review} key={`review_${review.id}`} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
