import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <TypeAnimation
              sequence={[
                'Hola, soy Franco',
                1000,
                'Soy Desarrollador Web',
                1000,
              ]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              style={{
                display: 'inline-block',
                fontSize: '3.5rem',
                fontWeight: '800',
                color: '#ffffff',
              }}
            />
          </div>
          <p className="hero-subtitle">Transformando ideas en código</p>
        </div>

        <div className="hero-background">
          <div className="gradient-sphere"></div>
          <div className="gradient-circle"></div>
          <div className="grid-pattern"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
