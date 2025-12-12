import { useState } from "react";

function ProductDescCard(params) {
  const [hoverFullName, setHoverFullName] = useState(false);

  return (
    <div
      id="productCard"
      className=" group p-2 w-[350px] hover:w-[370px] h-[570px] flex flex-col gap-4 rounded-2xl hover:scale-105 shadow-custom-shadow hover:shadow-custom-shadow-big transition-all duration-700 ease-in-out cursor-pointer bg-japanese-indigo overflow-clip "
      onMouseEnter={() => {
        setHoverFullName(true);
        console.log("entered");
      }}
      onMouseLeave={() => {
        setHoverFullName(false);
        console.log("left");
      }}
    >
      <div
        id="productImage"
        className=" h-[75%] rounded-[14px] transition-all duration-300 ease-in-out overflow-clip "
      >
        <img
          src={params?.img}
          alt={params?.name}
          className=" w-full h-full object-cover "
        />
      </div>

      <div>
        <div
          id="titledesc"
          className=" mx-2 flex flex-row justify-between text-white text-4xl font-urbanist "
        >
          <div className=" font-semibold transition-all duration-300 ease-in-out ">
            {params?.name?.length > 10
              ? hoverFullName ? params?.name : `${params?.name?.slice(0, 9)}..`
              : params?.name}
          </div>
          <div className=" flex flex-row items-center text-2xl font-thin ">
            ₹{params?.price}/-
          </div>
        </div>
        <div className=" mx-4 -mt-2 mb-3 text-gion-seafoam-green ">
          {params?.series}
        </div>
        <div className=" mx-2 flex flex-row justify-between text-gion-powder-blue font-urbanist ">
          <div className=" flex flex-col items-center ">
            <p>Wattage</p>
            <p>{params?.specs[0]?.wattage}W</p>
          </div>
          <div className=" flex flex-col items-center ">
            <p>{"Dimensions(mm)"}</p>
            <div className=" flex flex-row gap-1 ">
              <p>{params?.specs[0]?.dimensions?.width}</p>
              <p>x</p>
              <p>{params?.specs[0]?.dimensions?.depth}</p>
              <p>x</p>
              <p>{params?.specs[0]?.dimensions?.length}</p>
            </div>
          </div>
          <div className=" flex flex-col items-center ">
            <p>Tank Size</p>
            <p>{params?.specs[0]?.tank_capacity}L</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescCard;
