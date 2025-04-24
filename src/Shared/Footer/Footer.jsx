import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <p className="text-sm">&copy; Copyright | <Link className="text-[#00d8ff]" to='/'>IamRokibul</Link> | 2025</p>
        </div>
    );
};

export default Footer;
