
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a simulação do atendimento?",
      answer:
        "A simulação é baseada em inteligência artificial, que analisa o contexto do seu negócio e cria respostas personalizadas. Utilizamos modelos avançados de IA como GPT-4 para garantir respostas precisas e naturais, adaptadas ao tom e necessidades da sua empresa.",
    },
    {
      question: "Preciso ter conhecimentos técnicos para usar a solução?",
      answer:
        "Não! Nossa solução é projetada para ser acessível a qualquer empresa, independentemente do nível técnico. Eu, Jesús, cuido de toda a configuração e implementação técnica. Você só precisa fornecer informações sobre seu negócio e aprovar as personalizações.",
    },
    {
      question: "Quais canais posso integrar (WhatsApp, Instagram, etc.)?",
      answer:
        "Você pode integrar vários canais de comunicação, incluindo WhatsApp Business, Instagram Direct, Facebook Messenger, seu site (chat ao vivo), e-mail, e até mesmo sistemas de CRM/ERP específicos do seu segmento.",
    },
    {
      question: "Como a integração com CRMs e ERPs pode beneficiar meu negócio?",
      answer:
        "A integração permite que o sistema de IA acesse informações em tempo real sobre estoque, pedidos, histórico de clientes e outros dados cruciais. Isso torna o atendimento mais eficiente, permitindo respostas precisas sobre produtos disponíveis, status de pedidos e informações personalizadas para cada cliente, sem intervenção humana.",
    },
    {
      question: "Quanto tempo leva para implementar a solução?",
      answer:
        "O tempo de implementação varia de acordo com a complexidade do seu negócio e o nível de personalização desejado. Normalmente, uma solução básica pode ser implementada em 1-2 semanas. Projetos mais complexos com múltiplas integrações podem levar de 3-4 semanas.",
    },
    {
      question: "A IA pode lidar com situações complexas ou apenas respostas simples?",
      answer:
        "Nossa solução é capaz de lidar com uma ampla gama de interações, desde respostas simples até cenários mais complexos. A IA pode fornecer informações detalhadas sobre produtos/serviços, resolver problemas comuns, coletar dados de clientes e até mesmo processar pedidos ou agendamentos. Para situações muito complexas, a IA pode encaminhar a conversa para um atendente humano.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-dark-light">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-neon/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-neon-dark/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre nossas soluções de atendimento inteligente.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left py-4 px-6 glassmorphism transition-all duration-300 ${
                  activeIndex === index ? "border-neon/30" : "border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-neon transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="py-4 px-6 bg-dark-lighter border-t-0 rounded-b-2xl border border-white/10">
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
