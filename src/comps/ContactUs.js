import Gbutton from "./utilcomps/Gbutton"

function ContactUs(params) {
  return (
    <div className=" bg-[#EBF4FF] ">
      <div className=" p-32 flex flex-row justify-center ">
        <div className=" w-[50%] flex flex-col gap-6 items-start text-start ">
          <div className=" flex flex-row text-7xl ">
            Lets Get in{" "}
            <div className=" pl-4 text-[#007BFF] font-bold  ">Touch!</div>
          </div>
          <div className=" flex flex-col text-xl font-sans ">
            <div>Have a question or need assistance?</div>
            <div>Reach out to us via email, phone,</div>
            <div>or the contact form below.</div>
            <div>We're eager to assist you.</div>
          </div>
          <div className=" text-[#007BFF] text-xl font-semibold ">
            Nice hearing from you!
          </div>
        </div>
        
        <div className=" w-[50%] flex flex-col gap-8 items-start text-start ">
          <div className=" flex flex-col gap-3 " >
            <div className=" px-2 " >Full Name:</div>
            <input className=" px-3 py-1 w-[20vw] text-xl rounded-full border border-[#007BFF] bg-[#EBF4FF] " />
          </div>
          <div className=" flex flex-col gap-3 " >
            <div className=" px-2 " >Email:</div>
            <input className=" px-3 py-1 w-[20vw] text-xl rounded-full border border-[#007BFF] bg-[#EBF4FF] " />
          </div>
          <div className=" flex flex-col gap-3 " >
            <div className=" px-2 " >Message:</div>
            <textarea className=" px-3 py-1 h-[120px] w-[20vw] text-xl rounded-[20px] border border-[#007BFF] bg-[#EBF4FF] " />
          </div>
          <Gbutton label="Submit" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
