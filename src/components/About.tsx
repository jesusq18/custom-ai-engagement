
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

const About = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/jesus.quintero18?igsh=d2xwMWJoenZieTRu",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5511964347951?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20para%20conhecer%20mais%20sobre%20as%20soluções%20de%20atendimento%20personalizado.",
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ];

  const skills = [
    "Python", "Inteligência Artificial", "Automação", "Integração de APIs", 
    "Machine Learning", "Processamento de Linguagem Natural"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Sobre Mim</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="glassmorphism p-1 rounded-2xl mb-6 overflow-hidden">
              <img
                src="https://jesus-storage.s3.us-east-1.amazonaws.com/2R2A5567-Editar+(1).jpg"
                alt="Jesús Quintero"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            <div className="flex justify-center space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-white/70 hover:text-neon transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="glassmorphism p-8 h-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Jesús Quintero</h3>
                  <p className="text-white/80 mb-4">
                    Olá, eu sou Jesús Quintero, tenho 23 anos e moro em São Paulo há 7 anos. Sou programador Python com especialização em inteligência artificial e automação empresarial. Minha missão é transformar a comunicação das empresas através de soluções personalizadas e integradas.
                  </p>
                  <p className="text-white/80">
                    Com experiência em desenvolvimento de soluções de IA para empresas de diversos segmentos, busco sempre entender profundamente o negócio de cada cliente para criar ferramentas que realmente atendam às suas necessidades específicas.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-medium mb-3 text-white">Especialidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 text-sm bg-neon/10 text-neon-light border border-neon/20 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-3 text-white">Abordagem</h4>
                  <p className="text-white/80">
                    Acredito que a tecnologia deve ser acessível a todos os tipos de negócios. Por isso, desenvolvo soluções personalizadas que não só automatizam processos, mas também preservam a identidade e o toque pessoal de cada marca.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
