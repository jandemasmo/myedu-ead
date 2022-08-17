import "./BannerCarousel.css";

import CarouselImage1 from "../../assets/images/carousel-1.jpg";
import CarouselImage2 from "../../assets/images/carousel-2.jpg";
import { Cta } from "../Cta/Cta";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export const BannerCarousel = () => {

    return (
        <div className="banner_carousel">
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                slidesPerView={1}
                navigation={true}
                autoplay={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide className="banner" style={{ backgroundImage: `url(${CarouselImage1})` }}>
                    <div className="content">
                        <h2>Cursos com nota maxima no MEC</h2>
                        <h1>Inscreva-se e planeje seu futuro</h1>
                        <p>Use sua nota do enem e começe a estudar hoje mesmo.</p>
                        <Cta text="Saiba Mais" link="/" background="#1e90ff" color="#ffffff" />
                    </div>
                </SwiperSlide>

                <SwiperSlide className="banner" style={{ backgroundImage: `url(${CarouselImage2})` }}>
                    <div className="content">
                        <h2>Cursos com nota maxima no MEC</h2>
                        <h1>Você pode estudar de onde quiser</h1>
                        <p>Nossa plataforma foi desenvolvida e pensada no seu aprendizado</p>
                        <div className="banner_cta">
                            <Cta text="Saiba Mais" link="/" background="#1e90ff" color="#ffffff" />
                            <Cta text="Inscreva-se" link="/" background="#ffffff" color="#1e90ff" />
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}