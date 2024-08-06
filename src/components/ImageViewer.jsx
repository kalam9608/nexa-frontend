import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Modal } from "@mui/material";

function ImageViewer(props) {
  const swiperRef = useRef(null);

  return (
    <div>
      <Modal
        open={props.ImageModal}
        onClose={() => {
          props.closeModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" h-full w-full bg-black relative">
          {/* <img
            src={Close}
            onClick={() => {
              props.closeModal();
            }}
            className=" absolute top-4 right-4"
          /> */}close
        
            <div className=" w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <Swiper ref={swiperRef} navigation>
                {props.Images.map((item, index) => {
                  return (
                    <div key={index} className="">
                      {item.image != null ? (
                        <SwiperSlide style={{ flexBasis: "100%" }}>
                          <img
                            src={item.image}
                            className="h-auto w-auto object-fill min-h-[200px] min-w-full "
                          />
                        </SwiperSlide>
                      ) : null}
                    </div>
                  );
                })}
              </Swiper>
            </div>
        
        </div>
      </Modal>
    </div>
  );
}

export default ImageViewer;
