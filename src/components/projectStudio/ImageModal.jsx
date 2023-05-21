import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function Modal(props) {

  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              <div className="border-0 shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
                <div className=" absolute z-10 bottom-70 right-2 flex  ">
                  <h3
                    className=" text-white hover:cursor-pointer"
                    onClick={props.onClick}
                  >
                    <CloseOutlinedIcon fontSize="large" />
                  </h3>
                </div>
                {/*body*/}
                <SimpleImageSlider
                  width={896}
                  height={504}
                  images={props?.images}
                  showBullets={true}
                  showNavs={true}
                />
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
