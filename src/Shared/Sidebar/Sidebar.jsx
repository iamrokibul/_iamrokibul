import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../assets/images/md_rokibul_hasan.jpg';
import { CiFacebook, CiHome, CiInstagram, CiLinkedin, CiUser, CiYoutube } from 'react-icons/ci';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';
import { VscCode } from 'react-icons/vsc';
import { MdOutlineContactEmergency } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';

const Sidebar = () => {
    return (
        <div className='lg:sticky border border-[#222222] p-3 lg:py-5 lg:px-0 shadow-lg rounded-lg text-center bg-gradient-to-r from-[#202020]'>
            <div className='flex justify-between md:justify-evenly items-center lg:block gap-3'>
                {/* Logo Image */}
                <div className='lg:w-5/6 w-2/5 md:w-2/6 mx-auto rounded-lg border border-white lg:mb-3 md:mb-3'>
                    <img className='w-full rounded-lg' src={logoImg} alt="IamRokibul-Image" />
                </div>
                <div className='grow'>
                    {/* Title and Subtitle */}
                    <div className='lg:py-3 space-y-1'>
                        <h3 className='text-[#BCBCBC] opacity-[0.7] lg:text-sm md:text-sm text-[.7rem] tracking-wider uppercase'>Frontend Web Developer</h3>
                        <h1 className='text-[1rem] md:text-[1.3rem] lg:text-[1.3rem] md:text-3xl font-bold uppercase tracking-wider bg-gradient-to-r from-[#00d8ff] to-[#006eff] bg-clip-text text-transparent'>MD ROKIBUL HASAN</h1>

                    {/* Social Links */}
                        <ul className='flex justify-center items-center gap-2 lg:gap-3 py-2'>
                            <li title='Facebook'><Link to='https://www.facebook.com/iamrokibul/' target="_blank"><CiFacebook className='hover:text-[#00d8ff] duration-200 lg:text-2xl md:text-2xl text-xl'></CiFacebook></Link></li>
                            <li title='Twitter'><Link to='https://x.com/_iamrokibul' target="_blank"><FaXTwitter className='hover:text-[#00d8ff] duration-200 text-xl'></FaXTwitter></Link></li>
                            <li title='Instagram'><Link to='https://www.instagram.com/_iamrokibul/' target="_blank"><CiInstagram className='hover:text-[#00d8ff] duration-200 lg:text-2xl md:text-2xl text-xl'></CiInstagram></Link></li>
                            <li title='LinkedIn'><Link to='https://www.linkedin.com/in/iamrokibul1/' target="_blank"><CiLinkedin className='hover:text-[#00d8ff] duration-200 lg:text-2xl md:text-2xl text-xl'></CiLinkedin></Link></li>
                            <li title='GitHub'><Link to='https://github.com/iamrokibul' target="_blank"><FiGithub className='hover:text-[#00d8ff] duration-200lg: lg:text-2xl md:text-2xl text-xl'></FiGithub></Link></li>
                            <li title='Youtube'><Link to='https://www.youtube.com/@codewithrokibul' target="_blank"><CiYoutube className='hover:text-[#00d8ff] duration-200 lg:text-2xl md:text-2xl text-xl'></CiYoutube></Link></li>
                        </ul>
                    </div>
                    {/* Hire Me Button */}
                    <div className='mt-2 lg:mt-0'>
                        <Link  to='/contact'><button className='flex items-center gap-3 border hover:text-[#00d8ff] duration-200 rounded-sm bg-gradient-to-r from-[#555555] hover:border-[#00d8ff] border-[#555] uppercase py-2 px-7 lg:px-10 md:px-10 mx-auto tracking-wider text-sm lg:text-base md:text-base'>Hire Me <HiOutlineArrowUpRight></HiOutlineArrowUpRight></button></Link>
                    </div>
                </div>
            </div>
            {/* Navigation Items */}
            <div className='hidden lg:block'>
                <ul className='py-5 mt-5'>
                    <li><NavLink className='px-4 flex items-center gap-2 hover:text-[#00d8ff] duration-200 py-3 border-b border-[#555] hover:border-[#00d8ff] text-left' to='/'><CiHome className='text-xl'></CiHome>Home</NavLink></li>
                    <li><NavLink className='px-4 flex items-center gap-2 hover:text-[#00d8ff] duration-200 py-3 border-b border-[#555] hover:border-[#00d8ff] text-left' to='/about'><CiUser className='text-xl'></CiUser> About</NavLink></li>
                    <li><NavLink className='px-4 flex items-center gap-2 hover:text-[#00d8ff] duration-200 py-3 border-b border-[#555] hover:border-[#00d8ff] text-left' to='/portfolio'><VscCode className='text-xl'></VscCode> Portfolio</NavLink></li>
                    <li><NavLink className='px-4 flex items-center gap-2 hover:text-[#00d8ff] duration-200 py-3 border-b border-[#555] hover:border-[#00d8ff] text-left' to='/contact'><MdOutlineContactEmergency className='text-lg'></MdOutlineContactEmergency> Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;