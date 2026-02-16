import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TechSlider.css';

export default function TechSlider() {
  const technologies = [
    { id: 1, name: 'HTML', image: './slider/tech-html.jpg' },
    { id: 2, name: 'CSS', image: './slider/tech-css.jpg' },
    { id: 3, name: 'Tailwind', image: './slider/tech-tailwind.png' },
    { id: 4, name: 'JavaScript', image: './slider/tech-javascript.jpg' },
    { id: 5, name: 'MySQL', image: './slider/tech-mysql.jpg' },
    { id: 6, name: 'React', image: './slider/tech-react.jpg' },
    { id: 7, name: 'Java', image: './slider/tech-java.jpg' },
    { id: 8, name: 'Node.js', image: './slider/tech-node.jpg' },
    { id: 9, name: 'Spring Boot', image: './slider/tech-springboot.jpg' },
  ];

  return (
    <section className="tech-slider-section">
      <div className="container">
        <h3 className="slider-title">TECNOLOGÍAS APRENDIDAS</h3>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          className="tech-swiper"
        >
          {technologies.map((tech) => (
            <SwiperSlide key={tech.id}>
              <div className="tech-slide">
                <div className="tech-image-wrapper">
                  <img src={tech.image} alt={tech.name} />
                  <div className="tech-overlay">
                    <span className="tech-name">{tech.name}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
