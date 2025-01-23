import { FaAward, FaGraduationCap } from "react-icons/fa6";

const ExperienceAndEducation = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-start lg:space-x-5 md:space-x-5 lg:space-y-0 md:-space-y-0 space-y-5">
            {/* Experience Card */}
            <div className="grow w-full border border-[#222222] px-6 py-5 rounded-lg bg-gradient-to-r from-[#202020] tracking-wider">
                <div className="flex gap-3 justify-start items-center border border-t-0 border-x-0 pb-2 border-b-[#555]">
                    <FaAward className="text-[#00d8ff] text-4xl"></FaAward>
                    <h1 className="text-3xl font-bold tracking-widest uppercase bg-gradient-to-r from-[#00d8ff] to-[#006eff] bg-clip-text text-transparent"> Experience</h1>
                </div>
                <div className="mt-5 space-y-2 border border-t-0 border-x-0 pb-5 border-b-[#555]">
                    <h4 className="text-[#BCBCBC] opacity-[0.7] text-sm italic">Apr/2024 - Present</h4>
                    <h2 className="text-lg">Web Developer</h2>
                    <p className="text-[#BCBCBC] opacity-[0.7] text-sm">SKYGURU TRAVEL & TOURISM Co. LLC  <span className="block italic mt-2"> — Dubai - UAE</span></p>
                </div>
                <div className="mt-5 space-y-2 border border-t-0 border-x-0 pb-5 border-b-[#555]">
                    <h4 className="text-[#BCBCBC] opacity-[0.7] text-sm italic">Sep/2020 - Feb/2024 <span>(3.5 Years)</span></h4>
                    <h2 className="text-lg">WordPress Web Developer</h2>
                    <p className="text-[#BCBCBC] opacity-[0.7] text-sm">DEEN COMMERCE LTD <span className="block italic mt-2"> — Dhaka - Bangladesh</span></p>
                </div>
                <div className="mt-5 space-y-2 border border-t-0 border-x-0 pb-5 border-b-[#555]">
                    <h4 className="text-[#BCBCBC] opacity-[0.7] text-sm italic">Jan/2018 - Jan/2019 <span>(1.1 Years)</span></h4>
                    <h2 className="text-lg">Frontend Web Developer</h2>
                    <p className="text-[#BCBCBC] opacity-[0.7] text-sm">MYLIGHTHOST LLC<span className="block italic mt-2"> — Jessore - Bangladesh</span></p>
                </div>
                <div className="mt-5 space-y-2">
                    <h4 className="text-[#BCBCBC] opacity-[0.7] text-sm italic">Feb/2016 - Dec/2017 <span>(1.10 Years)</span></h4>
                    <h2 className="text-lg">Web Developer (Assistant Trainer)</h2>
                    <p className="text-[#BCBCBC] opacity-[0.7] text-sm">JCF Technical Institute (JTI) <span className="block italic mt-2"> — Jessore - Bangladesh</span></p>
                </div>
            </div>
            {/* Education Card */}
            <div className="grow w-full border border-[#222222] px-6 py-5 rounded-lg bg-gradient-to-r from-[#202020] tracking-wider">
                <div className="flex gap-3 justify-start items-center border border-t-0 border-x-0 pb-2 border-b-[#555]">
                    <FaGraduationCap className="text-[#00d8ff] text-4xl"></FaGraduationCap>
                    <h1 className="text-3xl font-bold tracking-widest uppercase bg-gradient-to-r from-[#00d8ff] to-[#006eff] bg-clip-text text-transparent">Education</h1>
                </div>
                <div className="mt-5 space-y-2 border border-t-0 border-x-0 pb-5 border-b-[#555]">
                    <h4 className="text-[#BCBCBC] opacity-[0.7] text-sm italic">Jan/2021 - Jun/2021 (6 Months)</h4>
                    <h2 className="text-lg">Web Development Course</h2>
                    <p className="text-[#BCBCBC] opacity-[0.7]">Programming Hero (Online)</p>
                </div>
                <div className="mt-5 space-y-2 border border-t-0 border-x-0 pb-5 border-b-[#555]">
                    <h4 className="text-[#BCBCBC] opacity-[0.7] text-sm italic">Aug/2015 - Jan/2016 (6 Months)</h4>
                    <h2 className="text-lg">Web Development Course</h2>
                    <p className="text-[#BCBCBC] opacity-[0.7]">Jagorani Technical Institute</p>
                </div>
                <div className="mt-5 space-y-2">
                    <h4 className="text-[#BCBCBC] opacity-[0.7] text-sm italic">2014 - 2017</h4>
                    <h2 className="text-lg">Bachelor of Social Science (BSS)</h2>
                    <p className="text-[#BCBCBC] opacity-[0.7]">Dhaka University</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceAndEducation;
