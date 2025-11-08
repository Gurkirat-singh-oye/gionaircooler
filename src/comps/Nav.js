import { Link, Links, useLocation } from "react-router-dom";
import searchIcon from "../Images/icons/search.svg";
import searchMobviIcon from "../Images/icons/Union.svg";
import burgerMenuIcon from "../Images/icons/burger menu.svg";
import logo from "../Images/logo/gionlogo.png";
import { useEffect, useState } from "react";

import facebookico from "../Images/icons/Facebook.svg";
import instaico from "../Images/icons/Instagram.svg";
import twitterico from "../Images/icons/Twitter.svg";
import linkedinico from "../Images/icons/LinkedIn.svg";

import closeIcon from "../Images/icons/close.png";

function Nav(params) {
  const NavArr = {
    Home: "/",
    Products: "/products",
    Catalogue: "/catalogue",
    "About Us": "/aboutus",
    "Contact Us": "/contactus",
  };

  const [productsMenu, setProductsMenu] = useState(false);
  const [navH, setNavH] = useState(113);
  const [brMenu, setBrMenu] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const location = useLocation();
  // console.log(window.location.pathname


  window?.addEventListener("scroll", () => {
    const scrollY = window?.scrollY;
    setShowNav(scrollY < lastScrollY);
    setLastScrollY(scrollY);
  });

  useEffect(() => {
    window?.innerWidth < 1024 && !brMenu ? setNavH(70) : setNavH(113);
  }, [window?.innerWidth]);

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`fixed w-full delay-200 ease-in-out transition-all duration-500 z-[40] ${ showNav ? `translate-y-0` : `-translate-y-full`} `}>
      <div
        className={` my-4 mx-2 sm:mx-8 2xl:mx-32 h-[${navH}px] rounded-full bg-[#2C69751A] border border-[#DEEFFF] transition-all duration-700 `}
      >
        <div
          className={` relative px-[30px] lg:px-0 w-full h-[${navH}px] max-h-[113px] flex flex-row lg:gap-8 2xl:gap-32 items-center justify-between `}
        >
          <div
            className={` absolute w-full inset-x-0 h-full max-h-[88px] sm:backdrop-blur-[10px] bg-white sm:bg-opacity-50 rounded-full -z-10 `}
          />
          <Link to="/">
            <img
              src={logo}
              className=" lg:ml-[80px] 2xl:ml-[135px] w-[60px] lg:w-[94px] cursor-pointer "
            />
          </Link>
          {window?.innerWidth > 1024 && (
            <div className=" mx-4 flex flex-row gap-10 text-xl text-gion-teal text-nowrap font-light ">
              {Object.keys(NavArr).map((each, ind) => {
                return (
                  <Link
                    to={`${NavArr[each]}`}
                    className=" flex flex-col items-center justify-center group"
                    onMouseEnter={() =>
                      NavArr[each] === "/products" ? setProductsMenu(false) : ""
                    }
                    onMouseLeave={() =>
                      NavArr[each] === "/products" ? setProductsMenu(false) : ""
                    }
                  >
                    <div className=" cursor-pointer hover:scale-110 transition-all duration-200 ">
                      {each}
                    </div>
                    <div
                      className={` mt-1 h-[3px] ${
                        window.location.pathname == NavArr[each]
                          ? `w-[45px]`
                          : `w-0`
                      } rounded-full group-hover:w-[55px] transition-all duration-300 bg-gion-teal `}
                    />
                    {NavArr[each] === "/products" && productsMenu && (
                      <div className=" absolute top-[103px] ml-10 pt-12 w-[140px] ">
                        <div className=" pl-3 h-0 group-hover:h-fit ease-in-out transition-all duration-300 flex flex-col items-start text-base shadow-custom-shadow bg-slate-50 ">
                          <div className=" py-2 ">Air Cooler</div>
                          <div className=" py-2 ">Room Heater</div>
                          <div className=" py-2 ">Water Geyser</div>
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          )}

          {window?.innerWidth > 1024 ? (
            <div className=" mr-4 lg:mr-10 flex flex-row flex-shrink-0 gap-[2vw] items-center ">
              <div className=" flex flex-row gap-2">
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
              <div>
                <img src={searchIcon} className=" w-6 " />
              </div>
            </div>
          ) : (
            <div>
              <img
                src={burgerMenuIcon}
                className="w-8"
                onClick={() => {
                  setBrMenu(!brMenu);
                }}
              />
            </div>
          )}

          {/* {window?.innerWidth > 1024 ? (
            <div className=" mr-[155px] flex flex-row ">
              <div className=" mb-5 flex flex-row ">
                <input
                  className=" px-4 w-[12vw] border-2 rounded-l-full text-xl font-light "
                  placeholder="Search"
                />
                <div className=" w-[65px] h-fit flex justify-center items-center rounded-r-full cursor-pointer  bg-[#333333] ">
                  <img src={searchIcon} className=" py-[2px] w-[28px] " />
                </div>
              </div>
            </div>
          ) : (
            <div className=" flex flex-row gap-6 ">
              <div>
                <img src={searchMobviIcon} />
              </div>
              <div
                onClick={() => {
                  navH === 113 ? setNavH(400) : setNavH(113);
                }}
              >
                <img src={burgerMenuIcon} />
              </div>
            </div>
          )} */}
          {/* <div className="mx-[130px]" /> */}
        </div>
        {/* <div
          className={` px-9 ${
            navH === 113 ? ` h-0 duration-500 ` : ` h-[400px] duration-1000 `
          } flex flex-col items-end transition-all overflow-clip `}
        >
          {Object.keys(NavArr).map((each, ind) => {
            return (
              <Link
                to={NavArr[each]}
                className=" py-2 text-3xl "
                onClick={() => setNavH(113)}
              >
                {each}
              </Link>
            );
          })}
        </div> */}
        <div
          className={` ${
            brMenu ? "mr-0" : "-mr-[100vw]"
          } fixed top-0 right-0 w-[100vw] h-screen bg-gion-powder-blue transition-all duration-500 ease-in-out `}
        >
          <div className=" flex justify-end ">
            <img
              src={closeIcon}
              onClick={() => setBrMenu(false)}
              className=" p-3 w-10 "
            />
          </div>
          <div className=" h-full flex flex-col gap-12 lg:gap-16 items-center text-6xl text-gion-teal font-poppins ">
            <img src={logo} onClick={() => setBrMenu(false)} />
            <Link to="/" onClick={() => setBrMenu(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setBrMenu(false)}>
              Products
            </Link>
            <Link to="/catalogue" onClick={() => setBrMenu(false)}>
              Catalogue
            </Link>
            <Link to="/contactus" onClick={() => setBrMenu(false)}>
              Contact Us
            </Link>
            <Link to="/aboutus" onClick={() => setBrMenu(false)}>
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
