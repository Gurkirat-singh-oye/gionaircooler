import Gbutton from "./utilcomps/Gbutton"

function ContactUs(params) {
  return (
    <div className=" pb-32 sm:pb-0 bg-gion-powder-blue ">
      <div className={` ${ window?.innerWidth < 1024 ? ` pt-16 ` : `` } lg:p-32 flex flex-col gap-8 lg:gap-0 lg:flex-row items-center lg:justify-between `}>
        <div className=" w-[80%] lg:w-[50%] flex flex-col gap-1 lg:gap-6 items-center lg:items-start text-center lg:text-start ">
          <div className=" py-2 lg:py-0 flex flex-row text-4xl lg:text-8xl text-nowrap ">
            Lets Get in{" "}
            <div className=" pl-2 lg:pl-4 text-gion-teal font-bold  ">Touch!</div>
          </div>
          <div className=" flex flex-col text-xs lg:text-3xl font-sans ">
            <div>Have a question or need assistance?</div>
            <div>Reach out to us via email, phone,</div>
            <div>or the contact form below.</div>
            <div>We're eager to assist you.</div>
          </div>
          <div className=" text-gion-teal text-xs lg:text-3xl font-semibold ">
            Nice hearing from you!
          </div>
        </div>
        
        <div className=" w-[80%] lg:w-[40%] flex flex-col gap-8 items-center lg:items-start text-start ">
          <div className={` w-full flex flex-col gap-3 `} >
            <div className=" px-2 text-xs lg:text-2xl " >Full Name:</div>
            <input className=" px-3 py-1 w-full lg:w-[85%] text-xs lg:text-4xl rounded-full border border-gion-teal bg-[#EBF4FF] " />
          </div>
          <div className={` w-full flex flex-col gap-3 `} >
            <div className=" px-2 text-xs lg:text-2xl " >Email:</div>
            <input className=" px-3 py-1 w-full lg:w-[85%] text-xs lg:text-4xl rounded-full border border-gion-teal bg-[#EBF4FF] " />
          </div>
          <div className={` w-full flex flex-col gap-3 `} >
            <div className=" px-2 text-xs lg:text-2xl " >Message:</div>
            <textarea className=" px-3 py-1 h-[120px] w-full lg:w-[85%] text-xs lg:text-4xl rounded-[20px] border border-gion-teal bg-[#EBF4FF] " />
          </div>
          <Gbutton label="Submit" 
            w={window?.innerWidth < 1024 ? ` w-[250px] ` : false}
            h={window?.innerWidth < 1024 ? ` h-[46px] ` : false}
            txt={window?.innerWidth < 1024 ? ` text-lg ` : false} />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
