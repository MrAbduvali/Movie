import { Link } from 'react-router-dom'
import { SiThemoviedatabase } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='bg-[#121212] z:mt-[60px]'>
            <div className='text-white nav-container z:py-[60px] 530p:py-[50px] z:flex z:flex-col z:gap-y-[20px] z:justify-between z:items-center 1000p:justify-around'>
                <div className="animate__animated animate__zoomIn z-10 z:flex z:justify-between 1000p:justify-around items-center z:w-full">
                    <Link to={"/"}>
                        <SiThemoviedatabase className='z:text-[60px] 1000p:text-[70px] text-white' />
                    </Link>
                    <div className='z:flex z:gap-x-[20px]'>
                        <FaInstagram  className='z:text-[20px]'/>
                        <FaGithub  className='z:text-[20px]'/>
                        <FaFacebookF  className='z:text-[20px]'/>
                        <SiUpwork  className='z:text-[20px]'/>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white "></div>
                <ul className='animate__animated animate__zoomIn z:flex gap-x-[20px] 1000p:gap-x-[40px]'>
                    <li className='group'>
                        <Link to={"/"} className='text-[#B3B3B3] group-hover:text-white z:text-[20px] 530p:text-[18px]'>Home</Link>
                    </li>
                    <li className='group'>
                        <Link to={"/movies"} className='text-[#B3B3B3] group-hover:text-white z:text-[20px] 530p:text-[18px]'>Movies</Link>
                    </li>
                    <li className='group'>
                        <Link to={"/tvseries"} className='text-[#B3B3B3] group-hover:text-white z:text-[20px] 530p:text-[18px]'>TV series</Link>
                    </li>
                    <li className='group'>
                        <Link to={"/about"} className='text-[#B3B3B3] group-hover:text-white z:text-[20px] 530p:text-[18px]'>About</Link>
                    </li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer