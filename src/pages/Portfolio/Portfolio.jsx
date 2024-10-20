import project1 from '../../assets/images/deen-commerce-iamrokibul.jpg';
import project2 from '../../assets/images/city-weather-by-rokibul.jpg';
import { Link } from "react-router-dom";
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { GrProjects } from 'react-icons/gr';

const Portfolio = () => {
    return (
        <div>
            <div className="flex gap-3 justify-center md:justify-start lg:justify-start items-center pb-5">
                <GrProjects className="text-[#00d8ff] text-2xl"></GrProjects>
                <h1 className="text-3xl font-bold tracking-widest uppercase bg-gradient-to-r from-[#00d8ff] to-[#006eff] bg-clip-text text-transparent">Projects</h1>
            </div>
            <div className="grid grid-cols-2 md:gap-5 lg:gap-5 gap-3">
                {/* Project 1 */}
                <div className="bg-gradient-to-r from-[#202020] border border-[#222] rounded-lg md:p-5 lg:p-5 p-2 hover:text-[#00d8ff]">
                    <div>
                        <img className='rounded-lg' src={project1} alt="Project Deen Commerce" />
                    </div>
                    <div className="mt-3 md:pt-4 lg:pt-4 pt-2 pb-2 md:px-4 lg:px-4 px-0">
                        <Link className='flex justify-between items-center flex-col md:flex-row lg:flex-row space-y-2' to='https://deencommerce.com' target='_blank'>
                            <h2 className="md:text-xl lg:text-xl text-sm tracking-wider uppercase">DEEN COMMERCE </h2>
                            <HiOutlineArrowUpRight className="text-2xl"></HiOutlineArrowUpRight>
                        </Link>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="bg-gradient-to-r from-[#202020] border border-[#222] rounded-lg md:p-5 lg:p-5 p-2 hover:text-[#00d8ff]">
                    <div>
                        <img className='rounded-lg' src={project2} alt="Project Deen Commerce" />
                    </div>
                    <div className="mt-3 md:pt-4 lg:pt-4 pt-2 pb-2 md:px-4 lg:px-4 px-0">
                        <Link className='flex justify-between items-center flex-col md:flex-row lg:flex-row space-y-2' to='https://cwr-city-weather.netlify.app/' target='_blank'>
                            <h2 className="md:text-xl lg:text-xl text-sm tracking-wider uppercase">City Weather </h2>
                            <HiOutlineArrowUpRight className="text-2xl"></HiOutlineArrowUpRight>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;