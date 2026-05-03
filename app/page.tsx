import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import { StatsBar, ReviewsSection, ServicesSection, Footer } from "./components/Sections";
import PropertiesSection from "./components/PropertiesSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      {/* <StatsBar /> */}
      <PropertiesSection />
      <ReviewsSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
