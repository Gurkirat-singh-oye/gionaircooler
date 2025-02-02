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
          } flex justify-center items-center font-bold font-["Poppins"] text-white rounded cursor-pointer shadow-custom-shadow hover:bg-[#28A745] bg-[#007BFF] `}
        >
          {params?.label}
        </Link>
      ) : (
        <div
          className={` ${params?.w ? params?.w : `w-[162px]`} ${
            params?.h ? params?.h : ` h-[30px] lg:h-[46px] `
          } ${
            params?.txt ? params?.txt : ` text-sm lg:text-2xl `
          } flex justify-center items-center font-bold font-["Poppins"] text-white rounded cursor-pointer shadow-custom-shadow hover:bg-[#28A745] bg-[#007BFF] `}
        >
          {params?.label}
        </div>
      )}
    </div>
  );
}

export default Gbutton;
