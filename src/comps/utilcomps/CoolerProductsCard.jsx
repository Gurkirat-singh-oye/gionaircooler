import { Link } from "react-router-dom";

function CoolerProductsCard(params) {
  const slug = params?.name?.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link to={`/specifications/${params?.name}`} className=" w-[376px] h-[255px] flex flex-row rounded-2xl border border-gion-teal-2 shadow-card transition-all duration-1000 hover:scale-105 cursor-pointer overflow-clip ">
      <div className=" px-3 py-8 flex flex-col justify-between ">
        <div className=" text-[16.6px] font-bold font-segoe capitalize ">
          {params?.name}
        </div>
        <div>
          <div className=" px-4 w-fit border-2 border-gion-teal-blue text-gion-teal-3 text-xs bg-gion-powder-blue rounded-full ">
            {params?.water_tank_capacity || "65"}L Tank
          </div>
        </div>
        <div className=" text-xs ">
          65L desert cooler with 4000 m³/hr airflow:- cools up to 500 sq. ft.,
          inverter compatible.
        </div>
        <div className=" text-xl rounded-xl text-gion-teal-3 font-roboto bg-gion-powder-blue border-2 border-gion-teal-blue cursor-pointer " >
          <div className=" px-1 py-1 w-fit  ">
            {" "}
            Request Quote →{" "}
          </div>
        </div>
      </div>
      <div className=" min-w-[172px] max-w-[172px] h-full flex items-center bg-gion-seafoam-green ">
        <img src={ params?.img } />
      </div>
    </Link>
  );
}


export default CoolerProductsCard;