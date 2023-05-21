import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    //   .then((result) => {
    toast.success('Successfully Sent')
    //     console.log(result.text);
    //     e.target.reset()
    //   }, (error) => {
    //     toast.error("This didn't work.")
    //   });
  }
  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 text-[#989898]">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <div>
          <label className="block  text-md mb-2" htmlFor="user_name">
            Name
          </label>
          <input
            className="border-b-2 bg-[#505050] text-[#989898] border-black w-full py-2 px-3 text-black  focus:outline-none focus:border-2 focus:border-black "
            id="user_name"
            name="user_name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block  text-md mb-2" htmlFor="user_email">
            Email
          </label>
          <input
            className="border-b-2 bg-[#505050] border-black w-full py-2 px-3 text-black  focus:outline-none focus:border-2 focus:border-black "
            id="user_email"
            name="user_email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block  text-md mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="h-[148px] border-b-2 bg-[#505050] border-black w-full py-2 px-3 text-black  focus:outline-none focus:border-2 focus:border-black "
            id="message"
            name="message"
            type="textarea"
          />
        </div>
        <button className="w-full px-4 py-2 bg-[#2b2b2b] text-white uppercase duration-200 hover:bg-[#737373]">
          <span className='text-lg font-semibold'>  Submit</span>
        </button>
      </form>

    </>
  );
};

export default ContactForm;
