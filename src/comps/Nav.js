import { Link, Links, useLocation } from "react-router-dom";
import searchIcon from "../Images/icons/search.png";
import logo from "../Images/logo/gionlogo.png";
import { useEffect, useState } from "react";

function Nav(params) {
  const NavArr = {
    Home: "/",
    Products: "/products",
    Catalogue: "/catalogue",
    "About Us": "/aboutus",
    "Contact Us": "/contactus",
  };

  const [productsMenu, setProductsMenu] = useState(false);

  const location = useLocation();
  // console.log(window.location.pathname

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {window.innerWidth > 768 ? (
        
        <div className=" w-full h-[37px] bg-[#28A745] "></div>
      ) : (
        <div className="fixed w-full z-[40] ">
          <div className=" w-full h-[37px] bg-[#28A745] "></div>

          <div className=" h-[113px] w-full flex flex-row gap-32 items-center rounded-b-3xl shadow-lg shadow-black bg-[#00B2FF26] ">
            <Link to="/" className=" ml-[155px] w-[149px] cursor-pointer ">
              <img src={logo} />
            </Link>
            <div className=" flex flex-row flex-grow items-center ">
              {/* <div className=" flex flex-row ">
            <div className=" mb-5 flex flex-row ">
              <input
                className=" px-4 w-[22vw] border-2 rounded-l-full text-xl font-light "
                placeholder="Search"
              />
              <div className=" w-[65px] h-fit flex justify-center items-center rounded-r-full cursor-pointer  bg-[#333333] ">
                <img src={searchIcon} className=" py-[2px] w-[28px] " />
              </div>
            </div>
          </div> */}
              <div className=" mx-4 flex flex-row gap-20 text-2xl font-semibold ">
                {Object.keys(NavArr).map((each, ind) => {
                  return (
                    <Link
                      to={`${NavArr[each]}`}
                      className=" flex flex-col items-center justify-center group"
                      onMouseEnter={() =>
                        NavArr[each] === "/products"
                          ? setProductsMenu(true)
                          : ""
                      }
                      onMouseLeave={() =>
                        NavArr[each] === "/products"
                          ? setProductsMenu(false)
                          : ""
                      }
                    >
                      <div className=" cursor-pointer hover:scale-110 transition-all duration-200 ">
                        {each}
                      </div>
                      <div
                        className={` mt-2 h-[3px] ${
                          window.location.pathname == NavArr[each]
                            ? `w-[45px]`
                            : `w-0`
                        } rounded-full group-hover:w-[55px] transition-all duration-300 bg-neutral-800 `}
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
            </div>
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
            {/* <div className="mx-[130px]" /> */}
            <div className="absolute w-full h-[113px] backdrop-blur-md rounded-b-3xl -z-10 " />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
