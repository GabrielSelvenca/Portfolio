import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'biel.selvenca@gmail.com',
      link: 'mailto:biel.selvenca@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'GabrielSelvenca',
      link: 'https://github.com/GabrielSelvenca',
      color: 'from-gray-500 to-gray-700'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'Gabriel Selvenca',
      link: 'https://www.linkedin.com/in/gabriel-selvenca-05622628b/',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      value: 'Brasil',
      link: '#',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Entre em <span className="text-gradient">Contato</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-4 text-gray-text text-lg max-w-2xl mx-auto"
            >
              Tem um projeto em mente? Vamos trabalhar juntos para transformar suas ideias em realidade!
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold mb-6"
              >
                Informações de Contato
              </motion.h3>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-5 bg-dark-card border border-dark-border rounded-xl hover:border-primary hover:glow-effect transition-all duration-200 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-text text-sm mb-1">{info.title}</h4>
                    <p className="font-medium truncate group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/30 rounded-xl"
              >
                <h4 className="font-bold text-lg mb-2">Disponível para Projetos</h4>
                <p className="text-gray-text text-sm">
                  Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades
                  para fazer parte de suas visões.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary hover:glow-effect transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-semibold transition-all duration-300 glow-effect-hover flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
