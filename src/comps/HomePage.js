import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

import colectionImg from "../Images/productimages/f70a8065edf3036598a7f1c63f71aa29.jpeg";
import collectImg1 from "../Images/productimages/24c25f87d72ad4b9b0546a7fda21e818.png";
import collectImg2 from "../Images/productimages/b660e6b73aceb914e737810b4dd11814.png";
import collectImg3 from "../Images/productimages/ee8f5d0266b915a51e22cdeaa4caee80.png";
import arrow from "../Images/icons/Line 2.svg";
import factory from "../Images/icons/factory.png";
import heart from "../Images/icons/heart.svg";
import left from "../Images/icons/Left.svg";
import right from "../Images/icons/Right.svg";
import star from "../Images/icons/ant-design_star-filled.svg"

import featureImg from "../Images/aboutusimages/4a76f14900cc5759219c030a8b30edbd.png"
import marbleBg from "../Images/f3d6a187ca8216e6c96f1fdf56225dcd.png"
import reviewBg from "../Images/image 9.png"
import face1  from "../Images/face1.jpeg"

import { ContentAboutUs } from "./AboutUs";
import { ContentAboutUssection2 } from "./AboutUs";
import Gbutton from "./utilcomps/Gbutton";
import ContactUs from "./ContactUs";
import { useState } from "react";

function ReviewCard(params) {
  
  return (
    <div className=" w-[360px] h-[460px] p-8 flex flex-col items-center justify-between text-white rounded-3xl bg-[#333333] " >
      <div className=" w-32 h-32 rounded-3xl overflow-clip " >
        <img src={ face1 } className="  " />
      </div>
      <div className=" text-4xl font-medium text-center " >Rajjo Pal Kaur</div>
      <div className=" text-xl font-thin text-center " >Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.</div>
      <div className=" flex flex-row gap-2 " >
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
    </div>
  )
}

function Content(params) {
  return (
    <div className="  ">
      <ImageSlider mobView={false} />
    </div>
  );
}

function ContentMobView(params) {
  return (
    <div className="  w-screen ">
      <ImageSlider />
    </div>
  );
}

function CoolProductsCard(params) {
  return (
    <div className=" relative w-[360px] h-[490px] rounded-xl flex flex-col items-center border border-gion-teal ">
      <div className=" absolute m-4 p-2 top-0 right-0 rounded-full hover:bg-neutral-100 cursor-pointer ">
        <img src={heart} className="  " />
      </div>
      <div className=" p-2 h-[75%] overflow-clip ">
        <img src={params?.image} className=" h-full object-cover rounded-xl " />
      </div>
      <div className=" p-4 flex flex-col gap-2 items-center ">
        <div className=" flex flex-row gap-8 text-gion-teal ">
          <div className=" font-light ">GE-512T</div>{" "}
          {/** name to be added with api */}
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
        className=" pt-8 w-[70vw] flex flex-col gap-8 lg:gap-16 items-center "
        // style={{
        //   width: "100%",
        //   backgroundImage: `url(${ marbleBg })`
        // }}
      >
        <div className=" absolute -mt-28 w-full h-full opacity-20 overflow-clip -z-10 " >
          <img src={marbleBg} className=" w-full object-cover " />
        </div>
        <div className="  flex flex-row justify-center ">
          <div
            className={` text-[30px] lg:text-[80px] text-center text-[#6C757D] font-doodle `}
          >
            OUR SUPERCOOL PRODUCTS!
          </div>
        </div>

        <div className=" relative w-screen my-3 overflow-hidden " >
          {window?.innerWidth < 1024 && (
            <div className=" absolute inset-y-0 w-screen h-full flex flex-row justify-between items-center z-20 ">
              <div>
                <img src={left} />
              </div>
              <div>
                <img src={right} />
              </div>
            </div>
          )}
          <div
            className={` w-full h-full flex flex-row justify-center gap-16  `}
          >
            {coolProductsArr?.map((each, ind) => {
              if (window?.innerWidth < 1024) {
                return (
                  <>
                    {Math.abs(coolPrdInd) % 4 == ind && (
                      <CoolProductsCard image={each?.img} />
                    )}
                  </>
                );
              } else return <CoolProductsCard image={each?.img} />;
            })}
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
        <div className=" my-16 w-full lg:h-[80vh] flex flex-col gap-8 items-center ">
          <div className=" text-6xl font-semibold font-urbanist text-gion-teal " >
            Key Benefits
          </div>
          <div className=" my-4 mx-auto w-[85vw] lg:w-[75vw] h-full flex flex-row items-center gap-36 ">
            <div className=" w-[55%] " >
              <img src={featureImg} />
            </div>
            {window?.innerWidth > 1024 && (
              <div className=" hover:scale-105 w-[25%] transition-all duration-500 rounded-3xl shadow-custom-shadow overflow-clip ">
                <img
                  src={collectImg3}
                  className=" h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer "
                />
              </div>
            )}
          </div>
          <Gbutton label={" VIEW ALL PRODUCTS "} w={ ` w-80 ` } />
        </div>
      )}

      <div className=" w-full h-[80vh] flex flex-col gap-20 items-center " >
        <div className=" absolute w-full overflow-clip -z-10 " >
          <img src={reviewBg} className=" object-cover w-full " />
        </div>
        <div className=" pt-10 text-6xl text-gion-teal font-medium font-urbanist " >HERE ARE SOME CLIENT FEEDBACKS</div>
        {/** use ma[ instead] */}
        <div className=" relative flex flex-row gap-8 [mask-image:linear-gradient(to_right,transparent,white,transparent)] " >
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      {
        <div className=" w-full ">
          <ContactUs />
        </div>
      }
    </div>
  );
}

export default HomePage;
