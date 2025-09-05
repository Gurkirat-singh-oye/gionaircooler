import img1 from "../Images/aboutusimages/5c4b0d5fd1a44c314bdd348b339574d2.png";
import pencils from "../Images/icons/pencils.png";
import vision from "../Images/aboutusimages/423105090abe76ae3b5e28b90d92b7a2.jpeg";
import happyCust from "../Images/logo/1371ac0d0c89bb3149b81aa8e857f1d0.png";
import INFlag from "../Images/logo/rb_538 1.png";
import servMan from "../Images/icons/Group 101.svg";
import ship from "../Images/icons/Fast Shipping.svg";
import warr from "../Images/logo/rb_45559 1.png";
import replace from "../Images/logo/Group 102.png";

import ceTech from "../Images/icons/CETech.png";
import bulb from "../Images/icons/bulb.png";
import qual from "../Images/icons/Quality.png";
import cash from "../Images/icons/cash.png";
import flower from "../Images/icons/Save energy.png";
import abbanner from "../Images/aboutusimages/cf0313c87677119261c3e6a759d55d2ceff1865b.png";

import oem from "../Images/aboutusimages/oemexec.jpg"
import yrsexp from "../Images/aboutusimages/yearsexp.jpg"
import rnd from "../Images/aboutusimages/randtool.jpg"
import natn from "../Images/aboutusimages/nation.jpg"
import happ from "../Images/aboutusimages/happycu.jpg"

import Gbutton from "./utilcomps/Gbutton";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

function ContentAboutUs(params) {
  return (
    <div
      className={` my-10 relative ${
        window?.innerWidth < 1024 ? ` w-[300px] ` : ` w-[1340px] h-[600px] `
      } flex ${
        window?.innerWidth < 1024 ? ` flex-col gap-8 ` : ` flex-row gap-16 `
      } `}
    >
      <div className=" hidden lg:block absolute -left-[290px] top-64 h-20 text-nowrap text-[44px] font-black tracking-[0.4em] opacity-15 -rotate-90 ">
        {" "}
        A B O U T U S{" "}
      </div>
      <div
        className={` ${
          window?.innerWidth < 1024 ? ` h-[400px] ` : `  `
        } min-w-[44%] hover:scale-[1.01] transition-all duration-500 rounded-2xl shadow-custom-shadow overflow-clip `}
      >
        <img
          src={img1}
          className=" h-full w-full object-cover hover:scale-[1.02] transition-all duration-500 cursor-pointer "
        />
      </div>
      <div
        className={` py-6 flex flex-col ${
          window?.innerWidth < 1024 ? ` gap-2 ` : ` gap-4 `
        } items-start justify-between `}
      >
        <div
          className={` text-center lg:text-left ${
            window?.innerWidth < 768
              ? `text-[28px]`
              : `text-[55px] leading-none `
          } text-gion-teal font-bold font-urbanist uppercase `}
        >
          Advanced Cooling for Ultimate Comfort
        </div>
        <div
          className={` text-[#495057] text-center lg:text-start ${
            window?.innerWidth < 1024 ? ` text-xs ` : ` text-2xl `
          } `}
        >
          {/* <p className=" font-semibold ">Why Choose Gion Air Coolers?</p> */}
          Founded with a vision to make cooling more{" "}
          <a className=" font-bold ">accessible</a>,{" "}
          <a className=" font-bold ">efficient</a>, and{" "}
          <a className=" font-bold ">reliable</a>,
          <a className=" font-bold "> GionAirCooler</a> has grown into one of{" "}
          <a className=" font-bold ">
            India’s largest manufacturers and exporters of air coolers
          </a>
          . With over three decades of expertise, we have built a reputation for
          delivering products that blend{" "}
          <a className=" font-bold ">advanced technology</a>,{" "}
          <a className=" font-bold ">durable design</a>, and
          <a className=" font-bold ">customer-focused innovation</a>.
        </div>
        <div
          className={` text-[#495057] text-center lg:text-start ${
            window?.innerWidth < 1024 ? ` text-xs ` : ` text-2xl `
          } `}
        >
          {/* <p className=" font-semibold ">Trusted by Thousands</p> */}
          Our{" "}
          <a className=" font-bold ">
            state-of-the-art OEM manufacturing facility
          </a>
          , supported by{" "}
          <a className=" font-bold ">in-house R&D and a modern toolroom</a>,
          ensures complete control over design, development, and quality
          standards. Today, we proudly operate{" "}
          <a className=" font-bold ">across Pan India</a>, supported by a wide
          distribution network and trusted by{" "}
          <a className=" font-bold ">millions of satisfied customers</a>.
        </div>
        {/* <Link
          to="/products"
          className=" text-gion-seafoam-green text-xs lg:text-xl font-semibold text-center "
        >
          {" "}
          Explore Gion Air Cooler...{" "}
        </Link> */}
      </div>
    </div>
  );
}

