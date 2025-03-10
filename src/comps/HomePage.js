import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

import colectionImg from "../Images/productimages/f70a8065edf3036598a7f1c63f71aa29.jpeg";
import collectImg1 from "../Images/productimages/24c25f87d72ad4b9b0546a7fda21e818.png";
import collectImg2 from "../Images/productimages/b660e6b73aceb914e737810b4dd11814.png";
import collectImg3 from "../Images/productimages/ee8f5d0266b915a51e22cdeaa4caee80.png";
import arrow from "../Images/icons/Line 2.svg";
import factory from "../Images/icons/factory.png";
import heart from "../Images/icons/heart.svg";
import left from "../Images/icons/Left.svg"
import right from "../Images/icons/Right.svg"

import { ContentAboutUs } from "./AboutUs";
import { ContentAboutUssection2 } from "./AboutUs";
import Gbutton from "./utilcomps/Gbutton";
import ContactUs from "./ContactUs";
import { useState } from "react";

function Content(params) {
  return (
    <div className="">
      {false && (
        <div className=" mt-16 w-[45vw] flex flex-col flex-grow  justify-center z-[10] ">
          <div className=" flex flex-col items-start text-nowrap gap-6 ">
            <div className="text-7xl font-bold font-[Newsreader] text-gion-blue [text-shadow:_-3px_3px_3.5px_rgb(0_0_0_/_50%)] ">
              Stay Cool
            </div>
            <div className="text-7xl font-bold font-[Newsreader] text-[#FFAA4D] [text-shadow:_-3px_3px_3.5px_rgb(0_0_0_/_50%)] ">
              Stay Comfortable
            </div>
            <div className="text-4xl ">~anytime, anywhere</div>
          </div>

          <div className=" my-6 ">
            <Gbutton label={"Shop Now"} linkTo={"products"} />
          </div>

          {/* <Link
          to="products"
          className=" my-6 w-[162px] h-[46px] flex justify-center items-center text-2xl text-white rounded cursor-pointer shadow-neutral-600 shadow-md hover:bg-[#28A745] bg-[#007BFF] "
        >
          Shop Now
        </Link> */}
        </div>
      )}
      <div className="  ">
        <ImageSlider mobView={false} />
      </div>
    </div>
  );
}

function ContentMobView(params) {
  return (
    <div className="  w-screen ">

      <ImageSlider   />
    </div>
  );
}

function CoolProductsCard(params) {
  return (
    <div className=" relative w-72 h-96 rounded-xl flex flex-col items-center border border-gion-teal ">
      <div className=" absolute m-4 p-2 top-0 right-0 rounded-full hover:bg-neutral-100 cursor-pointer ">
        <img src={heart} className="  " />
      </div>
      <div className=" p-2 h-[75%] overflow-clip ">
        <img src={params?.image} className=" h-full object-cover rounded-xl " />
      </div>
      <div className=" p-4 flex flex-col gap-2 items-center ">
        <div className=" flex flex-row gap-8 text-gion-teal ">
          <div className=" font-light ">GE-512T</div> {/** name to be added with api */}
          <div className=" font-semibold ">12,000</div>
        </div>
        <Gbutton
          txt={` text-sm lg:text-lg `}
          h={` h-[30px] lg:h-[40px] `}
          label={"ENQUIRY NOW"}
          color={" bg-gion-seafoam-green "}
        />
      </div>
    </div>
  );
}

