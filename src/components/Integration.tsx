
import { motion } from "framer-motion";

const Integration = () => {
  const integrations = [
    {
      id: 1,
      title: "WhatsApp Business",
      description: "Automatize o atendimento no canal mais usado pelos seus clientes.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6 6.32C16.12 4.82 14.12 4 12 4C7.72 4 4.24 7.48 4.24 11.76C4.24 13.32 4.64 14.84 5.36 16.2L4.12 20L8.04 18.76C9.36 19.4 10.64 19.76 12 19.76C16.28 19.76 19.76 16.28 19.76 12C19.76 9.88 18.96 7.88 17.48 6.36M15.12 14.56C14.92 15.08 14.12 15.52 13.6 15.6C13.16 15.68 12.56 15.72 11 15.08C8.96 14.24 7.64 12.16 7.52 12C7.44 11.84 6.64 10.76 6.64 9.6C6.64 8.48 7.2 7.92 7.4 7.68C7.6 7.44 7.84 7.4 8 7.4C8.12 7.4 8.28 7.4 8.4 7.4C8.52 7.4 8.72 7.36 8.92 7.76C9.12 8.16 9.52 9.28 9.56 9.36C9.6 9.48 9.64 9.6 9.56 9.72C9.16 10.4 8.72 10.36 8.92 10.76C9.6 11.88 10.32 12.48 11.32 13.04C11.6 13.2 11.72 13.16 11.84 13C11.96 12.84 12.36 12.36 12.48 12.12C12.6 11.88 12.76 11.92 12.96 12C13.16 12.08 14.24 12.6 14.44 12.72C14.68 12.84 14.84 12.88 14.88 13C14.92 13.08 14.92 13.56 14.76 14.08L15.12 14.56Z" fill="#25D366"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Instagram",
      description: "Responda mensagens diretas e comentários de forma inteligente.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="url(#paint0_radial_1_91)"/>
          <defs>
            <radialGradient id="paint0_radial_1_91" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 17) rotate(-55.3758) scale(25.5196)">
              <stop stopColor="#B13589"/>
              <stop offset="0.79309" stopColor="#C62F94"/>
              <stop offset="1" stopColor="#8A3AC8"/>
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      title: "CRM / ERP",
      description: "Integração com seus sistemas para automação completa do negócio.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5ZM5 5H19V19H5V5ZM7 7V9H9V7H7ZM11 7V9H13V7H11ZM15 7V9H17V7H15ZM7 11V13H9V11H7ZM11 11V13H13V11H11ZM15 11V13H17V11H15ZM7 15V17H9V15H7ZM11 15V17H13V15H11ZM15 15V17H17V15H15Z" fill="#3b82f6"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: "APIs Personalizadas",
      description: "Conexão com sistemas específicos do seu segmento.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7H5C3.9 7 3 7.9 3 9V17H5V13H7V17H9V9C9 7.9 8.1 7 7 7ZM7 11H5V9H7V11Z" fill="#9333ea"/>
          <path d="M13 7H11V17H13V13H15V11H13V7Z" fill="#9333ea"/>
          <path d="M19 7H17C15.9 7 15 7.9 15 9V17H17V13H19V17H21V9C21 7.9 20.1 7 19 7ZM19 11H17V9H19V11Z" fill="#9333ea"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="integration" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Possibilidades de Integração</h2>
          <p className="section-subtitle">
            Nossas soluções não se limitam ao atendimento. Podemos integrar agentes personalizados com seus sistemas de CRM, ERP e muito mais, ampliando as possibilidades de automação para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(182, 74, 255, 0.2)",
              }}
              className="glassmorphism p-6 transition-all duration-300 hover:border-neon/30"
            >
              <div className="mb-6">{integration.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{integration.title}</h3>
              <p className="text-white/70">{integration.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-5 py-3 rounded-full border border-neon/30 bg-dark-lighter">
            <p className="text-white/80">
              E muito mais! Podemos criar soluções personalizadas para atender às necessidades específicas do seu negócio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integration;
