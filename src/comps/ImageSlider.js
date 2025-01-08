import { useState } from "react";
import { motion } from "framer-motion";
import img from "../Images/set_image_slider/4e25a634ad9e1b8db3a44f2cd4cb121a.png";
import im1 from "../Images/set_image_slider/755c4a4309ac7a7822f6daadf524da48.png";
import im2 from "../Images/set_image_slider/7e6b1d36ae08e6e7d99a44fbe30bbe4c.png";
import im3 from "../Images/set_image_slider/ee8f5d0266b915a51e22cdeaa4caee80.png";
import im4 from "../Images/set_image_slider/4e25a634ad9e1b8db3a44f2cd4cb121a.png";
import arrow from "../Images/icons/Arrow Right.svg";

const ImageSlider = (props) => {
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
    <div className=" absolute w-screen flex flex-col gap-3 overflow-clip ">
      <div>
        <div className={` flex items-center justify-center flex-col ${ props?.mobView ? ` h-[40vh] ` : ` h-[50vh] ` } `}>
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