function HomePage(params) {

  const [coolPrdInd, setCoolPrdInd] = useState(34);
  const coolProductsArr = [
    { img: collectImg1 },
    { img: collectImg2 },
    { img: collectImg1 },
    { img: collectImg2 },
  ];

  return (
    <div className=" w-screen h-full flex flex-col gap-10 items-center overflow-clip ">
      {window?.innerWidth < 1024 ? (
        <ContentMobView />
      ) : (
        <div className=" mt-10 w-full ">
          <Content />
        </div>
      )}
      {/**--------------------------------------------------------------------------- */}
      <div
        id="collections_slide"
        className=" w-[70vw] flex flex-col gap-8 lg:gap-16 items-center "
      >
        <div className="  flex flex-row justify-center ">
          <div className={` text-[30px] lg:text-[60px] text-center text-[#6C757D] font-doodle `}>
            OUR SUPERCOOL PRODUCTS!
          </div>
        </div>

        <div className=" relative w-screen lg:w-full my-3 overflow-hidden ">
          { window?.innerWidth < 1024 && <div className=" absolute inset-y-0 w-screen h-full flex flex-row justify-between items-center z-20 " >
            <div>
              <img src={left} />
            </div>
            <div>
              <img src={right} />
            </div>
          </div>}
          <div
            className={` ${
              window?.innerWidth < 1024 ? ` w-full ` : `  `
            } h-full flex flex-row justify-center gap-16  `}
          >
            {
              coolProductsArr?.map((each, ind) => {
                if (window?.innerWidth < 1024) {
                  return (<>{ Math.abs(coolPrdInd)%4 == ind && <CoolProductsCard image={each?.img} /> }</>)
                } else return <CoolProductsCard image={each?.img} />
              })
            }
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-2 justify-between items-center ">
          <Gbutton
            label={"VIEW OUR COLLECTION"}
            w={window?.innerWidth < 1024 ? ` w-[250px] ` : ` w-[350px] `}
            h={window?.innerWidth < 1024 ? ` h-[46px] ` : false}
            txt={window?.innerWidth < 1024 ? ` text-lg ` : false}
          />
        </div>
      </div>
      {/**---------------------------------------------------------------------- */}

      {true && <ContentAboutUssection2 />}

      {/**---------------------------------------------------------------------- */}
      <ContentAboutUs />
      {/**---------------------------------------------------------------------- */}
      {true && (
        <div className=" w-full lg:h-[65vh] bg-[#F3F4F6] ">
          <div className=" my-4 mx-auto w-[85vw] lg:w-[60vw] h-full flex flex-row items-center gap-24 ">
            {window?.innerWidth > 1024 && (
              <div className=" hover:scale-105 transition-all duration-500 rounded-lg shadow-custom-shadow overflow-clip ">
                <img
                  src={collectImg3}
                  className=" h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer "
                />
              </div>
            )}
            <div className=" flex flex-col gap-7 lg:gap-14 ">
              <div className=" px-5 lg:px-10 pt-3 pb-6 w-[85vw] lg:w-[680px] h-[200px] lg:h-[260px] flex flex-col justify-between items-center lg:items-start rounded-r-xl bg-[#C1ECFF] ">
                <div className=" flex flex-row items-center text-xs lg:text-base text-[#007BFF] ">
                  <div className=" mx-1 h-[2px] w-[18px] lg:w-[60px] bg-[#007BFF] " />
                  Have a Bulk Enquiry?
                </div>
                <div
                  className={` text-xl lg:text-4xl text-center lg:text-start font-semibold font-["Newsreader"] text-[#6D6D6D] `}
                >
                  Don’t Worry! As a Manufacturer It Is Easy For Us To Fulfill
                  All Your Bulk Orders.
                </div>
                <Gbutton
                  label={"VIEW OUR COLLECTION"}
                  w={window?.innerWidth < 1024 ? "w-[200px]" : "w-[350px]"}
                />
              </div>
              <div
                className={` p-1 lg:w-[680px] lg:h-[90px] flex flex-row gap-1 lg:gap-3 items-center justify-center text-[#FFFFFF] text-base lg:text-2xl text-center lg:text-start font-bold font-["Newsreader"] rounded-r-xl bg-[#333333] "`}
              >
                <img src={factory} className=" pl-1 w-12 " />
                More Than 1 Decade of Manufacturing Experience
              </div>
            </div>
          </div>
        </div>
      )}

      {
        <div className=" w-full ">
          <ContactUs />
        </div>
      }
    </div>
  );
}

export default HomePage;
