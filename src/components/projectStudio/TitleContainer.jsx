import React from "react";

const TitleContainer = (props) => {
  return (
    <>
      <div className="flex flex-row  my-10  justify-between space-y-10 md:flex-row md:space-y-0 ">
        {/* title conatiner */}
        <div className="flex   space-x-4">
          <div>{props.icon1}</div>
          <div className=" max-w-xs text-slate-200 ">{props.icon1Text}</div>
        </div>
        <div className="flex  space-x-4">
          <div>{props.icon2}</div>
          <div className="max-w-xs text-slate-200 ">{props.icon2Text}</div>
        </div>
      </div>
    </>
  );
};

export default TitleContainer;
