import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 45, icon: '🌐' },
        { name: 'CSS3', level: 40, icon: '🎨' },
        { name: 'JavaScript', level: 85, icon: '⚡' },
        { name: 'TypeScript', level: 80, icon: '📘' },
        { name: 'React', level: 50, icon: '⚛️' },
        { name: 'TailwindCSS', level: 35, icon: '💨' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'C', level: 80, icon: '⚙️' },
        { name: 'C#', level: 90, icon: '💜' },
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: '.NET APIs', level: 90, icon: '🔌' },
      ]
    },
    {
      title: 'Mobile & Design',
      skills: [
        { name: 'Kotlin', level: 75, icon: '📱' },
        { name: 'React Native', level: 80, icon: '📲' },
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'UI/UX Design', level: 80, icon: '✨' },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'SQL Server', level: 85, icon: '🗄️' },
        { name: 'MySQL', level: 78, icon: '🐬' },
        { name: 'SQLite', level: 73, icon: '📦' },
        { name: 'Git', level: 90, icon: '🔀' },
        { name: 'GitHub', level: 92, icon: '🐙' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-dark-card/30">
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
              Minhas <span className="text-gradient">Habilidades</span>
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
              Tecnologias e ferramentas que domino para criar soluções completas
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary hover:glow-effect transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-light">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>

                      <div className="relative h-2 bg-dark-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-text text-lg">
              Sempre aprendendo e explorando novas tecnologias para entregar as melhores soluções
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
