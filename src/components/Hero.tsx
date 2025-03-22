
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
    window.open("https://wa.me/yournumber?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20as%20soluções%20de%20atendimento%20personalizado.", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 flex items-center">
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

        {/* Floating mockup */}
        <motion.div 
          className="mt-16 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="glassmorphism p-0.5 rounded-2xl overflow-hidden animate-float shadow-xl shadow-neon/5">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
              alt="Atendimento IA Demo" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">Conheça mais</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
