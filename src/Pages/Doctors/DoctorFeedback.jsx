import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const DoctorFeedback = ({ reviews, totalRating }) => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex w-full gap-[10px]">
              <figure className="h-[50px] w-[10%] rounded-full">
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src={review.user?.photo}
                  alt="image"
                />
              </figure>

              <div className="w-[80%]">
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  {review.user?.name}
                </h5>
                <p className="text-[14px] leading-6 text-textColor">
                  {formatDate(review?.createdAt)}
                </p>
                <p className="text_para mt-3 font-medium text-[15px]">
                  {review?.reviewText}
                </p>
              </div>
            </div>

            <div className="flex gap-1 w-[20%]">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067ff" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showFeedback && (
        <div className="text-center">
          <button onClick={() => setShowFeedback(true)} className="btn">
            Give Feedback
          </button>
        </div>
      )}
      {showFeedback && <FeedbackForm />}
    </div>
  );
};

export default DoctorFeedback;
