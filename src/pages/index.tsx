// components
import Hero from "@/components/hero";
import PageLayout from "../Layout/page-layout";
import BackToSchoolBooks from "@/components/back-to-school-books";
import CarouselFeatures from "@/components/carousel-features";
import Faq from "@/components/faq";
import GetYourBookFromUs from "@/components/get-your-book-from-us";
import OtherBookOffers from "@/components/other-book-offers";
import TopBookCategories from "@/components/top-book-categories";

export default function HomePage() {
  return (
    <PageLayout>
        <Hero />
        <TopBookCategories />
        <BackToSchoolBooks />
        <OtherBookOffers />
        <CarouselFeatures />
        <GetYourBookFromUs />
        <Faq />
    </PageLayout>
  );
}
