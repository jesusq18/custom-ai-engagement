
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Integration from "../components/Integration";
import Booking from "../components/Booking";
import FAQ from "../components/FAQ";
import About from "../components/About";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="bg-dark text-white min-h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <Hero />
          <HowItWorks />
          <Integration />
          <Booking />
          <FAQ />
          <About />
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Index;
