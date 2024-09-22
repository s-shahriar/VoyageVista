export const dynamic = "force-dynamic";

import Contact from "./components/Contact";
import About from "./components/Homepage/About";
import Banner from "./components/Homepage/Banner";
import Blog from "./components/Homepage/Blog";
import CTA from "./components/Homepage/CTA";
import Events from "./components/Homepage/Events";
import Room from "./components/Homepage/Room";
import Stats from "./components/Homepage/Stats";
import Testimonials from "./components/Homepage/Testimonials";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <Events />
      <About />
      <Stats />
      <Room />
      <Testimonials />
      <CTA />
      <Blog />
      <Contact/>
    </div>
  );
}
