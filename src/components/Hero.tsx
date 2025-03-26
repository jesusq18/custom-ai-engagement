
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      }
    },
  };

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/5511964347951?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20as%20soluções%20de%20atendimento%20personalizado.", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-neon/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-neon-dark/20 rounded-full filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-60 h-60 bg-neon-light/20 rounded-full filter blur-3xl opacity-25 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="inline-block mb-6 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20">
            <span className="text-neon-light text-sm font-medium">Soluções de IA Personalizadas</span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Transforme seu <span className="gradient-text">atendimento</span> com soluções personalizadas
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto">
            Agende uma reunião e descubra como integrar tecnologia ao seu negócio de forma única.
          </motion.p>
          
          <motion.div variants={item}>
            <button 
              onClick={handleWhatsAppRedirect}
              className="btn-primary text-base md:text-lg group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Agendar Reunião
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
