import bannerAboutUs from "../Images/aboutusimages/bannerAboutUs.png";
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
import iso from "../Images/logo/iso_cert.png";
import bis from "../Images/logo/bis_cert.png";
import abbanner from "../Images/aboutusimages/cf0313c87677119261c3e6a759d55d2ceff1865b.png";

import oem from "../Images/aboutusimages/oemexec.jpg";
import yrsexp from "../Images/aboutusimages/yearsexp.jpg";
import rnd from "../Images/aboutusimages/randtool.jpg";
import natn from "../Images/aboutusimages/nation.jpg";
import happ from "../Images/aboutusimages/happycu.jpg";

import { motion } from "framer-motion";

import Gbutton from "./utilcomps/Gbutton";
import ContactUs from "./ContactUs";
import { Link, useLocation } from "react-router-dom";

function ContentAboutUs(params) {
  const location = useLocation();
  const currPage = location?.pathname;

  return (
    <motion.div
      className={` my-10 relative ${
        window?.innerWidth < 1024 ? ` w-[300px] ` : ` w-[1400px] h-[600px] `
      } flex ${
        window?.innerWidth < 1024 ? ` flex-col gap-8 ` : ` flex-row gap-16 `
      } `}
    >
      <div className=" hidden lg:block absolute -left-[330px] top-64 h-20 text-nowrap text-[44px] font-black tracking-[0.4em] opacity-15 -rotate-90 ">
        {" "}
        A B O U T U S{" "}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "linear" }}
        viewport={{ once: true }}
        className={` ${
          window?.innerWidth < 1024 ? ` h-[400px] ` : `  `
        } min-w-[40%] hover:scale-[1.01] transition-all duration-500 rounded-2xl shadow-custom-shadow overflow-clip `}
      >
        <img
          src={bannerAboutUs}
          className=" h-full w-full object-cover hover:scale-[1.02] transition-all duration-500 cursor-pointer "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "linear" }}
        viewport={{ once: true }}
        className={` py-6 flex flex-col ${
          window?.innerWidth < 1024 ? ` gap-2 ` : ` gap-12 `
        } items-start justify-center `}
      >
        <div
          className={` text-center lg:text-left ${
            window?.innerWidth < 768
              ? `text-[28px]`
              : `text-[48px] leading-none `
          } font-bold font-poppins `}
        >
          Advanced cooling, engineered by specialists
        </div>
        <div
          className={` text-center lg:text-start text-neutral-500 font-segoe ${
            window?.innerWidth < 1024 ? ` text-xs ` : ` text-2xl `
          } `}
        >
          For over 15 years, Gion Air Cooler (Deogun Industries) has focused
          only on building reliable, energy‑efficient air coolers for Indian
          homes and businesses. From in‑house R&D to ISO 9001 and BIS‑certified
          manufacturing, every cooler is designed, tested, and built in our own
          facility to handle India’s toughest summers.
        </div>
        <div className=" flex flex-col gap-4 font-bold font-segoe ">
          <p>✓ 15+ years of experience and OEM manufacturing expertise.</p>
          <p>
            ✓ Pan‑India dealer network with fast delivery and easy replacement
            support.
          </p>
          <p>
            ✓ Lakhs of satisfied customers who trust our quality and after‑sales
            service.
          </p>
        </div>

        <Gbutton
          linkTo={currPage == "/aboutus" ? "/products" : "/aboutus"}
          label={
            currPage == "/aboutus"
              ? "Explore Our Product Range"
              : "Explore More On The About Us Page"
          }
          w={" px-8 py-6 w-fit text-nowrap "}
          txt={" text-lg font-segoe "}
        />
      </motion.div>
    </motion.div>
  );
}

