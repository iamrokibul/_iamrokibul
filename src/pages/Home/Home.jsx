import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ExperienceAndEducation from "../../Shared/ExperienceAndEducation/ExperienceAndEducation";
import Skills from "../../Shared/Skills/Skills";
import resume from '../../assets/images/Md_Rokibul_Hasan_Resume.pdf';

const Home = () => {

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Md_Rokibul_Hasan_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    // const downloadResume = () => {
    //     const link = document.createElement('a');
    //     link.href = '../../assets/images/Md_Rokibul_Hasan_Resume.pdf';
    //     link.download = 'Md_Rokibul_Hasan_Resume.pdf';
    //     link.click();
    //   };

    // TypeWritter
    const [text] = useTypewriter({
        words: ["Frontend Dev", "Elementor Expert", "Digital Marketer"],
        loop: true, // Set loop to true to enable looping
        typeSpeed: 100,
        deleteSpeed: 40,
      });

    return (
        <div className="space-y-5">
            {/* Welcome Card */}
            <div className="lg:space-y-5 md:space-y-4 space-y-2 border border-[#222222] p-6 rounded-lg bg-gradient-to-r from-[#202020]">
                <h3 className="text-xl tracking-widest">Nice to meet you!</h3>
                <h1 className="lg:text-5xl md:text-4xl text-[1.3rem] font-bold tracking-wider uppercase">I am <span className="bg-gradient-to-r from-[#00d8ff] to-[#006eff] bg-clip-text text-transparent">{text}<Cursor cursorStyle="|" /></span></h1>
                <p className="lg:w-3/4 md:2/6 w-full text-justify text-gray-200">Front-End Developer with 5+ years of experience in HTML, CSS, JavaScript, and 1+ year in React.js. Expert in building responsive landing pages and dynamic websites, both independently and in teams.</p>
                {/* CV Download Button */}
                <div>
                    <Link className="inline-block"  to='' ><button onClick={downloadFile} className='mt-3 lg:mt-0 flex items-center gap-3 border hover:text-[#00d8ff] duration-200 rounded-sm bg-gradient-to-r from-[#555555] hover:border-[#00d8ff] border-[#555] uppercase py-3 lg:px-7 md:px-7 px-5 text-sm lg:text-base md:text-base tracking-wider'>Download resume <BsDownload></BsDownload></button></Link>
                </div>
            </div>
            {/* Experience and Education Cards */}
            <ExperienceAndEducation></ExperienceAndEducation>
            {/* Experience and Education Cards */}
            <Skills></Skills>
        </div>
    );
};

export default Home;