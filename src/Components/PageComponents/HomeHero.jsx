import { useContext, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { MovieContext } from '../../Context/MovieContext';
import s from '../Img/spiner.gif'

const HomeHero = () => {
  // const { data, loading } = useContext(MovieContext)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=c7db360e140aaa2ff0ac6e795bc11f61")
      .then(response => response.json())
      .then(commits => setData(commits.results));
  }, [])

  const items = [...data]
  return (
    <div>
      <div className='animate__animated animate__zoomIn'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper z:h-screen"
          color='white'
        >
          {items.map(i => (
            <SwiperSlide key={i.title} className='bg-center bg-cover' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${i.backdrop_path})` }}>
              <div className='w-full h-full flex justify-start items-end z:p-[40px] z:pb-[90px] 850p:p-[100px]'>
                <h1 className='bg-black py-[10px] px-[20px] rounded-[15px] z:text-[20px] 850p:text-[25px]'>{i.title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}

export default HomeHero