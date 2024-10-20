import { IoSettings } from "react-icons/io5";
import Skills from "../../Shared/Skills/Skills";
import ExperienceAndEducation from "../../Shared/ExperienceAndEducation/ExperienceAndEducation";

const About = () => {
    return (
        <div>
            <div className="flex gap-3 justify-center md:justify-start lg:justify-start items-center pb-5">
                <IoSettings className="text-[#00d8ff] text-3xl"></IoSettings>
                <h1 className="text-3xl font-bold tracking-widest uppercase bg-gradient-to-r from-[#00d8ff] to-[#006eff] bg-clip-text text-transparent">About Me</h1>
            </div>
            <div className='border border-[#222] rounded-lg p-5 bg-gradient-to-r from-[#202020] tracking-wider'>
                <h2 className='text-lg uppercase border-4 inline-block border-b-[#555] border-x-0 border-t-0 pb-2 mb-3'><span className="text-[#555]">—</span> Short Biography</h2>
                <div className="space-y-3 text-justify">
                    <h3 className="italic text-gray-400">Born in 1994. Raised in a small village in Bangladesh <span className="text-gray-200">[Currently living in UAE for over 6 months]</span>. Been hard at work since 2016.</h3>
                    <p className='text-gray-200'>I am <strong>Md Rokibul Hasan</strong> Detail-oriented Front-End Developer with over 5 years of
                    experience in HTML, CSS, and JavaScript, and more than 1 year of
                    expertise in React.js. Skilled in both independent and collaborative
                    work, with a strong focus on developing responsive landing page
                    and dynamic websites.</p>
                </div>
            </div>
            {/* Proficient in */}
            <div className="my-5">
                <Skills></Skills>
            </div>
            {/* Experience and Educations */}
            <div>
                <ExperienceAndEducation></ExperienceAndEducation>
            </div>
        </div>
    );
};

export default About;