import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TechSlider.css';

const TECHNOLOGIES = [
  { id: 1, name: 'Claude', image: './slider/tech-claude.jpg' },
  { id: 2, name: 'OpenCode', image: './slider/tech-opencode.jpg' },
  { id: 3, name: 'CrewAI', image: './slider/tech-crewai.jpg' },
  { id: 4, name: 'LM Studio', image: './slider/tech-lmstudio.jpg' },
  { id: 5, name: 'Ollama', image: './slider/tech-ollama.jpg' },
  { id: 6, name: 'n8n', image: './slider/tech-n8n.png' },
  { id: 7, name: 'Antigravity', image: './slider/tech-antigravity.png' },
  { id: 8, name: 'React', image: './slider/tech-react.jpg' },
  { id: 9, name: 'Java', image: './slider/tech-java.jpg' },
  { id: 10, name: 'Node.js', image: './slider/tech-node.jpg' },
  { id: 11, name: 'Spring Boot', image: './slider/tech-springboot.jpg' },
  { id: 12, name: 'HTML', image: './slider/tech-html.jpg' },
  { id: 13, name: 'CSS', image: './slider/tech-css.jpg' },
  { id: 14, name: 'Tailwind', image: './slider/tech-tailwind.png' },
  { id: 15, name: 'JavaScript', image: './slider/tech-javascript.jpg' },
  { id: 16, name: 'MySQL', image: './slider/tech-mysql.jpg' },
];

export default function TechSlider() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tech-slider-section" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <p className="label section-label">— Stack</p>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>
            Technologies Learned
          </h2>
          <div className="section-title-line"></div>
        </div>

        <div className="reveal">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="tech-swiper"
          >
            {TECHNOLOGIES.map((tech) => (
              <SwiperSlide key={tech.id}>
                <div className="tech-slide">
                  <div className="tech-image-wrapper">
                    <img src={tech.image} alt={tech.name} loading="lazy" />
                    <div className="tech-overlay">
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
