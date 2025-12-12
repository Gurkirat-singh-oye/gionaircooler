import img1 from "../Images/aboutusimages/5c4b0d5fd1a44c314bdd348b339574d2.png";
import pencils from "../Images/icons/pencils.png";
import vision from "../Images/aboutusimages/423105090abe76ae3b5e28b90d92b7a2.jpeg";

import circle from "../Images/aboutusimages/circle.svg";
import wedge1 from "../Images/aboutusimages/wedge1.svg";
import wedge2 from "../Images/aboutusimages/wedge.svg";
import wedge3 from "../Images/aboutusimages/wedge3.svg";
import wedge4 from "../Images/aboutusimages/wedge4.svg";

import string from "../Images/aboutusimages/string1.svg";
import arc1 from "../Images/aboutusimages/arc1.svg";
import arc2 from "../Images/aboutusimages/arc2.svg";
import arc3 from "../Images/aboutusimages/arc3.svg";
import arc4 from "../Images/aboutusimages/arc4.svg";

import wimg1 from "../Images/aboutusimages/wimg1.png";
import wimg2 from "../Images/aboutusimages/wimg2.png";
import wimg3 from "../Images/aboutusimages/wimg3.png";
import wimg4 from "../Images/aboutusimages/wimg4.png";

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

import oem from "../Images/aboutusimages/oemexec.jpg";
import yrsexp from "../Images/aboutusimages/yearsexp.jpg";
import rnd from "../Images/aboutusimages/randtool.jpg";
import natn from "../Images/aboutusimages/nation.jpg";
import happ from "../Images/aboutusimages/happycu.jpg";

import { motion } from "framer-motion";

import Gbutton from "./utilcomps/Gbutton";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

