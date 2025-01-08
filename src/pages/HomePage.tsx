import DownloadSection from '../components/DownloadSection';
import FeaturesSection from '../components/FeaturesSection';
import FloatingButton from '../components/FloatingButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default HomePage;
