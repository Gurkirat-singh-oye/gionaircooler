import { useState } from "react";
import upArrow from "../Images/icons/Vector.png";
import checkbox from "../Images/icons/checkbox.svg";
import arrowRight from "../Images/icons/Arrow Right.svg";
import productimg from "../Images/productimages/f70a8065edf3036598a7f1c63f71aa29.jpeg";
import { Link } from "react-router-dom";

import lilliput from "../Images/productimages/lilliput.jpeg";
import amaze from "../Images/productimages/amaze.jpeg";
import ftw from "../Images/productimages/GE_512.jpeg";
import ftwt from "../Images/productimages/GE_512T.jpeg";
import windcool from "../Images/productimages/windowcooler.jpeg";
import fft from "../Images/productimages/ge_515.jpeg";
import fftt from "../Images/productimages/ge515t.jpeg";
import fst from "../Images/productimages/ge517.jpeg";
import fto from "../Images/productimages/ge521.jpeg";
import ssto from "../Images/productimages/ge7721.jpeg";
import fet from "../Images/productimages/ge518.jpeg";
import sset from "../Images/productimages/ge7718.jpeg";
import Gbutton from "./utilcomps/Gbutton";

function ProductCard(params) {
  return (
    <div className=" w-[180px] h-[290px] lg:w-[400px] lg:h-[580px] flex flex-col border-[1px] border-[#F3F3F3] hover:bg-[#F3F3F3] hover:scale-105 transition-all duration-500 rounded-b-lg cursor-pointer group ">
      <div className=" overflow-clip ">
        <img
          className=" h-[180px] lg:h-[400px] group-hover:scale-95 transition-all duration-500 object-cover "
          src={params?.img}
        />
      </div>
      <div className=" p-2 lg:p-6 flex flex-col flex-grow justify-between ">
        <div className=" text-sm lg:text-base flex flex-row justify-between ">
          <div className=" text-[#667085] font-medium ">{params?.name}</div>
          <div className=" font-bold text-[#344054] ">{params?.price}</div>
        </div>
        <div className=" h-[40px] flex justify-start text-[#98A2B3] text-xs lg:text-sm ">
          Product Description
        </div>

        <Gbutton label={"ENQUIRY NOW"} w={ window?.innerWidth < 1024 ? "w-[150px]" : "w-[220px]"} linkTo={"/contactus"} />

        {/* <Link
          to="/contactus"
          className=" mx-auto w-[220px] h-[46px] flex justify-center items-center text-2xl text-white rounded cursor-pointer shadow-neutral-600 shadow-md hover:bg-[#28A745] bg-[#007BFF] "
        >
          ENQUIRY NOW
        </Link> */}
      </div>
    </div>
  );
}