function ContentAboutUs(params) {
  return (
    <motion.div
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
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: .5, ease: "linear" }}
        viewport={{ once: true }}
        className={` ${
          window?.innerWidth < 1024 ? ` h-[400px] ` : `  `
        } min-w-[44%] hover:scale-[1.01] transition-all duration-500 rounded-2xl shadow-custom-shadow overflow-clip `}
      >
        <img
          src={img1}
          className=" h-full w-full object-cover hover:scale-[1.02] transition-all duration-500 cursor-pointer "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: .5, ease: "linear" }}
        viewport={{ once: true }}
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
          <p className=" font-semibold ">Why Choose Gion Air Coolers?</p>
          Founded with a vision to make cooling more{" "}
          {/* <a className=" font-bold ">accessible</a>,{" "}
          <a className=" font-bold ">efficient</a>, and{" "}
          <a className=" font-bold ">reliable</a>,
          <a className=" font-bold "> GionAirCooler</a>  */}
          Gion Air Coolers don’t just cool—they supercool your space! Powered by
          Aero Fan Technology, our coolers deliver strong air throw, enhanced
          water retention, and superior cooling efficiency. With futuristic
          smart features, you can control them from anywhere, anytime for
          ultimate convenience.{" "}
          {/* <a className=" font-bold ">
            India’s largest manufacturers and exporters of air coolers
          </a>
          . With over three decades of expertise, we have built a reputation for
          delivering products that blend{" "}
          <a className=" font-bold ">advanced technology</a>,{" "}
          <a className=" font-bold ">durable design</a>, and
          <a className=" font-bold ">customer-focused innovation</a>. */}
        </div>
        <div
          className={` text-[#495057] text-center lg:text-start ${
            window?.innerWidth < 1024 ? ` text-xs ` : ` text-2xl `
          } `}
        >
          {/* <p className=" font-semibold ">Trusted by Thousands</p> */}
          <a className=" font-bold ">
            Trusted by Thousands
          </a>
          <p>Gion Air Coolers have earned numerous awards for their innovation,
          performance, and reliability. Experience the cooling technology that
          makes us a leader in the industry.</p>
        </div>
        <Link
          to="/products"
          className=" w-full text-gion-seafoam-green text-xs lg:text-xl font-semibold text-center "
        >
          {" "}
          Explore Gion Air Cooler...{" "}
        </Link>
      </motion.div>
    </motion.div>
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
    <div className=" mt-10 lg:mt-4 flex flex-col gap-3 lg:gap-[70px] items-center ">
      {/* <ContentAboutUs /> */}

      <div className=" w-screen h-fit flex flex-col gap-8 items-center justify-center  ">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" my-10 lg:my-4 w-[80vw] lg:max-w-[62vw] lg:h-[55vh] shadow-custom-shadow-big rounded-2xl lg:rounded-[44.5px] overflow-clip "
        >
          <img
            src={abbanner}
            className=" relative lg:left-0 h-full lg:w-full object-cover "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" px-4 lg:px-0 w-full flex flex-col gap-8 items-center text-center "
        >
          <div className="font-urbanist font-bold text-gion-teal text-[38px] lg:text-[54px] leading-normal lg:leading-none uppercase">
            Advanced Cooling for Ultimate Comfort
          </div>
          <div className=" px-4 lg:px-0 w-full lg:w-[60%] flex flex-col gap-6 lg:gap-8 leading-tight text-center text-neutral-600 text-2xl lg:text-[27px] ">
            <p>
              Founded with a vision to make cooling more{" "}
              <a className=" font-bold ">accessible</a>,{" "}
              <a className=" font-bold ">efficient</a>, and{" "}
              <a className=" font-bold ">reliable</a>,{" "}
              <a className="font-bold">GionAirCooler</a> has grown into one of{" "}
              <a className=" font-bold ">
                India’s largest manufacturers and exporters of air coolers
              </a>
              .
            </p>
            <p>
              With over three decades of expertise, we have built a reputation
              for delivering products that blend{" "}
              <a className="font-bold"> advanced technology, durable design</a>,
              and <a className=" font-bold "> customer-focused innovation</a>.
            </p>
            <p>
              Our{" "}
              <a className="font-bold">
                state-of-the-art OEM manufacturing facility
              </a>
              , supported by
              <a className="fon-bold">in-house R&D and a modern toolroom</a>,
              ensures complete control over design, development, and quality
              standards.
            </p>
            <p>
              Today, we proudly operate{" "}
              <a className=" font-bold ">across Pan India</a>, supported by a
              wide distribution network and trusted by{" "}
              <a className=" font-bold "> millions of satisfied customers</a>.
            </p>
          </div>
        </motion.div>
      </div>

      <div
        id="why choose us"
        className=" w-full lg:w-[70vw] flex flex-col gap-16 lg:gap-24 "
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" px-6 lg:px-0 mt-10 lg:mt-0 flex flex-col items-center leading-none "
        >
          <div className=" font-urbanist font-bold text-gion-teal text-[42px] lg:text-8xl uppercase ">
            why choose us?
          </div>
          {window?.innerWidth > 1024 && (
            <div className="font-thin text-[46px] ">
              “Delivering comfort, efficiency, and trust in every product”
            </div>
          )}

          {window?.innerWidth <= 1024 && (
            <div className=" -mt-3 py-2 w-full h-full font-extralight text-4xl text-center leading-snug backdrop-blur-sm border-[1px] border-gion-seafoam-green rounded-2xl ">
              “Delivering comfort, efficiency, and trust in every product”
            </div>
          )}
        </motion.div>

        <div className=" px-4 lg:px-0 flex flex-col its-center gap-14 lg:gap-24 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" flex flex-col items-center lg:flex-row gap-12 "
          >
            <div className=" mx-8 lg:mx-0 lg:min-w-[679px] lg:h-[451px] rounded-3xl lg:rounded-[57px] shadow-custom-shadow-big bg-neutral-200 overflow-clip ">
              <img src={oem} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center text-center gap-4 lg:gap-8 ">
              <div className=" font-urbanist font-bold text-3xl lg:text-5xl text-gion-teal ">
                O.E.M. Excellence
              </div>
              <div className=" text-2xl lg:text-4xl ">
                World-class manufacturing facilities delivering trusted quality.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" flex flex-col lg:flex-row-reverse gap-12 "
          >
            <div className="mx-8 lg:mx-0 lg:w-[679px] lg:h-[451px] rounded-3xl lg:rounded-[57px] shadow-custom-shadow-big bg-neutral-200 overflow-clip ">
              <img src={yrsexp} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center text-center lg:text-right gap-4 lg:gap-8 ">
              <div className=" font-urbanist font-bold text-3xl lg:text-5xl text-gion-teal ">
                30+ Years of Experience
              </div>
              <div className=" text-2xl lg:text-4xl ">
                Decades of innovation in cooling solutions.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" px-0 lg:px-0 flex flex-col lg:flex-row gap-12 "
          >
            <div className=" mx-8 lg:mx-0 lg:w-[679px] lg:h-[451px] rounded-3xl lg:rounded-[57px] shadow-custom-shadow-big bg-neutral-200 overflow-clip ">
              <img src={rnd} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center text-center lg:text-left gap-4 lg:gap-8 ">
              <div className=" font-urbanist font-bold text-3xl lg:text-5xl text-gion-teal ">
                In-House R&D & Toolroom
              </div>
              <div className=" text-2xl lg:text-4xl ">
                Complete design-to-delivery expertise.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" flex flex-col lg:flex-row-reverse gap-12 "
          >
            <div className=" mx-8 lg:mx-0 lg:w-[679px] lg:h-[451px] rounded-3xl lg:rounded-[57px] shadow-custom-shadow-big bg-neutral-200 overflow-clip ">
              <img src={natn} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center text-center lg:text-right gap-4 lg:gap-8 ">
              <div className=" font-urbanist font-bold text-3xl lg:text-5xl text-gion-teal ">
                Nationwide Presence
              </div>
              <div className=" text-2xl lg:text-4xl ">
                Trusted across India with a strong dealer network.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" flex flex-col lg:flex-row gap-12 "
          >
            <div className=" mx-8 lg:mx-0 lg:w-[679px] lg:h-[451px] rounded-3xl lg:rounded-[57px] shadow-custom-shadow-big bg-neutral-200 overflow-clip ">
              <img src={happ} className=" h-full object-cover " />
            </div>
            <div className=" flex flex-col justify-center text-center lg:text-left gap-4 lg:gap-8 ">
              <div className=" font-urbanist font-bold text-3xl lg:text-5xl text-gion-teal ">
                Millions of Happy Customers
              </div>
              <div className=" text-2xl lg:text-4xl ">
                A legacy of satisfaction and reliability.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/**---------------------------------------------------------------------------- */}
      {true && <ContentAboutUssection2 />}

      <div className=" relative w-full h-[60vh] xl:h-[85vh] my-8 grid xl:-translate-x-2 justify-items-center ">
        <div
          className=" w-[120px] xl:w-[340px] h-[120px] xl:h-[340px] -translate-x-40 xl:translate-x-0 translate-y-[10rem] xl:translate-y-0 text-center "
          style={{
            backgroundImage: `url(${circle})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
          }}
        >
          <div className=" flex flex-col translate-x-4 xl:translate-x-11 translate-y-7 xl:translate-y-[100px] ">
            <p className=" text-gion-teal text-base xl:text-4xl font-bold font-serif ">
              OUR
            </p>
            <p className=" text-gion-teal text-xs xl:text-2xl font-poppins font-thin uppercase ">
              Strengths
            </p>
          </div>
        </div>

        <img
          src={string}
          className=" absolute -translate-x-[8.3rem] xl:-translate-x-24 translate-y-[13rem] xl:translate-y-40 rotate-[130deg] xl:rotate-[40deg] -z-10 "
        />
        <img
          src={string}
          className=" absolute -translate-x-[6.5rem] xl:-translate-x-3 translate-y-[12rem] xl:translate-y-60 -rotate-[93deg] xl:rotate-0 -z-10 "
        />
        <img
          src={string}
          className=" absolute -translate-x-[6.5rem] xl:translate-x-[100px] translate-y-[10rem] xl:translate-y-60 rotate-[35deg] xl:-rotate-[50deg] -z-10 "
        />
        <img
          src={string}
          className=" absolute -translate-x-[8rem] xl:translate-x-44 translate-y-[8rem] xl:translate-y-40 -rotate-[10deg] xl:rotate-[80deg] -z-10 "
        />

        <img
          src={arc1}
          className="absolute xl:scale-125 -translate-x-[7rem] xl:-translate-x-[320px] translate-y-[20rem] xl:translate-y-56 -rotate-90 xl:rotate-0 "
        />
        <img
          src={arc2}
          className="absolute scale-75 xl:scale-125 -translate-x-[2rem] xl:-translate-x-[150px] translate-y-[15rem] xl:translate-y-[420px] -rotate-[110deg] xl:rotate-0 "
        />
        <img
          src={arc3}
          className="absolute scale-50 xl:scale-125 -translate-x-[1.5rem] xl:translate-x-[220px] translate-y-[7.3rem] xl:translate-y-[420px] -rotate-90 xl:rotate-0 "
        />
        <img
          src={arc4}
          className="absolute scale-75 xl:scale-125 -translate-x-[6rem] xl:translate-x-[390px] translate-y-[3.5rem] xl:translate-y-56 -rotate-90 xl:rotate-0 "
        />

        <div
          className=" w-[110px] xl:w-[270px] h-[110px] xl:h-[270px] absolute -translate-x-24 xl:-translate-x-[240px] translate-y-[16rem]  xl:translate-y-[135px] -rotate-90 xl:rotate-0 text-center "
          style={{
            backgroundImage: `url(${wedge1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
          }}
        >
          <div className=" translate-y-5 xl:translate-y-[55px] ">
            <img
              src={wimg1}
              className=" translate-x-14 xl:translate-x-36 w-[30px] xl:w-[60px] rotate-90 xl:rotate-0 "
            />
          </div>
        </div>

        <div
          className=" w-[110px] xl:w-[270px] h-[110px] xl:h-[270px] aabsolute -translate-x-12 xl:-translate-x-[115px] translate-y-[13.2rem] xl:translate-y-64 text-center -rotate-[93deg] xl:-rotate-[2deg] "
          style={{
            backgroundImage: `url(${wedge2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
          }}
        >
          <div className=" translate-y-6 xl:translate-y-[70px] ">
            <img
              src={wimg2}
              className=" translate-x-16 xl:translate-x-40 w-[30px] xl:w-[70px] rotate-90 xl:rotate-0 "
            />
          </div>
        </div>
        <div
          className=" w-[110px] xl:w-[270px] h-[110px] xl:h-[270px] absolute -translate-x-12 xl:translate-x-[115px] translate-y-[8rem] xl:translate-y-64 text-center -rotate-90 xl:rotate-0 "
          style={{
            backgroundImage: `url(${wedge3})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
          }}
        >
          <div className=" translate-y-6 xl:translate-y-[75px] ">
            <img
              src={wimg3}
              className=" translate-x-12 xl:translate-x-32 w-[30px] xl:w-[70px] rotate-90 xl:rotate-0 "
            />
          </div>
        </div>
        <div
          className=" w-[110px] xl:w-[270px] h-[110px] xl:h-[270px] absolute -translate-x-24 xl:translate-x-[240px] translate-y-[5.2rem] xl:translate-y-36 text-center -rotate-90 xl:rotate-0 "
          style={{
            backgroundImage: `url(${wedge4})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
          }}
        >
          <div className=" translate-y-5 xl:translate-y-[60px] ">
            <img
              src={wimg4}
              className=" translate-x-14 xl:translate-x-36 w-[30px] xl:w-[70px] rotate-90 xl:rotate-0 "
            />
          </div>
        </div>

        <div className=" absolute w-[200px] xl:w-[500px] text-left xl:text-right -translate-x-12 xl:-translate-x-[650px] translate-y-[24rem] xl:translate-y-64 ">
          <p className=" text-gion-teal font-serif font-bold text-base xl:text-4xl ">
            QUALITY
          </p>
          <p className=" text-neutral-500 text-xs xl:text-xl ">
            ISO 9001, BIS certified products with advanced manufacturing
            technology recognized by major OEM.
          </p>
        </div>
        <div className=" absolute w-[240px] xl:w-[500px] text-left xl:text-right translate-x-20 xl:-translate-x-[480px] translate-y-[18.5rem] xl:translate-y-[460px] ">
          <p className=" text-gion-teal font-serif font-bold text-base xl:text-4xl ">
            PRODUCT DESIGN
          </p>
          <ol className=" text-neutral-500 text-xs xl:text-xl ">
            <li>1. Creative and well-experienced R&D team.</li>{" "}
            <li>
              2. We have Toolroom & R&D Department for continuous development
              and improvement under a single roof.
            </li>
          </ol>
        </div>

        <div className=" absolute w-[220px] xl:w-[500px] text-left translate-x-20 xl:translate-x-[550px] translate-y-[4rem] xl:translate-y-[460px] ">
          <p className=" text-gion-teal font-serif font-bold text-base xl:text-4xl ">
            COST LEADERSHIP
          </p>
          <p className=" text-neutral-500 text-xs xl:text-xl ">
            Complete Vertival Integration Dominated By Economies Of Scale.
          </p>
        </div>
        <div className=" absolute w-[310px] xl:w-[500px] text-left translate-x-2 xl:translate-x-[720px] translate-y-[0rem] xl:translate-y-64 ">
          <p className=" text-gion-teal font-serif font-bold text-base xl:text-4xl ">
            MASS PRODUCTION
          </p>
          <p className=" text-neutral-500 text-xs xl:text-xl ">
            Optimization for mass production with product versatility.
          </p>
        </div>

        {/* <img src={circle} className=" absolute h-[320px]  " /> */}

        {/* <img src={wedge1} className=" absolute -translate-x-[300px] translate-y-32 h-[290px]  " />
        <img src={wedge2} className=" absolute -translate-x-[165px] translate-y-72 h-[310px]  " />
        <img src={wedge3} className=" absolute translate-x-[130px] translate-y-72 h-[320px]  " />
        <img src={wedge4} className=" absolute translate-x-[300px] translate-y-32 h-[300px]  " /> */}
      </div>
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
