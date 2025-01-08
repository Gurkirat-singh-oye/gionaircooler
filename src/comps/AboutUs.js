import img1 from "../Images/aboutusimages/5c4b0d5fd1a44c314bdd348b339574d2.png";
import pencils from "../Images/icons/pencils.png";
import vision from "../Images/aboutusimages/423105090abe76ae3b5e28b90d92b7a2.jpeg";
import happyCust from "../Images/logo/1371ac0d0c89bb3149b81aa8e857f1d0.png";
import INFlag from "../Images/logo/rb_538 1.png";
import servMan from "../Images/logo/Group 101.png";
import ship from "../Images/logo/Fast Shipping.png";
import warr from "../Images/logo/rb_45559 1.png";
import replace from "../Images/logo/Group 102.png";

import ceTech from "../Images/icons/CETech.png";
import bulb from "../Images/icons/bulb.png";
import qual from "../Images/icons/Quality.png";
import cash from "../Images/icons/cash.png";
import flower from "../Images/icons/Save energy.png";

import Gbutton from "./utilcomps/Gbutton";
import ContactUs from "./ContactUs";

function ContentAboutUs(params) {
  return (
    <div
      className={` mt-[300px] ${
        window?.innerWidth ? ` w-[300px] ` : ` w-[1000px] h-[550px] `
      } flex ${window?.innerWidth < 768 ? ` flex-col gap-8 ` : ` flex-row gap-16 `} `}
    >
      <div
        className={` ${
          window?.innerWidth < 768 ? ` h-[400px] ` : `  `
        } min-w-[40%] hover:scale-105 transition-all duration-500 rounded-lg shadow-custom-shadow overflow-clip `}
      >
        <img
          src={img1}
          className=" h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer "
        />
      </div>
      <div className={` flex flex-col ${ window?.innerWidth ? `  ` : `  ` } items-start `}>
        <div
          className={` flex flex-row items-center text-[#007BFF] font-semibold ${
            window?.innerWidth < 768 ? ` text-xs ` : ` text-base `
          } `}
        >
          <div
            className={` mx-1  ${
              window?.innerWidth < 768
                ? ` h-[1px] w-[30px] `
                : ` h-[2px] w-[60px] `
            } bg-[#007BFF] `}
          />
          ABOUT GIONCOOLER
        </div>
        <div
          className={` text-left ${
            window?.innerWidth < 768 ? `text-[28px]` : `text-5xl`
          } text-[#6C757D] font-bold font-[Newsreader] `}
        >
          Innovation Empowered: Transforming Everyday Living!
        </div>
        <div className={` text-[#495057] text-start ${ window?.innerWidth < 768 ? ` text-xs ` : ` text-base ` } `}>
          At Gion, we’ve been transforming everyday living since 2010 with
          smart, reliable, and user-friendly electrical products. From air
          coolers and room heaters to water geysers, our rigorously tested range
          ensures top-notch quality and performance.
        </div>
        <div className=" w-full flex flex-row gap-36 ">
          <div className=" flex flex-row gap-4 ">
            <img src={pencils} className=" w-[50px] h-[50px] " />
            <div className=" text-lg text-start w-[100px] ">
              Innovative Designs
            </div>
          </div>
          <div className=" flex flex-row gap-4 ">
            <img src={pencils} className=" w-[50px] h-[50px] " />
            <div className=" text-lg text-start w-[100px] ">
              Dedicated Workers
            </div>
          </div>
        </div>
        <div className={` text-[#495057] text-start ${ window?.innerWidth < 768 ? ` text-xs ` : ` text-base ` } `}>
          Driven by cutting-edge engineering and a passion for excellence, we
          create products that blend style, functionality, and durability.
          Thanks to the trust of our customers and the dedication of our skilled
          team, Gion continues to redefine convenience and comfort for modern
          lifestyles.
        </div>
        <Gbutton label={"READ MORE"} w={"w-[180px]"} />
      </div>
    </div>
  );
}

