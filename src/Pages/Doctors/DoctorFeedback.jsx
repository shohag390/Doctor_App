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
          <div key={index} className="flex justify-between mb-[30px]">
            <div className="flex w-full">
              <figure className="md:w-[10%] w-[20%] rounded-full">
                <img
                  className="md:h-[50px] md:w-[50px] h-[40px] w-[40px] rounded-full"
                  src={review.user?.photo}
                  alt="image"
                />
              </figure>

              <div className="md:w-[70%] w-[60%]">
                <h5 className="text-[16px] leading-6 text-[#007EFF] font-bold">
                  {review.user?.name}
                </h5>
                <p className="text-[14px] text-[gray]">
                  {formatDate(review?.createdAt)}
                </p>
                <p className="md:text-[17px] md:font-semibold text-[gray] pt-[10px]">
                  {review?.reviewText}
                </p>
              </div>
            </div>

            <div className="flex w-[20%]">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067ff" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showFeedback && (
        <div className="text-center">
          <button
            onClick={() => setShowFeedback(true)}
            className="btnOne py-[10px] px-[30px]"
          >
            Give Feedback
          </button>
        </div>
      )}
      {showFeedback && <FeedbackForm />}
    </div>
  );
};

export default DoctorFeedback;
