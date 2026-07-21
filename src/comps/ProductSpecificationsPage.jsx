import React, { useEffect, useState } from "react";
import Gbutton from "./utilcomps/Gbutton";
import CoolerProductsCard from "./utilcomps/CoolerProductsCard";
import { fetchProducts } from "./ProductsPage";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import ImageSlider from "./utilcomps/ImageSlider";
import LoadingElement from "./utilcomps/LoadingElement";

const FeatureBubble = (params) => {
  const bg = params?.bg ? params?.bg : "bg-gion-powder-blue";
  const text = params?.text ? params?.text : "text-sm";
  return (
    <div
      className={` px-4 w-fit border-2 border-gion-teal-blue text-gion-teal-3 ${text} ${bg} rounded-full `}
    >
      {params?.feat}
    </div>
  );
};

const ProductSpecificationsPage = (params) => {
  {
    /**implement it in DB for better DTO */
  }

  const { productslug } = useParams();

  const [pageProductSpecs, setPageProductSpecs] = useState();

  async function getProductSpecs() {
    let { data: product } = await supabase
      .from("products")
      .select()
      .eq("name", productslug);
    console.log("fetched specs", product);
    return product;
  }

  useEffect(() => {
    getProductSpecs().then((data) => setPageProductSpecs(data[0]));
  }, []);

  const specs = [
    { label: "Tank Capacity", value: pageProductSpecs?.water_tank_capacity },
    { label: "Air Delivery", value: `${pageProductSpecs?.air_delivery} m³/hr` },
    // { label: "Cooling Area", value: `${pageProductSpecs?.cooling_area} sq. ft.` },
    {
      label: "Air Throw Distance",
      value: `${pageProductSpecs?.air_throw} Feet`,
    },
    {
      label: "Power Consumption",
      value: `${pageProductSpecs?.power_consumption} Watts`,
    },
    { label: "Motor Speed", value: `${pageProductSpecs?.motor_rpm} RPM` },
    { label: "Cooling Media", value: pageProductSpecs?.cooling_media },
    // { label: "Ice Chamber", value: pageProductSpecs?.ice_chamber ? "Yes" : "No" },
    { label: "Dimensions (mm)", value: pageProductSpecs?.dimensions },
    { label: "Warranty", value: "12 Months" },
  ];

  console.log(pageProductSpecs);

  return (
    pageProductSpecs ? (
      <div className=" w-full flex flex-col ">
        {/** product intro section */}
        <div className=" py-16 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center bg-neutral-100">
          {/* Image Section, make a proper slider element to scroll through product images */}
          <div className="flex flex-col items-end w-full lg:w-2/5">
            <ImageSlider images={pageProductSpecs?.images} />
          </div>

          {/* Specification Details Section */}
          <div className="flex flex-col justify-start w-full lg:w-1/2 gap-6">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <p className=" text-xs font-segoe text-gion-teal-3 uppercase ">
                {pageProductSpecs?.series}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize">
                {pageProductSpecs?.name || "Product Specification"}
              </h1>
              {/** implement in the db so as to make the DTO easy to use */}
              <div className=" flex flex-row gap-2 ">
                <FeatureBubble
                  feat={`${pageProductSpecs?.water_tank_capacity}L`}
                  text={"text-md"}
                />
                <FeatureBubble feat={pageProductSpecs?.type} text={"text-md"} />
              </div>
            </div>

            {/* Model/SKU Section */}
            <div className=" max-w-[700px] flex flex-col gap-3">
              <p className="text-gray-700 leading-relaxed">
                {pageProductSpecs?.description ||
                  "Product description goes here. Add your specifications and key features text."}
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {" "}
              <p className=" text-sm font-segoe text-gion-teal-3 uppercase ">
                key benefits
              </p>
              <div className=" flex flex-col gap-4 ">
                {pageProductSpecs?.key_benefits?.split("|")?.map((each) => {
                  const e_ben = each?.split(">");
                  return (
                    <div className=" flex flex-row gap-4 " >
                      <div></div>
                      <div className=" flex flex-col " >
                        <div>{e_ben[0]}</div>
                        <div className=" text-neutral-600 font-thin " >{e_ben[1]}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" flex flex-col gap-2 ">
              <div className=" text-neutral-600 uppercase ">Ideal For</div>
              <div className=" max-w-[650px] flex flex-wrap flex-row gap-2 text-nowrap ">
                {pageProductSpecs?.ideal_for?.split(",")?.map((each) => {
                  return <FeatureBubble feat={each} bg={"bg-white"} />;
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full lg:w-[570px] flex flex-col gap-2 ">
              <Gbutton
                label="Request Bulk Quote →"
                linkTo="/contactus"
                w="w-full"
              />
              <div className=" mx-auto flex flex-row gap-2 items-center text-xs ">
                <p className=" font-bold ">✓ Response within 24 hours</p>
                <div className=" w-[3px] h-[3px] bg-neutral-600 rounded-full " />
                <p className=" font-extralight ">
                  {" "}
                  Free consultation for bulk orders
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" my-24 w-full flex flex-col gap-16 ">
          {/** technical specs */}
          <div className=" mx-auto w-[1120px] flex flex-col ">
            <div className=" font-semibold text-2xl ">
              Technical Specifications
            </div>
            <table>
              <tbody>
                {specs.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-gray-100 ${i % 2 ? "bg-gion-powder-blue" : ""}`}
                  >
                    <td className="py-3 px-6 text-gray-500 w-1/2">
                      {row.label}
                    </td>
                    <td className="py-3 px-6 font-bold text-gray-900">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/** best things about a given product */}
          <div className=" mx-auto w-[1120px] flex flex-col gap-4 ">
            <div className=" font-semibold text-2xl ">
              Why Choose the {params?.name || "Product"}?
            </div>
            <div className=" px-4 py-4 w-full flex flex-row gap-5 items-center border border-neutral-200 bg-neutral-100 rounded-2xl ">
              <div className=" w-14 h-14 border border-gion-teal-4 bg-gion-powder-blue rounded-xl ">
                <img />
              </div>
              <div className=" flex flex-col gap-2 text-start ">
                <p>In-House Manufacturing</p>
                <p>
                  Every unit is built and quality-tested at our Jhajjar facility
                  — no third-party dependency.
                </p>
              </div>
            </div>
            <div className=" px-4 py-4 w-full flex flex-row gap-5 items-center border border-neutral-200 bg-neutral-100 rounded-2xl ">
              <div className=" w-14 h-14 border border-gion-teal-4 bg-gion-powder-blue rounded-xl ">
                <img />
              </div>
              <div className=" flex flex-col gap-2 text-start ">
                <p>In-House Manufacturing</p>
                <p>
                  Every unit is built and quality-tested at our Jhajjar facility
                  — no third-party dependency.
                </p>
              </div>
            </div>
            <div className=" px-4 py-4 w-full flex flex-row gap-5 items-center border border-neutral-200 bg-neutral-100 rounded-2xl ">
              <div className=" w-14 h-14 border border-gion-teal-4 bg-gion-powder-blue rounded-md ">
                <img />
              </div>
              <div className=" flex flex-col gap-2 text-start ">
                <p>In-House Manufacturing</p>
                <p>
                  Every unit is built and quality-tested at our Jhajjar facility
                  — no third-party dependency.
                </p>
              </div>
            </div>
          </div>

          {/** similar products, get them by series */}
          <div className=" w-full flex flex-col items-center gap-8 ">
            <div className=" font-semibold text-2xl  ">You May Also Like</div>
            <div className=" flex flex-row gap-10 ">
              <CoolerProductsCard />
              <CoolerProductsCard />
              <CoolerProductsCard />
            </div>
          </div>
        </div>
      </div>
    ) : <LoadingElement />
  );
};

export default ProductSpecificationsPage;
