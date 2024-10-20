import React from "react";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import Swal from "sweetalert2";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c7ffa2ad-1409-4581-8c80-9a6db5e3aca2");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Your message successfully send!",
                icon: "success"
            });
            event.target.reset();
        } else {
            
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
              });
            
            setResult("Sorry, This message has been marked as spam by our server. Kinly change your email address and try again!");
        }
    };

    return (
        <div>
            <div className="bg-gradient-to-r from-[#202020] border border-[#222] rounded-lg lg:h-1/2 md:1/2 pb-10 pt-5 px-5">
                <div className="flex gap-3 justify-center items-center pb-5">
                    <SiMinutemailer className="text-[#00d8ff] text-3xl"></SiMinutemailer>
                    <h1 className="text-3xl font-bold tracking-widest uppercase bg-gradient-to-r from-[#00d8ff] to-[#006eff] bg-clip-text text-transparent"> Let's Talk </h1>
                </div>
                <div className="flex justify-center items-center h-full md:w-3/5 lg:w-3/5 w-full mx-auto tracking-wider">
                    <form onSubmit={onSubmit} className="flex flex-col justify-center items-center space-y-3 p-5 md:py-7 lg:py-7 md:px-10 lg:px-10 border w-full border-[#555] rounded-lg shadow-2xl">
                        <div className="w-full">
                            {/* <label htmlFor="#name">Name</label><br/> */}
                            <input className="w-full p-3 border border-[#555] rounded-sm bg-black text-white" type="text" name="name" placeholder="Fullname" required={true}/>
                        </div>
                        <div className="w-full">
                            {/* <label htmlFor="#email">Email</label><br/> */}
                            <input className="w-full p-3 border border-[#555] rounded-sm bg-black text-white" type="email" name="email" placeholder="Email"  required={true}/>
                        </div>
                        <div className="w-full">
                            {/* <label htmlFor="#message">Message</label><br/> */}
                            <textarea className="w-full p-3 border border-[#555] rounded-sm bg-black text-white md:h-40 lg:h-40 h-24" name="message" placeholder="Message"  required={true}></textarea>
                        </div>
                        <div className="w-full">
                            <input className="w-full mt-3 lg:mt-0 flex items-center text-center gap-3 border hover:text-[#00d8ff] duration-200 rounded-sm bg-gradient-to-r from-[#555555] hover:border-[#00d8ff] border-[#555] uppercase py-3 lg:px-7 md:px-7 px-5 text-sm lg:text-base md:text-base tracking-wider hover:cursor-pointer" type="submit" value="SEND MESSAGE" />
                        </div>
                        <div className="mt-3 text-red-500">
                            {result}
                        </div>
                    </form>
                </div>
            </div>
            {/* Contact informations */}
            <div className="mt-5 grid md:grid-cols-3 lg:grid-col-3 grid-col-1 gap-5 text-gray-300 tracking-wider">
                <div className="space-y-2 bg-gradient-to-r from-[#202020] border border-[#222] rounded-lg w-full flex flex-col justify-center items-center px-3 py-5">
                    <IoCallOutline className="text-3xl"></IoCallOutline>
                    <h3 className="text-lg font-bold">Call Me</h3>
                    <a className="md:text-sm lg:text-sm text-xl" href="tel:+971554511229">+971 55 451 1229</a>
                </div>
                <div className="space-y-2 bg-gradient-to-r from-[#202020] border border-[#222] rounded-lg w-full flex flex-col justify-center items-center px-3 py-5">
                    <RiMailSendLine className="text-3xl"></RiMailSendLine>
                    <h3 className="text-lg font-bold">Email Me</h3>
                    <a className="md:text-sm lg:text-sm text-xl" href='mailto:rootcoderboy@gmail.com'>rootcoderboy@gmail.com</a>
                </div>
                <div className="space-y-2 bg-gradient-to-r from-[#202020] border border-[#222] rounded-lg w-full flex flex-col justify-center items-center px-3 py-5">
                    <FaRegAddressCard className="text-3xl"></FaRegAddressCard>
                    <h3 className="text-lg font-bold">Address</h3>
                    <p className="text-center md:text-sm lg:text-sm text-xl"> Al-Ghubaiba (Bur Dubai), <br/>
                        Dubai, United Arab Emirates
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;