import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

import colectionImg from "../Images/productimages/f70a8065edf3036598a7f1c63f71aa29.jpeg";
import collectImg1 from "../Images/productimages/24c25f87d72ad4b9b0546a7fda21e818.png";
import collectImg2 from "../Images/productimages/b660e6b73aceb914e737810b4dd11814.png";
import collectImg3 from "../Images/productimages/ee8f5d0266b915a51e22cdeaa4caee80.png";
import arrow from "../Images/icons/Line 2.svg";
import factory from "../Images/icons/factory.png";
import heart from "../Images/icons/heart.svg";
import left from "../Images/icons/Left.svg";
import right from "../Images/icons/Right.svg";
import star from "../Images/icons/ant-design_star-filled.svg";

import hero from "../Images/home hero banners.png";
import { motion } from "framer-motion";

import featureImg from "../Images/aboutusimages/4a76f14900cc5759219c030a8b30edbd.png";
import marbleBg from "../Images/f3d6a187ca8216e6c96f1fdf56225dcd.png";
import reviewBg from "../Images/image 9.png";
import face1 from "../Images/face1.jpeg";
import gabi from "../Images/87908019868087fa3c9c8deff39458e345085d41.png";
import bgTealGradient from "../Images/Rectangle 273.png";
import thinVerticalLine from "../Images/Line 149.png";

import CoolProductsCard from "./utilcomps/CoolProductsCard";
import { ContentAboutUs } from "./AboutUs";
import { ContentAboutUssection2 } from "./AboutUs";
import Gbutton from "./utilcomps/Gbutton";
import ContactUs from "./ContactUs";
import { use, useState } from "react";
import ProductDescCard from "./utilcomps/ProductDescCard";

import { useEffect } from "react";
import { fetchProducts } from "./ProductsPage";
import ReviewSlider from "./utilcomps/ReviewSlider";
import CoolerProductsCard from "./utilcomps/CoolerProductsCard";

const whypartnerimages = require.context(
  "../Images/whypartnergion",
  false,
  /\.(png|jpe?g|svg|webp)$/,
);
const gionPartnerImages = whypartnerimages?.keys().map((key) => ({
  src: whypartnerimages(key),
  name: key.replace("./", "").split(".")[0],
}));
function ReviewCard(params) {
  return (
    <div className=" w-[270px] lg:w-[360px] h-[380px] lg:h-[460px] p-8 flex flex-col flex-shrink-0 items-center justify-between text-white rounded-3xl bg-[#333333] ">
      <div className=" w-28 lg:w-32 h-28 lg:h-32 rounded-3xl overflow-clip ">
        <img src={params?.pfp} className="  " />
      </div>
      <div className=" text-2xl lg:text-4xl font-medium text-center ">
        {params?.name}
      </div>
      <div className=" lg:text-xl font-thin text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at
        gravida justo, felis risus ullamcorper augue tempus. Nam hac.
      </div>
      <div className=" flex flex-row gap-2 ">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
    </div>
  );
}

function Content(params) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" rounded-[40px] overflow-clip "
    >
      <ImageSlider mobView={false} />
    </motion.div>
  );
}

function ContentMobView(params) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
      viewport={{ once: true }}
      className="  w-screen "
    >
      <img src={hero} className=" w-full h-auto object-cover " />
    </motion.div>
  );
}

// function CoolProductsCard(params) {
//   return (
//     <div className=" relative w-[320px] h-[490px] rounded-xl flex flex-col items-center border border-gion-teal ">
//       <div className=" absolute m-4 p-2 top-0 right-0 rounded-full hover:bg-neutral-100 cursor-pointer ">
//         <img src={heart} className="  " />
//       </div>
//       <div className=" p-2 h-[75%] overflow-clip ">
//         <img src={params?.image} className=" h-full object-cover rounded-xl " />
//       </div>
//       <div className=" p-4 flex flex-col gap-2 items-center ">
//         <div className=" flex flex-row gap-8 text-gion-teal ">
//           <div className=" font-light ">GE-512T</div>{" "}
//           {/** name to be added with api */}
//           <div className=" font-semibold ">12,000</div>
//         </div>
//         <Gbutton
//           txt={` text-sm lg:text-lg `}
//           h={` h-[30px] lg:h-[40px] `}
//           label={"ENQUIRY NOW"}
//           color={" bg-gion-seafoam-green "}
//         />
//       </div>
//     </div>
//   );
// }

