import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="border border-[#222222] py-3 rounded-lg bg-gradient-to-r from-[#202020] mb-5">
            <ul className="flex justify-center md:justify-start items-center">
                <li><NavLink className='px-3 text-sm uppercase tracking-wide border border-r border-white border-l-0 border-y-0' to='/'>Home</NavLink></li>
                <li><NavLink className='px-3 text-sm uppercase tracking-wide border border-r border-white border-l-0 border-y-0' to='/About'>About</NavLink></li>
                <li><NavLink className='px-3 text-sm uppercase tracking-wide border border-r border-white border-l-0 border-y-0' to='/Portfolio'>Portfolio</NavLink></li>
                <li><NavLink className='px-3 text-sm uppercase tracking-wide' to='/Contact'>Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;