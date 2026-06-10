import { useState } from "react";

function ReviewCard(params) {
  return (
    <div className=" m-16 relative flex flex-col gap-16 items-center group ">
      {/* {params?.bgCardSpin && ( */}
        <div className=" absolute w-[320px] h-[320px] rounded-[52px] bg-gion-teal-3 animate-waving-hand opacity-0 transition-opacity ease-in-out duration-[2000ms] group-hover:opacity-100 " />
      {/* )} */}
      <div
        className={` relative p-8 w-[320px] h-[320px] flex flex-col items-center justify-between rounded-[52px] bg-white border-[0.5px] border-neutral-400 ease-in-out duration-[2000ms]${" group-hover:shadow-card group-hover:scale-105"} `}
      >
        <div className=" absolute -top-[40px] group-hover:-top-[60px] group-hover:scale-125 ease-in-out duration-[2000ms] w-[102px] h-[102px] rounded-full bg-neutral-100 "></div>
        <div className="mt-12 text-[29px] font-segoe font-extrabold ">
          {params?.name}
        </div>
        <div className=" text-center text-sm font-segoe text-neutral-600 ">
          {params?.review}
        </div>
        <div>{params?.rating}</div>
      </div>
    </div>
  );
}

function ReviewSlider(params) {
  const reviews = [
    {
      name: "Jaskaran Singh",
      image: undefined,
      review:
        "mast pharal pharal kardi hawa sutda ae, pump khraab hoya si, hatho hath change karta ehna ne",
      rating: 4,
    },
    {
      name: "Rekha gupta",
      image: undefined,
      review:
        "isne toh delhi ki hawa saaf kardi, kejriwaal fail kar diya, 64 laakh k AC lagvaaye the main, sab fail",
      rating: 4,
    },
    {
      name: "Coach saab",
      image: undefined,
      review:
        "sahi hai, AC se kam kharcha karvaata hai, thodi humidity ho jaati hai but worth it, build quality bhi sahi hai, kahi nhi jaayega 4-5 saal",
      rating: 4,
    },
    {
      name: "Gagan sarao",
      image: undefined,
      review:
        "Kya mast cheez bnai hai yaar, vekho tusi v ek vaar, mere paji ne te bambu hi gadi te, jidan mai gade si kisse vich",
      rating: 4,
    },
    {
      name: "Dora Rawal",
      image: undefined,
      review:
        "Sara dost mere saath aisa hi kyu karte hai, tune mera use kiya hai aur jab bore ho gaya toh baat karni chhod di bina kuchh kahe *while she enjoyed, gion aircooler's thandi thandi hawa*",
      rating: 4,
    },
  ];

  const [reviewWindowStartIndex, setReviewWindowHighIndex] = useState(0);

  function reviewHandler() {
    let windowIndexes = [
      reviewWindowStartIndex,
      (reviewWindowStartIndex + 1) % reviews?.length,
      (reviewWindowStartIndex + 2) % reviews?.length,
    ];
    let window = [];
    // if (reviewWindowStartIndex > reviews?.length - 3) setReviewWindowHighIndex(3)

    windowIndexes?.forEach((value) => {
      window?.push(reviews[value]);
    });

    return window;
  }

  return (
    <div>
      <div className=" w-full flex flex-row justify-center gap-6 ">
        {reviewHandler()?.map((rObj, index) => {
          return (
            <ReviewCard
              bgCardSpin={index === 1}
              name={rObj?.name}
              review={rObj?.review}
              rating={rObj?.rating}
            />
          );
        })}
      </div>

      <div className=" flex flex-row justify-between ">
        <button
          onClick={() =>
            setReviewWindowHighIndex(
              reviewWindowStartIndex - 1 < 0
                ? reviews?.length - 1
                : reviewWindowStartIndex - 1
            )
          }
          className=" px-2 bg-gion-teal-blue "
        >
          prev
        </button>
        <button
          onClick={() =>
            setReviewWindowHighIndex(
              reviewWindowStartIndex + 1 === reviews?.length
                ? 0
                : reviewWindowStartIndex + 1
            )
          }
          className=" px-2 bg-gion-teal-blue "
        >
          next
        </button>
      </div>
    </div>
  );
}

export default ReviewSlider;
