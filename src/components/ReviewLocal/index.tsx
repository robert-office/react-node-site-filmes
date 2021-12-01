import { SwiperSlide } from "swiper/react";
import ReviewCard from "components/ReviewCard";
import { LocalSwipperReviews } from "components/LocalSwipperReview";

export const ReviewsLocal = () => {
  return (
    <>
      {/* Section */}
      <section className="bg-bgColor">
        <div className="relative bg-bgColor flex flex-col mt-10 pb-3">
          <h2 className="pl-5 font-extrabold leading-5 tracking-tight text-sm">Reviews</h2>
          {/* Local trailler swipper */}
            <LocalSwipperReviews>
                <SwiperSlide key={`review_card_${String(Math.random() * 1000)}`}>
                    <ReviewCard/>
                </SwiperSlide>
                <SwiperSlide key={`review_card_${String(Math.random() * 1000)}`}>
                    <ReviewCard/>
                </SwiperSlide>
                <SwiperSlide key={`review_card_${String(Math.random() * 1000)}`}>
                    <ReviewCard/>
                </SwiperSlide>
                <SwiperSlide key={`review_card_${String(Math.random() * 1000)}`}>
                    <ReviewCard/>
                </SwiperSlide>
                <SwiperSlide key={`review_card_${String(Math.random() * 1000)}`}>
                    <ReviewCard/>
                </SwiperSlide>
            </LocalSwipperReviews>
        </div>
      </section>
    </>
  );
};