function ContentAboutUssection2(params) {
  return (
    <div className=" w-full h-[70vh] flex flex-col justify-between ">
      <div className=" w-full min-h-[36%] flex flex-row justify-center items-center gap-64 bg-[#F2F3F8] ">
        <div className=" w-[120px] flex flex-col ">
          <img src={happyCust} className=" object-cover " />
          <div>10Lacs+ Happy</div>
          <div className=" text-gion-blue font-semibold ">Customers</div>
        </div>
        <div className=" w-[120px] flex flex-col ">
          <img src={ship} className=" pb-3 object-cover " />
          <div>Faster</div>
          <div className=" text-gion-blue font-semibold ">Delivery</div>
        </div>
        <div className=" w-[65px] flex flex-col ">
          <img src={servMan} className=" pb-4 object-cover " />
          <div>On Site</div>
          <div className=" text-gion-blue font-semibold ">Service</div>
        </div>
        <div className=" w-[120px] flex flex-col ">
          <img src={INFlag} className=" pb-3 object-cover " />
          <div>Made in India</div>
          <div className=" text-gion-blue font-semibold ">Products</div>
        </div>
      </div>
      <div className=" py-4 flex flex-row gap-96 justify-center items-center flex-grow ">
        <div className=" w-[100px] flex flex-col items-center gap-4 ">
          <img src={warr} className=" " />
          <div className=" font-semibold text-nowrap text-gion-blue ">
            1 Year Warranty
          </div>
        </div>
        <div className=" w-[80px] flex flex-col items-center gap-4 ">
          <img src={replace} className="  " />
          <div className=" font-semibold text-nowrap text-gion-blue ">
            Easy Replacement
          </div>
        </div>
      </div>
      <div className=" py-8 w-full min-h-[36%] flex flex-col items-center justify-between bg-[#F2F3F8] ">
        <div className=" text-gion-blue font-semibold ">INVEST IN YOURSELF</div>
        <div className=" text-5xl font-medium font-[Newsreader] ">
          OUR QUALITY PROMISE
        </div>
        <div className=" pt-10 flex flex-row items-center justify-center gap-16 font-semibold ">
          <div className=" flex flex-row gap-4 ">
            <img src={ceTech} />
            <div className=" w-24 text-start text-gion-blue ">
              Cutting Edge Tech.
            </div>
          </div>
          <div className=" flex flex-row gap-4 ">
            <img src={bulb} />
            <div className=" w-20 text-start text-gion-blue ">
              Revolutionary Design
            </div>
          </div>
          <div className=" flex flex-row gap-4 ">
            <img src={qual} />
            <div className=" w-20 text-start text-gion-blue ">
              Superior Quality
            </div>
          </div>
          <div className=" flex flex-row items-center gap-4 ">
            <img src={cash} />
            <div className=" w-20 text-start text-gion-blue ">Economical</div>
          </div>
          <div className=" flex flex-row gap-4 ">
            <img src={flower} />
            <div className=" w-20 text-start text-gion-blue ">
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
    <div className=" mt-32 flex flex-col gap-[70px] items-center ">
      <ContentAboutUs />
      {/**---------------------------------------------------------------------------- */}
      <ContentAboutUssection2 />
      {/**---------------------------------------------------------------------------- */}
      <div className=" relative px-8 w-full h-[70vh] flex flex-col gap-16 items-center overflow-clip ">
        <div className=" mt-52 text-[#FFFFFF] text-9xl [text-shadow:_-3px_3px_3.5px_rgb(0_0_0_/_50%)] ">
          OUR VISION
        </div>
        <div className=" text-teal-200 text-5xl ">
          Our Vision is to be India's No.1 Brand and to Take this Brand to Every
          Household in India and Build Customer Satisfaction.
        </div>
        <img src={vision} className=" absolute -mt-[1200px] -z-10 " />
      </div>
      <div className=" w-full ">
        <ContactUs />
      </div>
    </div>
  );
}

export default AboutUs;
export { ContentAboutUs };
export { ContentAboutUssection2 };
