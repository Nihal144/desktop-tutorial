import React from "react";

const InfoContainer = (props) => {
  return (
    <>
      <div className="realtive px-4 py-4  mx-auto text-white md:max-w-6xl md:py-20 md:px-32 ">
        {props.children}
      </div>
    </>
  );
};

export default InfoContainer;
