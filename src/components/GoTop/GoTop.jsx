import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="text-[25px] w-[50px] h-[50px] text-[#fff] bg-[#007eff] rounded-full flex items-center justify-center cursor-pointer fixed md:bottom-[40px] bottom-[30px] z-50 md:right-[80px] right-[20px] animation_arrow"
          onClick={goToBtn}
        >
          <MdKeyboardDoubleArrowUp />
        </div>
      )}
    </>
  );
};

export default GoTop;
