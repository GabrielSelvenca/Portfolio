import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/GabrielSelvenca',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/gabriel-selvenca-05622628b/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:biel.selvenca@gmail.com',
      label: 'Email'
    }
  ]

  const specialties = [
    'APIs REST',
    'C# / ASP.NET',
    'Unity 2D/3D',
    'Arquitetura de Sistemas',
    'SQL Server'
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-primary-light text-xl md:text-2xl font-semibold mb-2">
                Olá, eu sou
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Gabriel <span className="text-gradient">Selvenca</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-text"
            >
              Desenvolvedor <span className="text-primary font-semibold">Back-End</span> & <span className="text-primary font-semibold">Game Developer</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-text text-lg leading-relaxed max-w-xl"
            >
              Transformo ideias em soluções robustas e escaláveis. Especializado em 
              desenvolvimento de APIs REST com C#, arquitetura de sistemas e jogos 
              digitais com Unity 2D/3D.
            </motion.p>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {specialties.map((specialty, index) => (
                <motion.span
                  key={specialty}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm font-medium hover:border-primary hover:glow-effect transition-all duration-300"
                >
                  {specialty}
                </motion.span>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-dark-card border border-dark-border rounded-lg hover:border-primary hover:glow-effect transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg font-semibold transition-all duration-300 glow-effect-hover"
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-primary hover:bg-primary/10 rounded-lg font-semibold transition-all duration-300"
              >
                Entre em Contato
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full blur-3xl opacity-30 animate-pulse" />
                <img
                  src="/img/perfil.png"
                  alt="Gabriel Selvenca"
                  className="relative z-10 w-full h-auto rounded-full border-4 border-primary glow-effect"
                />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-10 right-10 w-20 h-20 border-2 border-primary/30 rounded-lg"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-10 left-10 w-16 h-16 border-2 border-primary-light/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-text hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Role para baixo</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
