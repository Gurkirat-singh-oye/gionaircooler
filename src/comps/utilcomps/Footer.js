import { Link, Links, useLocation } from "react-router-dom";
import gionLogo from "../../Images/logo/gionlogo.png";

function Footer(params) {

  const location = useLocation();

  return (
    <div className={` ${ window?.innerWidth < 1024 ? "w-screen" : "" } relative lg:w-full h-[125vh] lg:h-[53vh] bg-[#0098DA] `}>
      { location && <div
        className={` w-full h-[16vh] rounded-b-[200px] ${ window.location.pathname == "/products" ? `bg-white` : `bg-[#EBF4FF]`} `}
        style={{
          clipPath: "",
        }}
      />}
      <div className=" absolute -top-24 -left-[25vw] lg:left-44 w-[150vw] h-[150vw] lg:w-[30vw] lg:h-[30vw] flex justify-center items-center rounded-full bg-[#0098DA] ">
        <img src={gionLogo} className=" -mt-80 lg:-mt-44 w-[60vw] lg:w-[18vw] " />
      </div>
      <div className={` absolute mt-8 lg:m-10 lg:right-[10vw] flex flex-col lg:flex-row gap-16 text-2xl text-center lg:text-start font-[Poppins] text-[#FFFFFF] `} >
        <div className=" flex flex-col gap-4 " >
          <div className=" text-4xl underline font-[Newsreader] font-semibold " >Quick Links</div>
          <Link to="/" >Home</Link>
          <Link to="/aboutus" >About Us</Link>
          <Link to="/contactus" >Contact Us</Link>
          <Link to="/catalogue" >Catalogue</Link>
        </div>
        <div className=" flex flex-col gap-4 " >
          <div className=" text-4xl underline font-[Newsreader] font-semibold " >Our Products</div>
          <Link to="/products" >Air Cooler</Link>
          <div>Room Heater</div>
          <div>Water Geyser</div>
        </div>
        <div className=" w-96 flex flex-col gap-4 " >
          <div className=" text-4xl underline font-[Newsreader] font-semibold " >Contact Us</div>
          <div>Address:</div>
          <div>DEOGUN INDUSTRIES, Khewat No.458/429, KhatoniNo.473, Village-Jakhoda, Jhajjar, Bahadurgarh,</div>
          <div>Business Related Email:deogunindustries@gmail.com</div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