function ContentAboutUssection2(params) {
  return (
    <div className=" py-10 lg:py-2 w-full lg:h-[70vh] flex flex-col justify-between text-center ">
      <div className=" pt-6 w-full min-h-[36%] flex flex-col gap-10 bg-[#F2F3F8] ">
        <div className=" flex flex-col font-thin text-center text-2xl lg:text-5xl text-gion-teal ">
          BEST AIR COOLER BRAND IN INDIA
        </div>
        <div className=" w-full flex flex-col lg:flex-row gap-8 lg:gap-64 justify-center items-center text-xs lg:text-base text-nowrap ">
          <div className=" w-[65vw] lg:w-[25vw] h-full flex flex-row justify-between items-center text-center ">
            <div className=" -mt-4 w-[80px] lg:w-[120px] flex flex-row justify-center gap-1 lg:gap-4 ">
              <img src={happyCust} className=" object-cover " />
              <div className=" flex flex-col justify-center ">
                <div>10Lacs+ Happy</div>
                <div className=" text-gion-teal font-semibold ">Customers</div>
              </div>
            </div>
            <div className=" w-[70px] lg:w-[120px] flex flex-row justify-center gap-1 lg:gap-4 ">
              <img src={ship} className=" pb-3 object-cover " />
              <div className=" flex flex-col justify-center ">
                <div>Faster</div>
                <div className=" text-gion-teal font-semibold ">Delivery</div>
              </div>
            </div>
          </div>
          <div
            className={` w-[55vw] lg:w-[25vw] h-full flex flex-row justify-between items-center text-center `}
          >
            <div className=" ml-5 w-[40px] lg:w-[65px] flex flex-row justify-center gap-1 lg:gap-4 ">
              <img src={servMan} className=" pb-4 object-cover " />
              <div className=" flex flex-col justify-center ">
                <div>On Site</div>
                <div className=" text-gion-teal font-semibold ">Service</div>
              </div>
            </div>
            <div className=" w-[70px] lg:w-[120px] flex flex-row justify-center gap-1 lg:gap-4 ">
              <img src={INFlag} className=" pb-3 object-cover " />
              <div className=" flex flex-col justify-center ">
                <div>Made in India</div>
                <div className=" text-gion-teal font-semibold ">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-4 flex flex-row gap-16 lg:gap-96 justify-center items-center flex-grow text-xs lg:text-base ">
        <div className=" w-[80px] lg:w-[100px] flex flex-col items-center gap-4 ">
          <img src={warr} className=" " />
          <div className=" font-semibold text-nowrap text-gion-teal ">
            1 Year Warranty
          </div>
        </div>
        <div className=" w-[68px] lg:w-[80px] flex flex-col items-center gap-4 ">
          <img src={replace} className="  " />
          <div className=" font-semibold text-nowrap text-gion-teal ">
            Easy Replacement
          </div>
        </div>
      </div>
      <div className=" py-8 w-full min-h-[36%] flex flex-col items-center justify-between bg-[#F2F3F8] ">
        <div className=" text-2xl lg:text-5xl font-extralight text-gion-teal ">
          OUR QUALITY PROMISE
        </div>
        <div className=" pt-10 px-2 flex flex-row flex-wrap items-center justify-center gap-8 lg:gap-32 text-sm lg:text-base font-semibold ">
          <div className=" flex flex-row gap-4 items-center ">
            <img src={ceTech} />
            <div className=" w-24 text-start text-gion-teal ">
              Cutting Edge Tech.
            </div>
          </div>
          <div className=" flex flex-row gap-4 items-center ">
            <img src={bulb} />
            <div className=" w-20 text-start text-gion-teal ">
              Revolutionary Design
            </div>
          </div>
          <div className=" flex flex-row gap-4 items-center ">
            <img src={qual} />
            <div className=" w-20 text-start text-gion-teal ">
              Superior Quality
            </div>
          </div>
          <div className=" flex flex-row items-center gap-4 ">
            <img src={cash} />
            <div className=" w-20 text-start text-gion-teal ">Economical</div>
          </div>
          <div className=" flex flex-row gap-4 items-center ">
            <img src={flower} />
            <div className=" w-20 text-start text-gion-teal ">
              Energy Efficient
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs(params) {
  return (
    <div className=" mt-10 lg:mt-12 flex flex-col gap-3 lg:gap-[70px] items-center ">
      <ContentAboutUs />

      <div className="  w-screen h-fit flex flex-row justify-center  ">
        <div className=" w-[80vw] lg:max-w-[62vw] h-[55vh] shadow-custom-shadow rounded-2xl lg:rounded-[44.5px] overflow-clip ">
          <img
            src={abbanner}
            className=" relative lg:left-0  h-full lg:w-full object-cover "
          />
        </div>
      </div>

      <div id="why choose us" className=" w-[70vw] flex flex-col gap-24 " >
        <div className=" flex flex-col items-center leading-none ">
          <div className=" font-urbanist font-bold text-gion-teal text-8xl uppercase ">
            why choose us?
          </div>
          <div className=" font-thin text-[46px] ">
            “Delivering comfort, efficiency, and trust in every product”
          </div>
        </div>

        <div className=" flex flex-col its-center gap-24 ">
          <div className=" flex flex-row gap-12 ">
            <div className=" min-w-[679px] h-[451px] rounded-[57px] shadow-custom-shadow bg-neutral-200 overflow-clip ">
              <img src={oem} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center gap-8 " >
              <div className=" font-urbanist font-bold text-5xl text-gion-teal " >O.E.M. Excellence</div>
              <div className=" text-4xl " >World-class manufacturing facilities delivering trusted quality.</div>
            </div>
          </div>



          <div className=" flex flex-row-reverse gap-12 ">
            <div className=" w-[679px] h-[451px] rounded-[57px] shadow-custom-shadow bg-neutral-200 overflow-clip ">
              <img src={yrsexp} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center text-right gap-8 " >
              <div className=" font-urbanist font-bold text-5xl text-gion-teal " >30+ Years of Experience</div>
              <div className=" text-4xl " >Decades of innovation in cooling solutions.</div>
            </div>
          </div>



          <div className=" flex flex-row gap-12 ">
            <div className=" w-[679px] h-[451px] rounded-[57px] shadow-custom-shadow bg-neutral-200 overflow-clip ">
              <img src={rnd} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center gap-8 " >
              <div className=" font-urbanist font-bold text-5xl text-gion-teal " >In-House R&D & Toolroom</div>
              <div className=" text-4xl " >Complete design-to-delivery expertise.</div>
            </div>
          </div>



          <div className=" flex flex-row-reverse gap-12 ">
            <div className=" w-[679px] h-[451px] rounded-[57px] shadow-custom-shadow bg-neutral-200 overflow-clip ">
              <img src={natn} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center text-right gap-8 " >
              <div className=" font-urbanist font-bold text-5xl text-gion-teal " >Nationwide Presence</div>
              <div className=" text-4xl " >Trusted across India with a strong dealer network.</div>
            </div>
          </div>



          <div className=" flex flex-row gap-12 ">
            <div className=" w-[679px] h-[451px] rounded-[57px] shadow-custom-shadow bg-neutral-200 overflow-clip ">
              <img src={happ} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center gap-8 " >
              <div className=" font-urbanist font-bold text-5xl text-gion-teal " >Millions of Happy Customers</div>
              <div className=" text-4xl " >A legacy of satisfaction and reliability.</div>
            </div>
          </div>
        </div>
      </div>

      {/**---------------------------------------------------------------------------- */}
      {true && <ContentAboutUssection2 />}
      {/**---------------------------------------------------------------------------- */}
      {/* <div className=" relative px-4 py-5 lg:px-8 w-full h-[15vh] lg:h-[70vh] flex flex-col gap-3 lg:gap-16 items-center text-center overflow-clip ">
        <div className=" lg:mt-52 text-[#FFFFFF] text-3xl lg:text-9xl [text-shadow:_-3px_3px_3.5px_rgb(0_0_0_/_50%)] ">
          OUR VISION
        </div>
        <div className=" text-teal-200 text-xs lg:text-5xl ">
          Our Vision is to be India's No.1 Brand and to Take this Brand to Every
          Household in India and Build Customer Satisfaction.
        </div>
        <img
          src={vision}
          className=" absolute -mt-[260px] lg:-mt-[1200px] -z-10 "
        />
      </div> */}
      <div className=" w-full ">
        <ContactUs />
      </div>
    </div>
  );
}

export default AboutUs;
export { ContentAboutUs };
export { ContentAboutUssection2 };
