import { Link } from "react-router-dom";

function Gbutton(params) {
  return (
    <div className=" transition-all duration-300 ease-in-out " >
      {params?.linkTo ? (
        <Link
          to={`${params?.linkTo}`}
          className={` ${params?.w ? params?.w : `w-[162px]`} ${
            params?.h ? params?.h : ` h-[30px] lg:h-[46px] `
          } ${
            params?.txt ? params?.txt : ` text-sm lg:text-[20px] `
          } flex justify-center items-center font-bold font-segoe border-2 border-gion-teal-blue hover:border-gion-teal-3 ${params?.txtColor ? ` text-gion-teal ` : ` text-white `} rounded-md cursor-pointer shadow-card hover:bg-opacity-70 ${params?.color ? params?.color : ` bg-gion-teal-2 `} transition-all duration-[1000ms] ease-in-out `}
        >
          {params?.label}
        </Link>
      ) : (
        <div
          className={` ${params?.w ? params?.w : `w-[162px]`} ${
            params?.h ? params?.h : ` h-[30px] lg:h-[46px] `
          } ${
            params?.txt ? params?.txt : ` text-sm lg:text-[20px] `
          } flex justify-center items-center font-bold font-segoe border-2 border-gion-teal-blue hover:border-gion-teal-3 ${params?.txtColor ? ` text-gion-teal ` : ` text-white `} rounded-md cursor-pointer shadow-card hover:bg-opacity-70 ${params?.color ? params?.color : ` bg-gion-teal-2 `}  transition-all duration-[1000ms] ease-in-out `}
        >
          {params?.label}
        </div>
      )}
    </div>
  );
}

export default Gbutton;
