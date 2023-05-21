import React, { useState } from "react";
import ImageModal from "../projectStudio/ImageModal";
import { rearrangeArray } from "../../utils/helpers"




const Gallery = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(props.images)

  const toggle = (clickedImg) => {
    if (clickedImg?.length) {
      //console.log(clickedImg)
      setModalImg(rearrangeArray([...props.images], clickedImg))
    }
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div className="columns-1 md:columns-3 gap-8">
        {props?.images.map((item, i) => {
          return (
            <>
              <div className=''>
                <img
                  className="mb-6"
                  alt='ark-designs'
                  src={item?.url}
                  onClick={() => toggle(item?.url)}
                />
              </div>
              {/* {window.innerWidth > 768 && (
                <ImageModal onClick={() => toggle("")} showModal={showModal} images={modalImg} />
              )} */}
            </>
          )
        })}


      </div>
    </>
  );
};

export default Gallery;