function ProductsPage(params) {
  const [filterColorBox, setFilterColorBox] = useState(false);

  const products = [
    {
      name: "Lilliput",
      price: "15,000",
      img: lilliput,
      series: "personal",
    },
    {
      name: "Amaze",
      price: "",
      img: amaze,
      series: "personal",
    },
    {
      name: "GE-512",
      price: "",
      img: ftw,
      series: "personal",
    },
    {
      name: "GE-512 T",
      price: "",
      img: ftwt,
      series: "personal",
    },
    {
      name: "Window Cooler",
      price: "",
      img: windcool,
      series: "window",
    },
    {
      name: "GE-515",
      price: "",
      img: fft,
      series: "eco",
    },
    {
      name: "GE-515 T",
      price: "",
      img: fftt,
      series: "eco",
    },
    {
      name: "GE-517",
      price: "",
      img: fst,
      series: "eco",
    },
    {
      name: "GE-521",
      price: "",
      img: fto,
      series: "premium",
    },
    {
      name: "GE-7721",
      price: "",
      img: ssto,
      series: "premium",
    },
    {
      name: "GE-518",
      price: "",
      img: fet,
      series: "premium",
    },
    {
      name: "GE-7718",
      price: "",
      img: sset,
      series: "premium",
    },
  ];

  const [selectedSeries, setSelectedSeries] = useState("");
  const [showCat, setShowCat] = useState(false);

  return (
    <div className=" mb-36 ">
      <div
        className={` w-full ${
          0 ? `h-[300px]` : `h-[160px]`
        } lg:h-[280px] flex flex-col gap-3 lg:gap-10 justify-center items-center text-[#FFFFFF] bg-[#0098DA] `}
      >
        <div className=" text-5xl lg:text-6xl font-[Newsreader] font-bold ">
          {" "}
          PRODUCTS{" "}
        </div>
        {/**-----------get series from backend-------------------------------------------------------------------------- */}
        {window?.innerWidth < 1024 ? (
          <div>
            <div className={` flex flex-row items-center justify-center gap-2 `} >
              <div
                className={` text-2xl font-light `}
                onClick={() => setShowCat(!showCat)}
              >
                Categories
              </div>
              <div className={` ${ showCat ? ` -rotate-90 ` : ` rotate-90 `} transition-all duration-500 `}>
                {">"}
              </div>
            </div>
            <div className={` absolute -ml-9 w-[200px] ${ showCat ? ` h-[170px] pt-5 ` : ` h-[0px] ` } flex flex-col gap-3 transition-all duration-700 rounded-b-lg bg-[#0098DA] overflow-clip `} >
              <div onClick={() => setSelectedSeries("personal")}>PERSONAL SERIES</div>
              <div onClick={() => setSelectedSeries("window")}>WINDOWS SERIES</div>
              <div onClick={() => setSelectedSeries("eco")}>ECO SERIES</div>
              <div onClick={() => setSelectedSeries("premium")}>PREMIUM SERIES</div>
            </div>
          </div>
        ) : (
          <div className=" flex flex-row gap-16 justify-center items-center text-xl font-black ">
            <div
              className=" flex flex-col items-start cursor-pointer group"
              onClick={() => setSelectedSeries("personal")}
            >
              PERSONAL SERIES{" "}
              <div
                className={` ${
                  selectedSeries === "personal" ? `w-[80px]` : `w-0`
                } group-hover:w-[100px] h-[3px] transition-all duration-500 bg-[#213577] `}
              />
              <div className=" mx-auto text-base opacity-60 ">4 Products</div>
            </div>
            <div
              className=" flex flex-col items-start cursor-pointer group"
              onClick={() => setSelectedSeries("window")}
            >
              WINDOW SERIES{" "}
              <div
                className={` ${
                  selectedSeries === "window" ? `w-[80px]` : `w-0`
                } group-hover:w-[100px] h-[3px] transition-all duration-500 bg-[#213577] `}
              />
              <div className=" mx-auto text-base opacity-60 ">1 Products</div>
            </div>
            <div
              className=" flex flex-col items-start cursor-pointer group"
              onClick={() => setSelectedSeries("eco")}
            >
              ECO SERIES{" "}
              <div
                className={` ${
                  selectedSeries === "eco" ? `w-[80px]` : `w-0`
                } group-hover:w-[100px] h-[3px] transition-all duration-500 bg-[#213577] `}
              />
              <div className=" mx-auto text-base opacity-60 ">3 Products</div>
            </div>
            <div
              className=" flex flex-col items-start cursor-pointer group"
              onClick={() => setSelectedSeries("premium")}
            >
              PREMIUM SERIES{" "}
              <div
                className={` ${
                  selectedSeries === "premium" ? `w-[80px]` : `w-0`
                } group-hover:w-[100px] h-[3px] transition-all duration-500 bg-[#213577] `}
              />
              <div className=" mx-auto text-base opacity-60 ">4 Products</div>
            </div>
          </div>
        )}
      </div>

      {true && (
        <div id="products_content" className=" lg:m-20 flex flex-col lg:flex-row gap-2 lg:gap-16 ">
          {/** get all filters from backend */}
          { true && <div
            id="filters"
            className=" w-screen lg:w-80 flex flex-col flex-shrink-0 gap-5 "
          >
            <div className=" p-3 lg:p-0 w-full flex flex-row justify-between items-center ">
              <div className=" font-medium text-[#140342] ">Filters</div>
              <div
                className=" px-4 py-1 text-sm text-[#726C6C] border border-[#726C6C] rounded-full cursor-pointer hover:bg-neutral-100 active:bg-neutral-300 "
                onClick={() => setSelectedSeries("")}
              >
                Clear All
              </div>
            </div>

            { false && <div className=" p-8 flex flex-col items-center justify-center gap-5 border-[1px] border-[#F3F3F3] rounded-lg ">
              {/* <div id="filt_rate" className=" w-full ">
              <div className=" flex flex-row justify-between items-center ">
                <div className=" font-medium text-[#140342] ">Ratings</div>
                <div>
                  <img src={upArrow} />
                </div>
              </div>
            </div> */}

              <div className=" w-full flex flex-col gap-3 ">
                <div
                  className=" flex flex-row justify-between items-center cursor-pointer "
                  onClick={() => setFilterColorBox(!filterColorBox)}
                >
                  <div className=" font-medium text-[#140342] ">Color</div>
                  <div className="  ">
                    <img
                      className={` ${filterColorBox ? `rotate-180` : ``} `}
                      src={upArrow}
                    />
                  </div>
                </div>
                {/** get all the colors from backend
                 * #TODO: toggle checkbox*/}
                <div
                  className={` ${
                    !filterColorBox ? `h-0 overflow-clip` : ``
                  } flex flex-col gap-2 text-sm transition-all duration-100 `}
                >
                  <div className=" flex flex-row items-center justify-between cursor-pointer ">
                    <div className=" flex flex-row gap-2 ">
                      <img
                        className=" mt-[2px] w-[14px] h-[14px] "
                        src={checkbox}
                      />
                      <div>Black</div>
                    </div>
                    <div>{"(12)"}</div>
                  </div>
                  <div className=" flex flex-row items-center justify-between cursor-pointer ">
                    <div className=" flex flex-row gap-2 ">
                      <img
                        className=" mt-[2px] w-[14px] h-[14px] "
                        src={checkbox}
                      />
                      <div>Grey</div>
                    </div>
                    <div>{"(12)"}</div>
                  </div>
                  <div className=" flex flex-row items-center justify-between cursor-pointer ">
                    <div className=" flex flex-row gap-2 ">
                      <img
                        className=" mt-[2px] w-[14px] h-[14px] "
                        src={checkbox}
                      />
                      <div>White</div>
                    </div>
                    <div>{"(12)"}</div>
                  </div>
                </div>
              </div>
            </div>}
          </div>}

          <div className=" w-screen flex flex-row justify-center flex-wrap gap-2 lg:gap-10 ">
            {/** check for if the series filter is applied */}
            {selectedSeries == ""
              ? products.map((each, ind) => {
                  return (
                    <div>
                      {
                        <div>
                          <ProductCard
                            img={each?.img}
                            name={each?.name}
                            price={each?.price}
                          />
                        </div>
                      }
                    </div>
                  );
                })
              : products.map((each, ind) => {
                  return (
                    <>
                      {selectedSeries == each?.series && (
                        <div>
                          <ProductCard
                            img={each?.img}
                            name={each?.name}
                            price={each?.price}
                          />
                        </div>
                      )}
                    </>
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
