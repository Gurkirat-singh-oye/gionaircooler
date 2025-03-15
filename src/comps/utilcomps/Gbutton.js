import { Link } from "react-router-dom";

function Gbutton(params) {
  return (
    <div>
      {params?.linkTo ? (
        <Link
          to={`${params?.linkTo}`}
          className={` ${params?.w ? params?.w : `w-[162px]`} ${
            params?.h ? params?.h : ` h-[30px] lg:h-[46px] `
          } ${
            params?.txt ? params?.txt : ` text-sm lg:text-2xl `
          } flex justify-center items-center font-bold font-poppins ${ params?.txtColor ? ` text-gion-teal ` : ` text-white ` } rounded cursor-pointer shadow-custom-shadow hover:bg-opacity-95 ${ params?.color ? params?.color : ` bg-gion-teal ` } `}
        >
          {params?.label}
        </Link>
      ) : (
        <div
          className={` ${params?.w ? params?.w : `w-[162px]`} ${
            params?.h ? params?.h : ` h-[30px] lg:h-[46px] `
          } ${
            params?.txt ? params?.txt : ` text-sm lg:text-2xl `
          } flex justify-center items-center font-bold font-poppins ${ params?.txtColor ? ` text-gion-teal ` : ` text-white ` } rounded cursor-pointer shadow-custom-shadow hover:bg-opacity-95 ${ params?.color ? params?.color : ` bg-gion-teal ` } `}
        >
          {params?.label}
        </div>
      )}
    </div>
  );
}

export default Gbutton;
