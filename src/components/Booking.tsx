
import { motion } from "framer-motion";

const Booking = () => {
  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/5511964347951?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20as%20soluções%20de%20atendimento%20personalizado.", "_blank");
  };

  return (
    <section id="booking" className="py-24 relative bg-dark-light">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-neon/20 rounded-full filter blur-3xl opacity-30 animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-neon-dark/20 rounded-full filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glassmorphism p-8 md:p-12 text-center"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20">
            <span className="text-neon-light text-sm font-medium">Vamos conversar?</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Experimente o atendimento inteligente
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 mb-10">
            Descubra como podemos personalizar uma solução para o seu negócio. Agende uma reunião e veja na prática como a IA pode transformar seu atendimento.
          </p>
          
          <button
            onClick={handleWhatsAppRedirect}
            className="btn-primary text-lg group relative overflow-hidden inline-flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
                />
              </svg>
              Agendar Reunião
            </span>
            <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
          
          <p className="mt-6 text-sm text-white/50">
            Após clicar, você será redirecionado para o WhatsApp onde nosso assistente inteligente ajudará a encontrar o melhor horário para você.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
