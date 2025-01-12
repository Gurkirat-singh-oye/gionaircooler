import Gbutton from "./utilcomps/Gbutton"

function ContactUs(params) {
  return (
    <div className=" pb-40 bg-[#EBF4FF] ">
      <div className={` ${ window?.innerWidth < 1024 ? ` pt-16 ` : `` } lg:p-32 flex flex-col gap-8 lg:gap-0 lg:flex-row items-center lg:justify-center `}>
        <div className=" w-[80%] lg:w-[50%] flex flex-col gap-1 lg:gap-6 items-center lg:items-start text-center lg:text-start ">
          <div className=" py-2 lg:py-0 flex flex-row text-4xl lg:text-7xl text-nowrap ">
            Lets Get in{" "}
            <div className=" pl-2 lg:pl-4 text-[#007BFF] font-bold  ">Touch!</div>
          </div>
          <div className=" flex flex-col text-xs lg:text-xl font-sans ">
            <div>Have a question or need assistance?</div>
            <div>Reach out to us via email, phone,</div>
            <div>or the contact form below.</div>
            <div>We're eager to assist you.</div>
          </div>
          <div className=" text-[#007BFF] text-xs lg:text-xl font-semibold ">
            Nice hearing from you!
          </div>
        </div>
        
        <div className=" w-[80%] lg:w-[50%] flex flex-col gap-8 items-center lg:items-start text-start ">
          <div className={` ${ window?.innerWidth < 1024 ? ` w-full ` : `` } flex flex-col gap-3 `} >
            <div className=" px-2 text-xs lg:text-base " >Full Name:</div>
            <input className=" px-3 py-1 w-full lg:w-[20vw] text-xs lg:text-xl rounded-full border border-[#007BFF] bg-[#EBF4FF] " />
          </div>
          <div className={` ${ window?.innerWidth < 1024 ? ` w-full ` : `` } flex flex-col gap-3 `} >
            <div className=" px-2 text-xs lg:text-base " >Email:</div>
            <input className=" px-3 py-1 w-full lg:w-[20vw] text-xs lg:text-xl rounded-full border border-[#007BFF] bg-[#EBF4FF] " />
          </div>
          <div className={` ${ window?.innerWidth < 1024 ? ` w-full ` : `` } w-full flex flex-col gap-3 `} >
            <div className=" px-2 text-xs lg:text-base " >Message:</div>
            <textarea className=" px-3 py-1 h-[120px] w-full lg:w-[20vw] text-xs lg:text-xl rounded-[20px] border border-[#007BFF] bg-[#EBF4FF] " />
          </div>
          <Gbutton label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
