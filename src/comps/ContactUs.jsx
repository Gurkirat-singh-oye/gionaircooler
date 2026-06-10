import Gbutton from "./utilcomps/Gbutton";

function ContactUs(params) {
  function FormField(params) {
    return (
      <div className=" w-full flex flex-col gap-2 ">
        <p className={` ${params?.lowercase ? "" : "uppercase"} font-segoe font-semibold text-neutral-700 `}>
          {params?.label}
        </p>
        {params?.textArea ? (
          <textarea className=" px-2 py-1 w-full max-h-36 min-h-36 text-neutral-700 font-segoe rounded-sm border focus:outline-none border-neutral-400 bg-gion-seafoam-green bg-opacity-10 " />
        ) : (
          <input className=" px-2 py-1 w-full h-10 text-neutral-700 font-segoe rounded-sm border focus:outline-none border-neutral-400 bg-gion-seafoam-green bg-opacity-10 " placeholder={` ${ params?.placeholder || `Enter ${params?.label} `  } `} />
        )}
      </div>
    );
  }

  return (
    <div className=" py-36 w-full flex flex-col gap-4 items-center ">
      <div className=" flex flex-col gap-5 items-center ">
        <p className=" text-5xl font-poppins font-bold uppercase ">
          Request Your Bulk Quote
        </p>
        <p>
          Fill out the form below, and our team will respond within 24 hours.
        </p>
      </div>
      <div className=" pt-8 pb-12 px-10 w-[620px] h-[911px] flex flex-col gap-6 items-center rounded-3xl border border-gion-teal-2 ">
        <div className=" flex flex-row items-center gap-2 text-sm text-neutral-600 ">
          <div className="  ">✓ Response within 24 hours</div>
          <div className=" w-[1px] h-[12px] bg-neutral-700 " />
          <div className="  ">✓ Competitive pricing</div>
          <div className=" w-[1px] h-[12px] bg-neutral-700 " />
          <div className="  ">✓ Pan-India Dealer Network</div>
        </div>
        <div className=" w-full h-[1px] bg-neutral-400 " />
        {/* <div> */}
        <div className=" w-full flex flex-grow flex-col justify-between ">
          <FormField label={"Who are you?"} lowercase />
          <div className=" w-full flex flex-row gap-10 justify-between ">
            <FormField label={"Full Name"} />
            <FormField label={"Company Name"} />
          </div>
          <div className=" w-full flex flex-row gap-10 justify-between ">
            <FormField label={"Phone number"} />
            <FormField label={"Email Address"} />
          </div>
          <div className=" w-full flex flex-row gap-10 justify-between ">
            <FormField label={"City/Pincode"} />
            <FormField label={"Approx Quantity"} />
          </div>
          <FormField label={"Product Interest"} />
        </div>
        <div className=" w-full flex flex-col gap-8 " >
          <FormField label={"Message (optional)"} textArea />
          <div>
            <Gbutton
              label={"Explore More On The About Us Page"}
              w={" px-20 w-full "}
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ContactUs;
