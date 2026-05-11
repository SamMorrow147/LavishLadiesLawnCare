import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Footer } from "@/components/sections/Footer";
import { FlowerDivider } from "@/components/decorative/FlowerDivider";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="py-4">
        <FlowerDivider />
      </Container>
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <QuoteCTA />
      <Footer />
    </>
  );
}
