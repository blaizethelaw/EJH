import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
