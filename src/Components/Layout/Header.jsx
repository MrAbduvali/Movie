import { useState } from 'react';
import { Link } from 'react-router-dom'
import { SiThemoviedatabase } from "react-icons/si";
import 'animate.css';


const Header = () => {

    const [bars, setBars] = useState(false)
    const changeMenu = () => {
        setBars(prev => !prev)
    }

    return (
        <nav className='fixed top-0 z-[2] w-full'>
            <div className='bg-custom'>
                <div className='nav-container z:py-[15px] z:flex z:justify-between z:items-center 1000p:justify-around'>
                    <div className="animate__animated animate__zoomIn z-10">
                        <Link to={"/"}>
                            <SiThemoviedatabase className='z:text-[60px] 1000p:text-[70px] text-white' />
                        </Link>
                    </div>
                    {bars === true && <ul className='animate__animated animate__fadeInDown bg-[#121212] w-screen z:absolute z:top-0 z:left-0 z:flex z:flex-col z:z-0 items-center justify-center z:pt-[90px]'>
                        <li className='group z:py-[10px]' onClick={changeMenu}>
                            <Link to={"/"} className='text-[#B3B3B3] group-hover:text-white leading-[30px] z:text-[20px]'>Home</Link>
                        </li>
                        <li className='group z:py-[10px]' onClick={changeMenu}>
                            <Link to={"/movies"} className='text-[#B3B3B3] group-hover:text-white leading-[30px] z:text-[20px]'>Movies</Link>
                        </li>
                        <li className='group z:py-[10px]' onClick={changeMenu}>
                            <Link to={"/series"} className='text-[#B3B3B3] group-hover:text-white leading-[30px] z:text-[20px]'>TV series</Link>
                        </li>
                        <li className='group z:py-[10px]' onClick={changeMenu}>
                            <Link to={"/about"} className='text-[#B3B3B3] group-hover:text-white leading-[30px] z:text-[20px]'>About</Link>
                        </li>
                    </ul>}

                    <ul className='animate__animated animate__zoomIn z:hidden 530p:flex 530p:gap-x-[20px] 1000p:gap-x-[40px]'>
                        <li className='group'>
                            <Link to={"/"} className='text-[#B3B3B3] group-hover:text-white 530p:text-[18px]'>Home</Link>
                        </li>
                        <li className='group'>
                            <Link to={"/movies"} className='text-[#B3B3B3] group-hover:text-white 530p:text-[18px]'>Movies</Link>
                        </li>
                        <li className='group'>
                            <Link to={"/series"} className='text-[#B3B3B3] group-hover:text-white 530p:text-[18px]'>TV series</Link>
                        </li>
                        <li className='group'>
                            <Link to={"/about"} className='text-[#B3B3B3] group-hover:text-white 530p:text-[18px]'>About</Link>
                        </li>
                    </ul>

                    <div className='animate__animated animate__zoomIn z:flex z:flex-col z:gap-y-[3px] 530p:hidden' onClick={changeMenu}>
                        <div className="w-[30px] h-[5px] bg-white rounded-[15px]"></div>
                        <div className="w-[25px] h-[5px] bg-white rounded-[15px]"></div>
                        <div className="w-[35px] h-[5px] bg-white rounded-[15px]"></div>
                    </div>
                </div>
            </div>



        </nav>
    )
}

export default Header