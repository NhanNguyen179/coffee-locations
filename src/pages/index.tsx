// components
import { TopBookCategories, BackToSchoolBooks, OtherBookOffers, CarouselFeatures, GetYourBookFromUs, Faq } from "@/app";
import Hero from "@/app/hero";
import { Navbar, Footer } from "@/components";

// sections


export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopBookCategories />
      <BackToSchoolBooks />
      <OtherBookOffers />
      <CarouselFeatures />
      <GetYourBookFromUs />
      <Faq />
      <Footer />
    </>
  );
}