function GionPartnerCard(params) {
  return (
    <div className=" w-[267px] h-[327px] flex flex-col gap-1 text-center border-2 border-gion-seafoam-green rounded-3xl overflow-clip ">
      <div
        className=" py-3 w-full h-[100px] text-[25px] leading-9 font-bold font-segoe "
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff, #E0ECED)",
        }}
      >
        <p> {params?.t1}</p> {params?.t2}{" "}
      </div>
      <div>
        <div className=" text-[13px] text-nowrap font-thin ">
          {params?.subTitle}
        </div>
        <img src={params?.img} className=" px-4 w-full h-full object-cover " />
      </div>
    </div>
  );
}

function HomePage(params) {
  const reviewsWidth = window?.innerWidth < 1024 ? 1510 : 1150;

  const [coolPrdInd, setCoolPrdInd] = useState(34);
  const [reviewShift, setReviewShift] = useState(0);
  const [coolProductsArr, setCoolProductsArr] = useState([]);

  useEffect(() => {
    const fetchCoolProducts = async () => {
      const allProducts = await fetchProducts();
      const coolProducts = allProducts?.slice(0, 4); // Get products from index 30 to 33
      setCoolProductsArr(coolProducts);
    };

    fetchCoolProducts();
  }, []);

  const reviews = [
    { name: "Esther Howard", pfp: face1 },
    { name: "Tajinder singh phagware vaala", pfp: face1 },
    { name: "Onkarpreet Kaur", pfp: face1 },
    { name: "Awesomejyot Singh", pfp: face1 },
    { name: "King Kong Singh", pfp: face1 },
    { name: "Bruce pal Kaur", pfp: face1 },
    { name: "Amit shah", pfp: face1 },
  ];

  const gionPartenersArr = [
    {
      title: {
        t1: "Attractive",
        t2: "Dealer Margins",
      },
      subTitle: "High margins, structured for volume dealers",
      imgKey: "margins",
    },
    {
      title: {
        t1: "Spare Parts",
        t2: "Availability",
      },
      subTitle: "Pan-India spare parts within 48 hours",
      imgKey: "spareparts",
    },
    {
      title: {
        t1: "Pan-India",
        t2: "Dealer Network",
      },
      subTitle: "Active dealer presence across 20+ states",
      imgKey: "panindia",
    },
    {
      title: {
        t1: "Dedicated",
        t2: "Dealer Support",
      },
      subTitle: "Dedicated account manager for every dealer",
      imgKey: "support",
    },
    {
      title: {
        t1: "In-House",
        t2: "Manufacturing",
      },
      subTitle: "Full quality control — design to dispatch",
      imgKey: "manufacturing",
    },
    {
      title: {
        t1: "OEM & Private",
        t2: "Label Options",
      },
      subTitle: "Your brand, our manufacturing expertise",
      imgKey: "oem",
    },
  ];

  function handleRShift(left) {
    if (left && reviewShift) {
      window?.innerWidth < 1024
        ? setReviewShift(reviewShift - 302)
        : setReviewShift(reviewShift - 392);
    } else if (!left && reviewShift <= reviewsWidth) {
      window?.innerWidth < 1024
        ? setReviewShift(reviewShift + 302)
        : setReviewShift(reviewShift + 392);
    }
  }

  return (
    <div className=" w-screen h-full flex flex-col items-center overflow-clip ">
      {window?.innerWidth < 1024 ? (
        <ContentMobView />
      ) : (
        <div className=" w-full h-80vh lg:h-[870px] flex flex-col gap-4 items-center justify-center bg-gion-powder-blue ">
          <div className=" text-center leading-snug ">
            <p className=" font-poppins font-bold text-[40px] tracking-[0.07em] uppercase ">
              Trusted OEM Air Cooler Manufacturer for Dealers & Bulk Buyers
            </p>
            <p className=" text-[22px] font-segoe tracking-[0.08em] text-gion-gray text-opacity-60 ">
              ISO 9001 & BIS Certified | 15+ Years of Manufacturing Excellence |
              Pan-India Supply Network
            </p>
          </div>
          <Content />
          <Gbutton label={"Become a Dealer"} w={" w-[512px] "} isShadow />
          <p className=" underline text-neutral-600 " >Download Catalogue</p>
        </div>
      )}

      <div
        className=" w-[100vw] h-[263px] "
        style={{
          backgroundImage: `url('${bgTealGradient}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-full h-full flex flex-row gap-20 justify-center items-center text-white font-segoe font-bold text-3xl ">
          <div className=" text-center ">
            <p>100+ Skilled Engineers</p>
            <p>& Technicians</p>{" "}
          </div>
          <img src={thinVerticalLine} />
          <div className=" text-center ">
            <p>OEM Partner to Leading</p>
            <p>Indian Brands</p>{" "}
          </div>
          <img src={thinVerticalLine} />
          <div className=" text-center ">
            <p>2 Lakhs+ Units Produced </p>
            <p>Annually</p>{" "}
          </div>
        </div>
      </div>

      {/**--------------------------------------------------------------------------- */}
      {false && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          viewport={{ once: true }}
          id="collections_slide"
          className=" pt-8 w-[70vw] flex flex-col gap-8 lg:gap-16 items-center "
          // style={{
          //   width: "100%",
          //   backgroundImage: `url(${ marbleBg })`
          // }}
        >
          <div className=" absolute inset-x-0 -mt-28 scale-y-[1.03] w-full h-full opacity-20 overflow-clip -z-10 ">
            <img src={marbleBg} className=" h-full lg:w-full object-cover " />
          </div>
          <div className="  flex flex-row justify-center ">
            {/* text-[#6C757D] */}
            <div
              className={` text-[30px] lg:text-[80px] text-center text-gion-teal font-doodle `}
            >
              OUR SUPERCOOL PRODUCTS!
            </div>
          </div>

          <div className=" relative w-screen my-3 ">
            {window?.innerWidth < 1024 && (
              <div className=" absolute inset-y-0 w-screen h-full flex flex-row justify-between items-center z-20 ">
                <div
                  onClick={() => {
                    setCoolPrdInd(coolPrdInd - 1);
                  }}
                >
                  <img src={left} />
                </div>
                <div
                  onClick={() => {
                    setCoolPrdInd(coolPrdInd + 1);
                  }}
                >
                  <img src={right} />
                </div>
              </div>
            )}
            <div
              className={` w-full h-full flex flex-row justify-center gap-4  `}
            >
              {coolProductsArr?.map((each, ind) => {
                if (window?.innerWidth < 1024) {
                  return (
                    <>
                      {Math.abs(coolPrdInd) % 4 == ind && (
                        <ProductDescCard
                          img={each?.image_url}
                          name={each?.name}
                          price={each?.price}
                          series={each?.series_type}
                          specs={each?.specifications}
                        />
                      )}
                    </>
                  );
                } else
                  return (
                    <ProductDescCard
                      img={each?.image_url}
                      name={each?.name}
                      price={each?.price}
                      series={each?.series_type}
                      specs={each?.specifications}
                    />
                  );
              })}
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-2 justify-between items-center ">
            <Gbutton
              label={"VIEW OUR COLLECTION"}
              linkTo={"/products"}
              w={window?.innerWidth < 1024 ? ` w-[250px] ` : ` w-[350px] `}
              h={window?.innerWidth < 1024 ? ` h-[46px] ` : false}
              txt={window?.innerWidth < 1024 ? ` text-lg ` : false}
            />
          </div>
        </motion.div>
      )}
      {/**---------------------------------------------------------------------- */}

      <div className=" my-28 flex flex-col gap-16 ">
        <div className=" text-5xl text-center text-black font-bold font-poppins ">
          Why Partner With Gion?
        </div>
        <div className=" grid grid-cols-3 gap-x-24 gap-y-12 ">
          {gionPartenersArr.map((cD) => {
            let image = undefined;
            // getting the image from the imported array with imgKey
            gionPartnerImages?.map((e) => {
              if (e?.name == cD?.imgKey) {
                image = e?.src;
              }
            });
            return (
              <>
                <GionPartnerCard
                  t1={cD?.title?.t1}
                  t2={cD?.title?.t2}
                  subTitle={cD?.subTitle}
                  img={image}
                />
              </>
            );
          })}
        </div>
      </div>

      {false && <ContentAboutUssection2 />}

      {/** Add a better method to show products here */}
      <div className=" my-14 flex flex-col gap-24 ">
        <div className=" flex flex-col gap-8 ">
          <div className=" text-5xl text-center text-black font-bold font-poppins ">
            Our Product Range
          </div>
          <div className=" text-lg text-nowrap text-center font-thin text-gion-teal-2 font-segoe  ">
            Efficient, durable, and cost-effective air coolers tailored for
            every budget and industrial requirement.
          </div>
        </div>
        <div className=" flex flex-row gap-16 ">

          {/* add logic to choose top 3 products in the backend */}
          

          <CoolerProductsCard />
          <CoolerProductsCard />
          <CoolerProductsCard />

          
        </div>
        <div className=" mx-auto ">
          <Gbutton w={"px-16 py-6 w-fit"} label={"View All Products"} />
        </div>
      </div>

      {/**---------------------------------------------------------------------- */}
      <div
        className=" my-14 py-8 w-full h-full flex justify-center "
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff, #E0ECED)",
        }}
      >
        <ContentAboutUs />
      </div>
      {/**---------------------------------------------------------------------- */}
      {true && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" my-8 lg:my-16 w-full lg:h-[70vh] flex flex-col gap-8 items-center "
        >
          <div className=" text-5xl lg:text-5xl font-bold font-poppins uppercase text-neutral-800 ">
            Key Benefits
          </div>
          <div className=" my-4 mx-auto w-[85vw] lg:w-[75vw] h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-28 ">
            {window?.innerWidth < 1024 && (
              <div className=" hover:scale-105 w-[50vw] transition-all duration-500 rounded-3xl shadow-custom-shadow overflow-clip ">
                <img
                  src={collectImg3}
                  className=" h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer "
                />
              </div>
            )}
            <div className=" lg:ml-10 w-full lg:w-[55%] ">
              <img src={featureImg} />
            </div>
            {window?.innerWidth > 1024 && (
              <div className=" hover:scale-105 transition-all duration-500 rounded-[30px] shadow-custom-shadow overflow-clip ">
                <img
                  src={collectImg3}
                  className=" h-full max-w-[360px] object-cover hover:scale-105 transition-all duration-500 cursor-pointer "
                />
              </div>
            )}
          </div>
          {/* <Gbutton
            label={" VIEW ALL PRODUCTS "}
            w={window?.innerWidth < 1024 ? ` w-[250px] ` : ` w-80 `}
            h={window?.innerWidth < 1024 ? ` h-[46px] ` : false}
            txt={window?.innerWidth < 1024 ? ` text-lg ` : false}
          /> */}
        </motion.div>
      )}

      <div
        className=" relative my-14 py-8 w-full h-full flex flex-col gap-6 items-center  "
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff, #E0ECED)",
        }}
      >
        <div className=" flex flex-row gap-8 items-center text-5xl font-extrabold font-poppins uppercase ">
          <div>User Testimonials</div>
          <div className=" w-[733px] h-[1px] bg-neutral-600 " />
          <div className=" font-playfair font-bold text-8xl ">"</div>
        </div>
        <ReviewSlider />
        {/* <div className=" relative group " >
            <div className=" absolute w-[320px] h-[320px] rounded-[52px] bg-gion-teal-3 animate-waving-hand group-hover:[animation-play-state:paused] " />
            <div className=" relative p-8 w-[320px] h-[320px] flex flex-col items-center justify-between rounded-[52px] bg-white border-[0.5px] border-neutral-400 shadow-card ">
              <div className=" absolute -top-[40px] w-[102px] h-[102px] rounded-full bg-neutral-100 " >

              </div>
              <div className="mt-12 text-[29px] font-segoe font-extrabold " >Reviewer Name</div>
              <div className=" text-center text-sm " >
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
              </div>
              <div>rating</div>
            </div>
          </div>
          <div>Dots</div> */}
      </div>

      {false && (
        <div className=" lg:my-4 relative w-full h-[60vh] lg:h-[70vh] flex flex-col gap-6 lg:gap-20 items-center ">
          <div className=" lg:my-4 absolute inset-0 h-full lg:w-full overflow-clip -z-10 ">
            <img src={reviewBg} className=" object-cover h-full lg:w-full " />
          </div>
          <div className=" pt-10 text-xl lg:text-6xl text-gion-teal font-semibold lg:font-medium font-urbanist ">
            HERE ARE SOME CLIENT FEEDBACKS
          </div>
          {/** use ma[ instead] */}
          <div className=" absolute px-3 sm:px-32 w-full h-full flex flex-row items-center justify-between z-10 ">
            <div>
              <img
                src={left}
                className=" lg:mt-10 lg:w-32 cursor-pointer "
                onClick={() => handleRShift(true)}
              />
            </div>
            <div>
              <img
                src={right}
                className=" lg:mt-10 lg:w-32 cursor-pointer "
                onClick={() => handleRShift(false)}
              />
            </div>
          </div>
          {true ? (
            <div
              className=" relative w-screen sm:w-[80vw] "
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, white 25%, white 75%, transparent 100%)",
              }}
            >
              {
                <div
                  className={` w-full px-12 flex flex-row gap-8 transition-all duration-700 `}
                  style={{ marginLeft: `-${reviewShift}px` }}
                >
                  {reviews?.map((each, ind) => {
                    return <ReviewCard pfp={each?.pfp} name={each?.name} />;
                  })}
                </div>
              }
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              viewport={{ once: true }}
              className=" relative flex flex-row gap-8 "
            >
              <ReviewCard />
            </motion.div>
          )}
        </div>
      )}

      {false && (
        <div className=" my-6 lg:my-0 px-4 lg:px-0 w-full h-[65vh] lg:h-[45vh] flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:justify-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" relative w-full lg:w-[35%] -z-30 "
          >
            <img src={gabi} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" relative lg:mx-0 w-full lg:w-[40%] "
          >
            <div className=" py-6 lg:py-8 px-3 lg:px-12 w-full h-[30vh] lg:h-[35vh] flex flex-col items-center justify-between text-center rounded-[32px] font-urbanist text-white bg-gion-teal  ">
              <div className=" text-3xl lg:text-6xl font-semibold ">
                GOT A BULK INQUIRY?
              </div>
              <div className=" text-xs lg:text-lg ">
                We have more than a decade of manufacturing experience,
                delivering high-quality air coolers with cutting-edge
                technology. Let’s discuss your needs!
              </div>
              <div className=" h-px w-[85%] bg-white " />
              <div className=" text-xs lg:text-lg ">
                Fill out the form below, and we’ll get back to you ASAP!
              </div>
              <Gbutton
                label="Get a Quote"
                txtColor={" text-gion-teal "}
                color={" bg-white "}
                w={" w-[180px] "}
              />
            </div>
            <div className=" relative -mt-4 lg:-mt-12 ml-12 lg:ml-32 w-14 lg:w-28 h-8 lg:h-16 bg-gion-teal rounded-xl shadow-custom-shadow -rotate-[35deg] -z-10 ">
              {" "}
            </div>
            <div className=" absolute inset-0 w-full h-[30vh] lg:h-[35vh] rounded-[32px] shadow-custom-shadow -z-20 "></div>
          </motion.div>
        </div>
      )}

      {
        <div className=" w-full ">
          <ContactUs isHomePage={true} />
        </div>
      }
    </div>
  );
}

export default HomePage;
