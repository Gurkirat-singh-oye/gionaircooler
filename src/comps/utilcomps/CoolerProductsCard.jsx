function CoolerProductsCard(params) {
  return (
    <div className=" w-[376px] h-[255px] flex flex-row rounded-2xl border border-gion-teal-2 shadow-card transition-all duration-1000 hover:scale-105 overflow-clip ">
      <div className=" px-3 py-8 flex flex-col justify-between ">
        <div className=" text-[16.6px] font-bold font-segoe ">
          Desert Cooler GE-517
        </div>
        <div>
          <div className=" px-4 w-fit border-2 border-gion-teal-blue text-gion-teal-3 text-xs bg-gion-powder-blue rounded-full ">
            65L Tank
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
      <div className=" min-w-[172px] h-full bg-gion-seafoam-green "></div>
    </div>
  );
}


export default CoolerProductsCard;