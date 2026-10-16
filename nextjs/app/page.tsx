import Header from '@/app/components/Header';
import Home from '@/app/components/Home';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Services from '@/app/components/Services';
import Work from '@/app/components/Work';
import Certificates from '@/app/components/Certificates';
import Testimonial from '@/app/components/Testimonial';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Page() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Certificates />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
