import { FaBootstrap, FaCss3Alt, FaElementor, FaMeta, FaSquareGithub } from "react-icons/fa6";
import { IoLogoFigma, IoLogoHtml5, IoLogoJavascript, IoLogoWordpress, IoPeopleSharp, IoSettings } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiCanva } from "react-icons/si";

const Skills = () => {
    return (
        <div className="grow w-full border border-[#222222] px-6 py-5 rounded-lg bg-gradient-to-r from-[#202020] tracking-wider">
            <div className="flex gap-3 justify-start items-center border border-t-0 border-x-0 pb-2 border-b-[#555]">
                <IoSettings className="text-[#00d8ff] text-3xl"></IoSettings>
                <h1 className="text-3xl font-bold tracking-widest uppercase bg-gradient-to-r from-[#00d8ff] to-[#006eff] bg-clip-text text-transparent">Proficient in</h1>
            </div>
            <div className="tracking-wider">
                
                <div className="mt-5">
                    <h3 className="text-lg mb-3">Technical Knowledge</h3>
                    <div className="grid md:grid-cols-5 lg:grid-cols-5 grid-cols-3 gap-3 text-xs md:text-sm lg:text-sm">
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><IoLogoHtml5 className="md:text-2xl lg:text-2xl text-lg"></IoLogoHtml5> HTML</div>
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><FaCss3Alt className="md:text-2xl lg:text-2xl text-lg"></FaCss3Alt> CSS</div>
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><IoLogoJavascript className="md:text-2xl lg:text-2xl text-lg"></IoLogoJavascript> JavaScript</div>
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><RiReactjsLine className="md:text-2xl lg:text-2xl text-lg"></RiReactjsLine> React JS</div>
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><IoLogoWordpress className="md:text-2xl lg:text-2xl text-lg"></IoLogoWordpress> WordPress</div>
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><FaElementor className="md:text-2xl lg:text-2xl text-lg"></FaElementor> Elementor</div>
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><FaBootstrap className="md:text-2xl lg:text-2xl text-lg"></FaBootstrap> Bootstrap</div>
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><RiTailwindCssFill className="md:text-2xl lg:text-2xl text-lg"></RiTailwindCssFill> Tailwind CSS</div>
                        <div className="h-[70px] bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><FaSquareGithub className="md:text-2xl lg:text-2xl text-lg"></FaSquareGithub> Git & GitHub</div>
                    </div>
                </div>
                {/* Digital Marketing */}
                <div className="mt-5">
                    <h3 className="text-lg mb-3">Digital Marketing</h3>
                    <div className="grid md:grid-cols-5 lg:grid-cols-5 grid-cols-3 gap-3 text-xs md:text-sm lg:text-sm">
                        <div className="h-[70px] md:h-auto lg:h-auto bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><MdMarkEmailRead className="md:text-2xl lg:text-2xl text-lg"></MdMarkEmailRead> Email Marketing</div>
                        <div className="h-[70px] md:h-auto lg:h-auto bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><FaMeta className="md:text-2xl lg:text-2xl text-lg"></FaMeta> Facebook Ads</div>
                        <div className="h-[70px] md:h-auto lg:h-auto bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><IoPeopleSharp className="md:text-2xl lg:text-2xl text-lg"></IoPeopleSharp> Influencer Marketing</div>
                    </div>
                </div>
                {/* Design Tools */}
                <div className="mt-5">
                    <h3 className="text-lg mb-3">Design Tools</h3>
                    <div className="grid md:grid-cols-5 lg:grid-cols-5 grid-cols-3 gap-3 text-xs md:text-sm lg:text-sm">
                        <div className="h-[70px] md:h-auto lg:h-auto bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><IoLogoFigma className="md:text-2xl lg:text-2xl text-lg"></IoLogoFigma> Figma</div>
                        <div className="h-[70px] md:h-auto lg:h-auto bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><SiAdobephotoshop className="md:text-2xl lg:text-2xl text-lg"></SiAdobephotoshop> Adobe Photoshop</div>
                        <div className="h-[70px] md:h-auto lg:h-auto bg-white text-black flex flex-col justify-center md:gap-2 lg:gap-2 gap-1 items-center border border-white rounded p-2 text-center"><SiCanva className="md:text-2xl lg:text-2xl text-lg"></SiCanva> Canva</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;