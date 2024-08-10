import { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const DoctorFeedback = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatar} alt="image" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                All ahmed
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate("09-13-2014")}
              </p>
              <p className="text_para mt-3 font-medium text-[15px]">
                Good services, highly recommended
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
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
