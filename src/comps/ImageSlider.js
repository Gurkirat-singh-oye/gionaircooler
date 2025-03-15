import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from "../Images/set_image_slider/4e25a634ad9e1b8db3a44f2cd4cb121a.png";
import im1 from "../Images/set_image_slider/755c4a4309ac7a7822f6daadf524da48.png";
import im2 from "../Images/set_image_slider/7e6b1d36ae08e6e7d99a44fbe30bbe4c.png";
import im3 from "../Images/set_image_slider/ee8f5d0266b915a51e22cdeaa4caee80.png";
import im4 from "../Images/set_image_slider/4e25a634ad9e1b8db3a44f2cd4cb121a.png";
import arrow from "../Images/icons/Arrow Right.svg";

import cool1 from "../Images/set_image_slider/punk_cooler.webp"
import cool2 from "../Images/set_image_slider/vint_cooler .webp"
import cool3 from "../Images/set_image_slider/room_cooler.webp"
import cool4 from "../Images/set_image_slider/garden_cooler.webp"

const ImageSlider = (props) => {

  const [forDot, setForDot] = useState(70);

  // useEffect(() => {
  //   if (forDot < 0){
  //     setForDot(4)
  //   }
  // }, [forDot])

  const [imgArr, setImgArr] = useState([
    <div className=" w-full h-[70vh] bg-gion-teal overflow-clip ">
      <img src={cool1} className=" h-full lg:w-full object-cover " />
    </div>,
    <div className=" w-full h-[70vh] bg-gion-teal overflow-clip ">
      <img src={cool2} className=" h-full lg:w-full object-cover " />
    </div>,
    <div className=" w-full h-[70vh] bg-gion-teal overflow-clip ">
      <img src={cool3} className=" h-full lg:w-full object-cover " />
    </div>,
    <div className=" w-full h-[70vh] bg-gion-teal overflow-clip ">
      <img src={cool4} className=" h-full lg:w-full object-cover " />
    </div>,
  ]);

  return (
    <div>
      <div>
        {imgArr[forDot%4]}
      </div>
      <div>
        <div
          className={` ${
            props?.mobView ? ` -mt-10 ` : `my-4`
          } flex flex-row justify-center gap-4 `}
        >
          <img
            src={arrow}
            className=" w-5 h-5 cursor-pointer rotate-180"
            onClick={() => {setForDot(forDot-1)}}
          />
          <div className=" flex flex-row gap-2 items-center ">
            {imgArr?.map((each, ind) => {
              return (
                <>
                  {forDot%4 == ind ? (
                    <div className=" w-[13px] h-[13px] rounded-full bg-gion-teal " />
                  ) : (
                    <div className=" w-[10px] h-[10px] rounded-full bg-neutral-300 " />
                  )}
                </>
              );
            })}
          </div>
          <img
            src={arrow}
            className=" w-5 h-5 cursor-pointer"
            onClick={() => {setForDot(forDot+1)}}
          />
        </div>
      </div>
    </div>
  );
};

const ImageSliderOld = (props) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [forDot, setForDot] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setForDot((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1) % 5
      );
      return updatedIndexes;
    });
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setForDot((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 4) % 5
      );
      return updatedIndexes;
    });
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [img, im1, im2, im3, im4];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-60%", scale: 0.85, zIndex: 3 },
    left: { x: "-105%", scale: 0.8, zIndex: 2 },
    right: { x: "105%", scale: 0.8, zIndex: 1 },
    right1: { x: "60%", scale: 0.85, zIndex: 3 },
  };
  return (
    <div className=" absolute w-screen lg:w-full flex flex-col gap-3 overflow-clip ">
      <div>
        <div
          className={` flex items-center justify-center flex-col ${
            props?.mobView ? ` h-[40vh] ` : ` h-[50vh] `
          } `}
        >
          <div
            className={` absolute flex justify-between ${
              props?.mobView ? "w-[125%]" : "w-[80%]"
            } h-[80%] z-[4] `}
          >
            <div className="w-[50%] h-full bg-gradient-to-r from-white via-40% to-transparent " />
            <div className="w-[50%] h-full bg-gradient-to-r to-white via-40% from-transparent " />
          </div>
          {images.map((image, index) => (
            <motion.div
              key={index}
              // src={image}
              alt={image}
              className=" flex justify-center rounded-[18px] shadow-lg shadow-neutral-500 overflow-clip "
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{
                width: props?.mobView ? "42%" : "25%",
                height: "fit",
                position: "absolute",
              }}
            >
              <img className="w-full object-cover" src={image} />
            </motion.div>
          ))}
        </div>
      </div>
      <div
        className={` ${
          props?.mobView ? ` -mt-10 ` : `my-4`
        } flex flex-row justify-center gap-4 `}
      >
        <img
          src={arrow}
          className=" w-5 h-5 cursor-pointer rotate-180"
          onClick={handleBack}
        />
        <div className=" flex flex-row gap-2 items-center ">
          {forDot?.map((each, ind) => {
            return (
              <>
                {each == 0 ? (
                  <div className=" w-[10px] h-[10px] rounded-full bg-orange-400 " />
                ) : (
                  <div className=" w-[10px] h-[10px] rounded-full bg-neutral-300 " />
                )}
              </>
            );
          })}
        </div>
        <img
          src={arrow}
          className=" w-5 h-5 cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
