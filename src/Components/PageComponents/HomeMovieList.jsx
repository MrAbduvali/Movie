import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import { MovieContext } from '../../Context/MovieContext';
import s from '../Img/spiner.gif'

const HomeMovieList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=c7db360e140aaa2ff0ac6e795bc11f61")
      .then(response => response.json())
      .then(commits => setData(commits.results));
  }, [])

  const items = [...data]

  return (
    <div className='animate__animated animate__backInRight z:mt-[80px] home-container'>
            <Link to={"/movies"}>
                <div className='flex justify-between items-center group'>
                    <h2 className='z:text-[30px] group-hover:text-[#51B6F5]'>Movies</h2>
                    <FaArrowRightLong className='z:text-[27px] group-hover:text-[#51B6F5]' />
                </div>
            </Link>


       <Swiper
                slidesPerView={1}
                breakpoints={{
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    530: {
                        slidesPerView: 2,
                          spaceBetween: 10,
                    },
                    650: {
                        slidesPerView: 3,
                          spaceBetween: 10,
                    },
                    1000: {
                        slidesPerView: 4,
                          spaceBetween: 30,
                    },
                    1500: {
                        slidesPerView: 5,
                          spaceBetween: 10,
                    },
                }}
                loop={true}
                // navigation={true}
                // modules={[Navigation]}
                className="mySwiper flex justify-center z:mt-[30px]"
            >
                {items.map(i => (
                    <SwiperSlide key={i.title} className=''>
                        <div className='flex flex-col items-center w-full z:gap-y-[10px] bg-[#121212] rounded-[15px] z:p-[10px]'>
                            <img src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} className='z:h-[450px] 530p:h-[300px] 850p:h-[350px] rounded-[15px]' />
                            <h2 className='py-[10px] px-[10px] z:text-[25px] 530p:text-[20px] 850p:text-[20px]'>{i.title}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
  )
}

export default HomeMovieList