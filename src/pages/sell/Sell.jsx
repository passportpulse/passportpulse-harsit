import SellForm from "./sections/SellForm";
import SellFaq from "./sections/SellFaq";
import SellHowItWorks from "./sections/SellHowItWorks";
import SellResults from "./sections/SellResults";
import SellingPower from "./sections/SellingPower";
import SellerWelcomeGuide from "./sections/SellerWelcomeGuide";
import { placesInWB } from "../../data/locations";
import { useState } from "react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";


export default function Sell() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    state: "West Bengal",
    city: "Kolkata",
    locality: "Salt Lake",
    listingType: "For Sale",
    category: "Flat",
    bhk: "2 BHK",
    floor: "",
    totalFloors: "",
    area: "",
    furnishing: "Semi-Furnished",
    bathrooms: "2",
    balconies: "1",
    parking: "Covered",
    facing: "East",
    price: "",
    maintenance: "",
    negotiable: "Slightly Negotiable",
    possession: "Ready to Move",
    amenities: [],
    images: [],
    videoLink: "",
    description: "",
    rera: "",
    ownership: "Registry (Freehold)",
    honestyCheck: false,
    unit: "Sq.Ft",
    view: "Garden",
    kitchen: "Modular",
    utility: "Yes",
    gas: "Pipeline",
    availableFrom: ""
  });

  // Calculate available places here in the parent
  const availablePlaces = placesInWB[formData.city] || [];

  return (
    <Section className="bg-[#f8fafc] min-h-screen py-10" size="small">
      <Container>
        {!showResults ? (
          <>
            <SellForm
              formData={formData}
              setFormData={setFormData}
              availablePlaces={availablePlaces}
              onSubmit={() => setShowResults(true)}
            />
            
            <SellingPower />
            <SellerWelcomeGuide />
            <SellHowItWorks/>
            <SellFaq/>
          </>
        ) : (
          <SellResults
            formData={formData}
            onBack={() => setShowResults(false)}
          />
        )}
      </Container>
    </Section>
  );
}
