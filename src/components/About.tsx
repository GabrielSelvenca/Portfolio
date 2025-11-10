import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Code2 } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const calculateAge = () => {
    const birthDate = new Date(2006, 8, 8) // Mês 8 = Setembro (0-indexed)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    
    return age
  }

  const calculateExperience = () => {
    const startDate = new Date(2018, 6) // Julho 2018
    const today = new Date()
    return today.getFullYear() - startDate.getFullYear()
  }

  const stats = [
    {
      icon: <Calendar size={24} />,
      label: 'Idade',
      value: `${calculateAge()} anos`
    },
    {
      icon: <MapPin size={24} />,
      label: 'Localização',
      value: 'Brasil'
    },
    {
      icon: <Code2 size={24} />,
      label: 'Experiência',
      value: `${calculateExperience()}+ anos`
    }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Sobre <span className="text-gradient">Mim</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-dark-border hover:border-primary transition-all duration-300 glow-effect-hover">
                <img
                  src={`${import.meta.env.BASE_URL}img/foto_eu.jpg`}
                  alt="Gabriel Selvenca"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold">
                Desenvolvedor Back-End & Game Developer apaixonado por tecnologia
              </h3>

              <p className="text-gray-text text-lg leading-relaxed">
                Olá! Sou Gabriel Selvenca, um desenvolvedor back-end e game developer
                especializado em C# e APIs REST. Com formação técnica em Programação para 
                Jogos Digitais, transformo ideias complexas em soluções robustas e escaláveis.
              </p>

              <p className="text-gray-text text-lg leading-relaxed">
                Minha jornada na programação começou em 2018, e desde então venho
                aprimorando minhas habilidades em desenvolvimento back-end, APIs e
                game development. Trabalho com C#, Unity 2D/3D, desenvolvimento de APIs REST,
                além de tecnologias modernas como ASP.NET e banco de dados SQL.
              </p>

              <p className="text-gray-text text-lg leading-relaxed">
                Especializado em arquitetura de sistemas, desenvolvimento de APIs e jogos
                com Unity, trabalho com as tecnologias mais modernas do mercado,
                sempre buscando aprender e evoluir constantemente.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="bg-dark-card border border-dark-border rounded-xl p-4 hover:border-primary hover:glow-effect transition-all duration-300"
                  >
                    <div className="text-primary mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-text">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
