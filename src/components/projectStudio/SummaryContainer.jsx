import React from "react";

const SummaryContainer = (props) => {
  return (
    <div className="max-w-2xl mx-auto my-12 text-[#a5a5a5] md:my-24 ">
      <div className="flex  flex-col space-y-6">
        <p className="leading-relaxed tracking-wide">{props.summary1}</p>
        <p className="leading-relaxed tracking-wide">{props.summary2}</p>
        <p className="leading-relaxed tracking-wide">{props.summary3}</p>
      </div>
    </div>
  );
};

export default SummaryContainer;
