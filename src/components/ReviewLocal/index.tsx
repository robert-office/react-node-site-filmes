import ReviewCard from "components/ReviewCard";

export const ReviewsLocal = () => {
  return (
    <>
      {/* Section */}
      <section className="bg-bgColor">
        <div className="relative bg-bgColor flex flex-col mt-10 px-5">
          <h2 className="font-extrabold leading-5 tracking-tight text-sm mb-5 text-center sm:text-left">
            Reviews
          </h2>
          <div className="overflow-x-scroll flex flex-row gap-2">
            <ReviewCard />
          </div>
        </div>
      </section>
    </>
  );
};
