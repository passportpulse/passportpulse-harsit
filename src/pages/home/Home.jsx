import HotDeals from "./sections/HotDeals";
import FeaturedProperties from "./sections/FeaturedProperties";
import HomeHero from "./sections/HomeHero";
import Trust from "./sections/Trust";
import BestDeals from "./sections/BestDeals";
import ContactCTA from "../../components/ContactCTA";
import SellYourProperty from "./sections/SellYourProperty";
import BestBuy from "./sections/BestBuy";
import JoinUs from "../joinus/JoinUs";
import HomeFilter from "./sections/HomeFilter";
import Testimonials from "./sections/Testimonials";
import ScheduleVisitCta from "./sections/ScheduleVisitCta";
import UrgentExitSection from "./sections/urgentDeals";
import VerifiedSection from "./sections/verifiedProperties";
import FreshArrivals from "./sections/FreshArrivals";
import CategoryComparison from "./sections/CategoryComparison";
import GoToAuctionCTA from "./sections/GoToAuctionCTA";
import BhaiyaSelection from "./sections/BhaiyaSelection";
import PriceHeatMap from "./sections/PriceHeatMap";
import VIPSection from "./sections/VIPSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BhaiyaSelection />
      <CategoryComparison/>
      <FeaturedProperties />
      <BestBuy />
      <PriceHeatMap />
      <HotDeals />
      <UrgentExitSection />
      <VerifiedSection/>
      <FreshArrivals/>
      {/* <BestDeals /> */}
      <GoToAuctionCTA/>
      <SellYourProperty />
      <Trust />
      <Testimonials />
      <VIPSection />
      <JoinUs />
      <ContactCTA />
      <ScheduleVisitCta />
    </>
  );
}