// dead section in ui design
function ContentAboutUssection2(params) {
  function QualityPromiseSprites(params) {
    return (
      <div className=" flex flex-col gap-4 items-center ">
        <img src={params?.icon} className=" w-[90px] h-[90px] " />
        <div className=" w-36 text-center text-xl text-neutral-600 font-segoe ">
          {params?.label}
        </div>
      </div>
    );
  }

  const qualityPromiseArr = [
    {
      label: "Cutting Edge Tech",
      icon: ceTech,
    },
    {
      label: "Advanced Engineering",
      icon: bulb,
    },
    {
      label: "Superior Quality",
      icon: qual,
    },
    {
      label: "Cost-Effective Manufacturing",
      icon: cash,
    },
    {
      label: "Energy Efficient",
      icon: flower,
    },
    {
      label: "ISO Certified",
      icon: iso,
    },
    {
      label: "BIS Certified",
      icon: bis,
    },
  ];

  return (
    <div className=" w-full h-fit flex flex-col justify-between text-center ">
      <div className=" w-full flex flex-col items-center justify-between ">
        <div className=" text-2xl lg:text-[40px] font-bold font-poppins text-gion-teal-2 ">
          OUR QUALITY PROMISE
        </div>
        <div className=" pt-16 px-2 w-[1200px] flex flex-row flex-wrap items-center justify-center gap-8 lg:gap-x-32 lg:gap-y-24 text-sm lg:text-base font-semibold ">
          {qualityPromiseArr?.map((each, ind) => {
            return (
              <QualityPromiseSprites label={each?.label} icon={each?.icon} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AboutUs(params) {
  function WhyChooseUsTiles(params) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className={` flex flex-col items-center ${params?.isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 `}
      >
        <div className=" mx-8 lg:mx-0 lg:min-w-[679px] lg:h-[451px] rounded-3xl lg:rounded-[57px] shadow-custom-shadow-big bg-neutral-200 overflow-clip ">
          <img src={params?.img} className=" h-full object-cover " />
        </div>
        <div
          className={`" flex flex-col justify-center text-center lg:${!params?.isReverse ? "text-left" : "text-right"} gap-4 lg:gap-8 `}
        >
          <div className=" font-poppins font-bold text-3xl lg:text-5xl text-gion-teal ">
            {params?.title}
          </div>
          <div className=" text-2xl lg:text-4xl font-roboto ">
            {params?.subtitle}
          </div>
        </div>
      </motion.div>
    );
  }

  const whyChooseUs = [
    {
      title: "O.E.M. Excellence",
      subtitle:
        "World-class manufacturing facilities delivering trusted quality.",
      img: oem,
    },
    {
      title: "30+ Years of Experience",
      subtitle: "Decades of innovation in cooling solutions.",
      img: yrsexp,
    },
    {
      title: "In-House R&D & Toolroom",
      subtitle: "Complete design-to-delivery expertise.",
      img: rnd,
    },
    {
      title: "Nationwide Presence",
      subtitle: "Trusted across India with a strong dealer network.",
      img: natn,
    },
    {
      title: "2.5 Lakhs Units Delivered Annually",
      subtitle: "A legacy of satisfaction and reliability.",
      img: happ,
    },
  ];

  return (
    <div className=" flex flex-col gap-3 lg:gap-[70px] items-center ">
      <div
        className=" py-20 w-full h-full flex justify-center "
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff, #E0ECED)",
        }}
      >
        <ContentAboutUs />
      </div>


      <div
        id="why choose us"
        className=" py-16 w-full lg:w-[70vw] flex flex-col gap-16 lg:gap-24 "
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
            <div className=" -mt-5 px-36 py-3 font-thin text-[40px] rounded-full border border-gion-teal-3 border-opacity-35 backdrop-blur-sm bg-gion-powder-blue bg-opacity-55 ">
              “Delivering comfort, efficiency, and trust in every product”
            </div>
          )}

          {window?.innerWidth <= 1024 && (
            <div className=" -mt-3 py-2 w-full h-full font-extralight text-4xl text-center leading-snug backdrop-blur-sm border-[1px] border-gion-seafoam-green rounded-2xl ">
              “Delivering comfort, efficiency, and trust in every product”
            </div>
          )}
        </motion.div>

        <div className=" px-4 lg:px-0 flex flex-col its-center gap-14 lg:gap-40 ">
          {whyChooseUs?.map((each, ind) => {
            return (
              <WhyChooseUsTiles
                title={each?.title}
                subtitle={each?.subtitle}
                img={each?.img}
                isReverse={ind % 2}
              />
            );
          })}
        </div>
      </div>

      {/**---------------------------------------------------------------------------- */}
      {true && (
        <div
          className=" py-20 w-full flex justify-center "
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff, #E0ECED)",
          }}
        >
          <ContentAboutUssection2 />
        </div>
      )}

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
    </div>
  );
}

export default AboutUs;
export { ContentAboutUs };
export { ContentAboutUssection2 };
