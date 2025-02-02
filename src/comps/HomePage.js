import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

import colectionImg from "../Images/productimages/f70a8065edf3036598a7f1c63f71aa29.jpeg";
import collectImg1 from "../Images/productimages/24c25f87d72ad4b9b0546a7fda21e818.png";
import collectImg2 from "../Images/productimages/b660e6b73aceb914e737810b4dd11814.png";
import collectImg3 from "../Images/productimages/ee8f5d0266b915a51e22cdeaa4caee80.png";
import arrow from "../Images/icons/Line 2.svg";
import factory from "../Images/icons/factory.png";

import { ContentAboutUs } from "./AboutUs";
import { ContentAboutUssection2 } from "./AboutUs";
import Gbutton from "./utilcomps/Gbutton";
import ContactUs from "./ContactUs";

function Content(params) {
  return (
    <div className=" -ml-[550px] grid grid-flow-col ">
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
      <div className=" absolute right-0 w-[65vw] ">
        <ImageSlider mobView={false} />
      </div>
    </div>
  );
}

function ContentMobView(params) {
  return (
    <div className=" mb-72 w-screen ">
      <div className=" pt-6 flex flex-col items-center text-nowrap gap-4 ">
        <div className=" text-5xl font-bold font-[Newsreader] text-gion-blue [text-shadow:_-2px_2px_4px_rgb(0_0_0_/_50%)] ">
          Stay Cool
        </div>
        <div className=" text-5xl font-bold font-[Newsreader] text-[#FFAA4D] [text-shadow:_-2px_2px_4px_rgb(0_0_0_/_50%)] ">
          Stay Comfortable
        </div>
        <div className=" text-4xl font-[Poppins] ">~anytime, anywhere</div>
        <div className=" my-4 ">
          <Gbutton label={"Shop Now"} linkTo={"products"} />
        </div>
      </div>

      <ImageSlider mobView={true} />
    </div>
  );
}

function HomePage(params) {
  return (
    <div className=" w-screen h-full flex flex-col gap-20 items-center overflow-clip ">
      {window?.innerWidth < 1024 ? (
        <ContentMobView />
      ) : (
        <div className=" mt-10 h-[60vh] ">
          <Content />
        </div>
      )}
      {/**--------------------------------------------------------------------------- */}
      {true && (
        <div
          id="collections_slide"
          className=" w-[60vw] h-[500px] flex flex-col justify-between "
        >
          <div className="  flex flex-row justify-between ">
            <div className=" w-full lg:w-[30%] flex flex-col text-start ">
              <div className=" flex flex-row items-center text-xs lg:text-base text-nowrap text-gion-blue ">
                <div className=" mx-1 w-[55px] lg:w-[80px] h-[2px] bg-[#0098DA] " />
                OUR COLLECTION
              </div>
              <div
                className={` text-5xl text-[#6C757D] font-bold font-["Newsreader"] `}
              >
                OUR SUPERCOOL PRODUCTS!
              </div>
            </div>
            <div className=" h-[220px] rounded-3xl hiddem lg:block overflow-clip ">
              <img src={colectionImg} className=" -mt-36 object-cover " />
            </div>
          </div>
          {true && (
            /** change this to not absolute position */
            <div className=" w-screen lg:w-full my-3 -ml-16 lg:ml-0 overflow-x-scroll lg:overflow-hidden ">
              <div
                className={` ${
                  window?.innerWidth < 1024 ? ` w-[1000px] ` : `  `
                } h-full flex flex-row gap-16  `}
              >
                <div className=" w-80 lg:w-[22%] rounded-xl overflow-clip ">
                  <img src={collectImg1} className=" h-full object-cover " />
                </div>
                <div className=" w-60 lg:w-[22%] rounded-xl overflow-clip ">
                  <img src={collectImg2} className=" h-full object-cover " />
                </div>
                <div className=" w-60 lg:w-[22%] rounded-xl overflow-clip ">
                  <img src={collectImg1} className=" h-full object-cover " />
                </div>
                <div className=" w-60 lg:w-[22%] rounded-xl overflow-clip ">
                  <img src={collectImg2} className=" h-full object-cover " />
                </div>
              </div>
            </div>
          )}
          <div className=" flex flex-col lg:flex-row gap-2 justify-between items-center ">
            <div className=" flex flex-row items-center text-center lg:text-start text-nowrap text-xs lg:text-base underline decoration-dotted text-gion-blue ">
              FIND YOUR PERFECT CHILL COMPANION
              <img src={arrow} className=" mx-1 hidden lg:block " />
            </div>
            <Gbutton
              label={"VIEW OUR COLLECTION"}
              w={ window?.innerWidth < 1024 ? ` w-[250px] ` : ` w-[350px] ` }
              h={ window?.innerWidth < 1024 ? ` h-[46px] ` : false }
              txt={ window?.innerWidth < 1024 ? ` text-lg ` : false }
            />
          </div>
        </div>
      )}
      {/**---------------------------------------------------------------------- */}

      {true && <ContentAboutUssection2 />}

      {/**---------------------------------------------------------------------- */}
      <ContentAboutUs />
      {/**---------------------------------------------------------------------- */}
      {true && (
        <div className=" w-full lg:h-[65vh] bg-[#F3F4F6] ">
          <div className=" my-4 mx-auto w-[85vw] lg:w-[60vw] h-full flex flex-row items-center gap-24 ">
            { window?.innerWidth > 1024 && <div className=" hover:scale-105 transition-all duration-500 rounded-lg shadow-custom-shadow overflow-clip ">
              <img
                src={collectImg3}
                className=" h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer "
              />
            </div>}
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
                <Gbutton label={"VIEW OUR COLLECTION"} w={ window?.innerWidth < 1024 ? "w-[200px]" : "w-[350px]"} />
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

      {(
        <div className=" w-full ">
          <ContactUs />
        </div>
      )}
    </div>
  );
}

export default HomePage;
