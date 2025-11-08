import { Link, Links, useLocation } from "react-router-dom";
import gionLogo from "../../Images/logo/gionlogo.png";

import facebookico from "../../Images/icons/Facebookw.svg";
import instaico from "../../Images/icons/Instagramw.svg";
import twitterico from "../../Images/icons/Twitterw.svg";
import linkedinico from "../../Images/icons/LinkedInw.svg";

import locico from "../../Images/icons/loc.svg";
import mailico from "../../Images/icons/mail.svg";

function Footer(params) {
  const location = useLocation();

  // ${ window?.innerWidth < 400 ? "h-[125vh]" : "h-[120vh]" }
  return (
    <div
      className={`  ${
        window?.innerWidth < 1024 ? "w-screen flex flex-col items-center " : ""
      } relative lg:w-full lg:h-[53vh] bg-gion-teal `}
    >
      {location && (
        <div
          className={` w-full h-[16vh] rounded-b-[200px] ${
            window.location.pathname == "/products"
              ? `bg-white`
              : `bg-gion-powder-blue`
          } `}
          style={{
            clipPath: "",
          }}
        />
      )}
      <div className=" lg:hidden absolute scale-x-110 w-[120vw] h-[120vw] -translate-y-24 rounded-full bg-gion-teal " />
      <div className=" py-14 absolute -top-24 -left-[25vw] lg:left-44 w-[150vw] h-[150vw] lg:w-[30vw] lg:h-[30vw] flex flex-col justify-between items-center rounded-full lg:bg-gion-teal ">
        <img src={gionLogo} className="  w-[60vw] lg:w-[18vw] " />
        <div className=" absolute hidden h-full pt-64 lg:flex flex-row gap-6 items-center  ">
          <div>
            <img src={facebookico} className=" w-16 rounded-2xl" />
          </div>
          <div>
            <img src={instaico} className=" w-16 rounded-2xl" />
          </div>
          <div>
            <img src={twitterico} className=" w-16 rounded-2xl" />
          </div>
          <div>
            <img src={linkedinico} className=" w-16 rounded-2xl" />
          </div>
        </div>
      </div>
      <div
        className={` lg:absolute mt-14 mb-14 lg:mb-0 lg:m-10 lg:right-[10vw] flex flex-col lg:flex-row gap-16 text-2xl text-center lg:text-start font-[Poppins] text-[#FFFFFF] z-[2] `}
      >
        <div className=" flex flex-col gap-4 ">
          <div className=" text-4xl font-[Newsreader] font-semibold ">
            Quick Links
          </div>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/catalogue">Catalogue</Link>
        </div>
        <div className=" flex flex-col gap-4 ">
          <div className=" text-4xl font-[Newsreader] font-semibold ">
            Our Products
          </div>
          <Link to="/products">Air Cooler</Link>
          <div>Room Heater</div>
          <div>Water Geyser</div>
        </div>
        <div className=" px-4 w-screen lg:w-96 flex flex-col items-center gap-4 ">
          <div className=" text-4xl font-[Newsreader] font-semibold ">
            Contact Us
          </div>
          <div className=" pr-[24px] sm:pr-0 w-full flex flex-row gap-3 justify-center sm:justify-start items-center ">
            <div className=" w-[10vw] lg:w-10 flex flex-shrink-0 ">
              {" "}
              <img src={locico} className=" w-[24px] " />{" "}
            </div>
            <div className=" flex sm:text-start text-wrap ">
              DEOGUN INDUSTRIES, Khewat No.458/429, KhatoniNo.473,
              Village-Jakhoda, Jhajjar, Bahadurgarh,
            </div>
          </div>
          <div className=" pr-[24px] sm:pr-0 w-full flex flex-row gap-3 justify-center sm:justify-start items-center ">
            <div className="  w-[10vw] lg:w-10 flex flex-shrink-0 ">
              <img src={mailico} className=" w-[24px] " />
            </div>
            <div className=" flex sm:text-start text-wrap ">
              {window?.innerWidth < 1024
                ? "deogunindustries@gm ail.com"
                : "deogunindustries@gmail.com"}
            </div>
          </div>
          <div className=" mt-6 flex lg:hidden flex-row gap-6 bottom-0 ">
            <div>
              <img src={facebookico} className=" w-10 " />
            </div>
            <div>
              <img src={instaico} className=" w-10 " />
            </div>
            <div>
              <img src={twitterico} className=" w-10 " />
            </div>
            <div>
              <img src={linkedinico} className=" w-10 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
