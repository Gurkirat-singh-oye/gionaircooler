
import Gbutton from "./Gbutton";

import heart from "../../Images/icons/heart.svg";




function CoolProductsCard(params) {
  return (
    <div className=" relative w-[300px] h-[490px] rounded-[14px] flex flex-col items-center justify-between border border-gion-teal ">
      <div className=" absolute m-4 p-2 top-0 right-0 rounded-full hover:bg-opacity-90 bg-white bg-opacity-45 cursor-pointer ">
        <img src={heart} className="  " />
      </div>
      <div className=" px-2  pt-2 h-[78%] overflow-clip ">
        <img src={params?.img} className=" h-full object-cover rounded-xl " />
      </div>
      <div className=" pb-5 flex flex-col gap-2 items-center ">
        <div className=" flex flex-row gap-8 text-gion-teal text-[22px] ">
          <div className=" font-light ">{params?.name ? params?.name : "GE-512T"}</div>{" "}
          {/** name to be added with api */}
          <div className=" font-semibold ">{params?.price ? params?.price : 12000 }</div>
        </div>
        <Gbutton
          txt={` text-sm lg:text-lg 2xl:text-xl `}
          w={` w-[180px] `}
          h={` h-[30px] lg:h-[40px] `}
          label={"ENQUIRY NOW"}
          color={" bg-gion-seafoam-green "}
        />
      </div>
    </div>
  );
}

export default CoolProductsCard;