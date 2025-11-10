import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      icon: <Briefcase size={24} />,
      title: 'Desenvolvedor Full Stack',
      company: 'Freelancer',
      period: '2020 - Presente',
      description: 'Desenvolvimento de aplicações web e mobile completas, desde o planejamento até a entrega final. Trabalho com diversas tecnologias e frameworks modernos.',
      achievements: [
        'Mais de 15 projetos entregues com sucesso',
        'Desenvolvimento de APIs RESTful escaláveis',
        'Implementação de interfaces responsivas e modernas'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Técnico em Programação para Jogos Digitais',
      company: 'SENAI',
      period: '2022 - 2024',
      description: 'Formação técnica completa em desenvolvimento de jogos digitais, abrangendo programação front-end e back-end, desenvolvimento de jogos 2D/3D com Unity, modelagem 3D com Maya e design de jogos.',
      achievements: [
        'Desenvolvimento de jogos 2D e 3D com Unity',
        'Modelagem e animação 3D com Maya',
        'Projetos práticos em equipe',
        'Desenvolvimento de portfolio gamificado'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Award size={24} />,
      title: 'Início da Jornada',
      company: 'Autodidata',
      period: '2018 - 2020',
      description: 'Início dos estudos em programação de forma autodidata, explorando diversas linguagens e tecnologias através de cursos online e projetos pessoais.',
      achievements: [
        'Fundamentos de programação',
        'Primeiros projetos em C e Python',
        'Desenvolvimento de lógica de programação'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]


  return (
    <section id="experience" className="py-20 px-4 bg-dark-card/30">
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
              Experiência & <span className="text-gradient">Formação</span>
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
              Minha trajetória profissional e acadêmica no mundo da tecnologia
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary hover:glow-effect transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary-light font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-text mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-text"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Experience
