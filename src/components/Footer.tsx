import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/GabrielSelvenca',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/gabriel-selvenca-05622628b/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:biel.selvenca@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <footer className="bg-dark-card border-t border-dark-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">Gabriel Selvenca</h3>
            <p className="text-gray-text mb-4">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras
              e experiências excepcionais.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-dark-border hover:bg-primary rounded-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-text hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-text">
              <p>
                <span className="font-semibold text-white">Email:</span><br />
                <a href="mailto:biel.selvenca@gmail.com" className="hover:text-primary transition-colors">
                  biel.selvenca@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Localização:</span><br />
                Brasil
              </p>
              <p>
                <span className="font-semibold text-white">Disponibilidade:</span><br />
                Aberto para projetos
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-dark-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-text text-sm">
            <p>
              © {currentYear} Gabriel Selvenca. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
