import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const { question, content } = item;

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccording = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-[8px] border-[1px] border-[white] card rounded-[30px] px-[25px] mb-[10px] cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccording}
      >
        <h4 className="md:text-[17px] md:font-semibold text-[gray]">
          {question}
        </h4>
        <div
          className={`${
            isOpen && "bg-[#007EFF] border-none text-[white]"
          } w-7 h-7 lg:w-8 lg:h-8 border-[1px] border-[#007EFF] rounded flex items-center text-[#007EFF] justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="text-[gray]">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
