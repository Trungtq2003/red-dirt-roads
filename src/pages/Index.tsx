import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TourCategories from "@/components/TourCategories";
import TourGrid from "@/components/TourGrid";
import FeatureStrip from "@/components/FeatureStrip";
import GroupTours from "@/components/GroupTours";
import FeaturedRoute from "@/components/FeaturedRoute";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TourCategories />
      <TourGrid />
      <FeatureStrip />
      <GroupTours />
      <FeaturedRoute />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
