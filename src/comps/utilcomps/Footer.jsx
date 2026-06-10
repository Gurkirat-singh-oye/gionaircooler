import gionLogo from "../../Images/logo/gionlogo.png";
import facebookico from "../../Images/icons/Facebookw.svg";
import instaico from "../../Images/icons/Instagramw.svg";
import twitterico from "../../Images/icons/Twitterw.svg";
import linkedinico from "../../Images/icons/LinkedInw.svg";

import locico from "../../Images/icons/loc.svg";
import mailico from "../../Images/icons/mail.svg";

import { Link } from "react-router-dom";

function Footer(params) {
  return (
    <div className=" pt-28 w-full h-[680px] flex flex-col lg:flex-row justify-center gap-28 rounded-t-[100px] bg-gion-teal-3 ">
      <div className="  flex flex-col gap-8 items-center ">
        <div>
          <img src={gionLogo} className=" w-[225px] " />
        </div>
        <div className=" flex flex-row gap-5 opacity-75 ">
          <div>
            <img src={facebookico} className=" w-11 rounded-2xl" />
          </div>
          <div>
            <img src={instaico} className=" w-11 rounded-2xl" />
          </div>
          <div>
            <img src={twitterico} className=" w-11 rounded-2xl" />
          </div>
          <div>
            <img src={linkedinico} className=" w-11 rounded-2xl" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-14 " >
        <div className=" py-8 flex flex-col gap-6 text-onahau ">
          <div className=" text-[32px] font-poppins font-semibold uppercase ">
            Quick Links
          </div>
          <div className=" flex flex-col gap-3 font-extralight text-[26px] ">
            <Link to="/home">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/catalogue">Catalogue</Link>
          </div>
        </div>
        <div className=" py-8 flex flex-col gap-6 text-onahau ">
          <div className=" text-[32px] font-poppins font-semibold uppercase ">
            Our Products
          </div>
          <div className=" flex flex-col gap-3 font-extralight text-[26px] ">
            <Link>Air Cooler</Link>
            <Link>Room Heater</Link>
            <Link>Water Geyser</Link>
          </div>
        </div>
        <div className=" py-8 w-[400px] flex flex-col gap-6 text-onahau ">
          <div className=" text-[32px] font-poppins font-semibold uppercase ">
            Contact Us
          </div>
          <div className=" flex flex-col gap-6 font-extralight text-[26px] ">
            <div className=" pl-[10px] flex flex-row gap-6 " >
              <img src={locico} className=" w-[24px] opacity-75 " />
              <div>
                DEOGUN INDUSTRIES, Khewat No.458/429, Khatoni No.473,
                Village-Jakhoda, Jhajjar, Bahadurgarh,
              </div>
            </div>
            <div className=" pl-[10px] flex flex-row gap-6 " >
              <img src={mailico} className=" w-[27px] opacity-75 " />
              <div>Business Related Email: deogunindustries@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
