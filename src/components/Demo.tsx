
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useOpenAI from "../hooks/useOpenAI";

const Demo = () => {
  const [userInput, setUserInput] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessInfo, setBusinessInfo] = useState("");
  const [conversation, setConversation] = useState<{role: string, content: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { generateResponse, loading } = useOpenAI();

  const businessTypes = [
    { id: "clinica", name: "Clínica Médica" },
    { id: "loja", name: "Loja de Roupas" },
    { id: "restaurante", name: "Restaurante" },
  ];

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message to conversation
    const newMessage = { role: "user", content: userInput };
    setConversation(prev => [...prev, newMessage]);
    setUserInput("");
    setIsTyping(true);
    
    try {
      // Generate response
      const businessContext = businessType ? businessType : businessInfo;
      const aiResponse = await generateResponse(userInput, businessContext);
      
      if (aiResponse) {
        // Simulate typing effect
        setTimeout(() => {
          setConversation(prev => [...prev, { role: "assistant", content: aiResponse }]);
          setIsTyping(false);
        }, 500);
      }
    } catch (error) {
      console.error("Error in chat:", error);
      setIsTyping(false);
    }
  };

  const selectBusinessType = async (type: string) => {
    setBusinessType(type);
    setBusinessInfo("");
    setConversation([]);
    setIsTyping(true);
    
    const initialResponse = await generateResponse("", type);
    
    if (initialResponse) {
      setTimeout(() => {
        setConversation([{ role: "assistant", content: initialResponse }]);
        setIsTyping(false);
      }, 800);
    }
  };

  const handleBusinessInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessInfo.trim()) return;
    
    setBusinessType("");
    setConversation([]);
    setIsTyping(true);
    
    const initialResponse = await generateResponse("", businessInfo);
    
    if (initialResponse) {
      setTimeout(() => {
        setConversation([{ role: "assistant", content: initialResponse }]);
        setIsTyping(false);
      }, 800);
    }
  };

  return (
    <section id="demo" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title gradient-text">Experimente Agora</h2>
          <p className="section-subtitle">
            Escolha um exemplo ou insira as informações do seu negócio e veja como nossa solução simula um atendimento personalizado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glassmorphism p-6 md:p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 text-white">Configure o Demo</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3 text-white/90">Exemplos Predefinidos</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => selectBusinessType(type.id)}
                      className={`p-3 rounded-lg border transition-all duration-300 text-sm ${
                        businessType === type.id
                          ? "border-neon bg-neon/20 text-white"
                          : "border-white/10 hover:border-white/30 text-white/70 hover:text-white"
                      }`}
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3 text-white/90">Seu Negócio</h4>
                <form onSubmit={handleBusinessInfoSubmit} className="space-y-4">
                  <textarea
                    value={businessInfo}
                    onChange={(e) => setBusinessInfo(e.target.value)}
                    placeholder="Descreva brevemente seu negócio (ex: nome, setor, serviços principais)"
                    className="input-primary min-h-[120px] resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={!businessInfo.trim() || loading}
                    className={`w-full btn-primary ${
                      !businessInfo.trim() ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Simular Atendimento
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glassmorphism h-full flex flex-col">
              <div className="p-4 border-b border-white/10 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                <div className="text-sm text-white/70 font-medium">Simulação de Chat</div>
              </div>
              
              <div className="flex-grow overflow-y-auto p-4 max-h-[400px]">
                <AnimatePresence>
                  {conversation.length === 0 && !isTyping ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex items-center justify-center"
                    >
                      <div className="text-center text-white/50">
                        <svg
                          className="mx-auto h-12 w-12 mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                        <p>Escolha um exemplo ou descreva seu negócio para iniciar a demonstração</p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      {conversation.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${
                            message.role === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                              message.role === "user"
                                ? "bg-neon text-white"
                                : "bg-dark-lighter border border-white/10 text-white"
                            }`}
                          >
                            {message.content}
                          </div>
                        </motion.div>
                      ))}
                      
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex justify-start"
                        >
                          <div className="bg-dark-lighter border border-white/10 text-white max-w-[80%] rounded-2xl px-4 py-3">
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse"></div>
                              <div
                                className="w-2 h-2 rounded-full bg-white/50 animate-pulse"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="w-2 h-2 rounded-full bg-white/50 animate-pulse"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      <div ref={messageEndRef} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="p-4 border-t border-white/10">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    disabled={conversation.length === 0 && !isTyping}
                    className="input-primary flex-grow h-10"
                  />
                  <button
                    type="submit"
                    disabled={!userInput.trim() || loading || (conversation.length === 0 && !isTyping)}
                    className={`h-10 w-10 flex items-center justify-center rounded-full bg-neon ${
                      !userInput.trim() || loading || (conversation.length === 0 && !isTyping)
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-neon-dark"
                    } transition-colors`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
