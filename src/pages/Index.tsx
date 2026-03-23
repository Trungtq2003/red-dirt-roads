import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TourCategories from "@/components/TourCategories";
import CompanyIntro from "@/components/CompanyIntro";
import WhyChooseUs from "@/components/WhyChooseUs";
import TourGrid from "@/components/TourGrid";
import FeatureStrip from "@/components/FeatureStrip";
import GroupTours from "@/components/GroupTours";
import TravelGuide from "@/components/TravelGuide";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TourCategories />
      <CompanyIntro />
      <WhyChooseUs />
      <TourGrid />
      <FeatureStrip />
      <GroupTours />
      <TravelGuide />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
