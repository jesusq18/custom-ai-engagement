
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-8 relative bg-dark-darker">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-white">
                <span className="gradient-text">IA</span>tendimientos
              </a>
            </div>
            <p className="text-white/60 mb-4">
              Soluções personalizadas de inteligência artificial para transformar o atendimento do seu negócio.
            </p>
            <p className="text-white/60">
              São Paulo, Brasil
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-white/60 hover:text-neon transition-colors duration-300">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#integration" className="text-white/60 hover:text-neon transition-colors duration-300">
                  Integrações
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-neon transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-neon transition-colors duration-300">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-white/60">
                <svg className="w-5 h-5 mr-2 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jquinteroq11@gmail.com" className="hover:text-neon transition-colors duration-300">
                  jquinteroq11@gmail.com
                </a>
              </li>
              <li className="flex items-center text-white/60">
                <svg className="w-5 h-5 mr-2 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+5511964347951" className="hover:text-neon transition-colors duration-300">
                  +55 11 96434-7951
                </a>
              </li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/jesus.quintero18?igsh=d2xwMWJoenZieTRu" className="text-white/60 hover:text-neon transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/5511964347951?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20as%20soluções%20de%20atendimento%20personalizado." className="text-white/60 hover:text-neon transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {currentYear} IAtendimientos. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 text-sm hover:text-neon transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-neon transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
