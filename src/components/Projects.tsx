import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  tags?: string[]
  customColor?: string
  customEmoji?: string
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Projetos de organizações (repositórios privados - adicionados manualmente)
        const tccProjects: GitHubRepo[] = [
          {
            id: 9999001,
            name: 'ReviewGameAvanade',
            full_name: 'DuckStudios/ReviewGameAvanade',
            description: 'Jogo de revisão desenvolvido para a Avanade. Experiência gamificada para treinamento e avaliação de conhecimentos.',
            html_url: 'https://github.com/DuckStudios',
            homepage: null,
            language: 'C#',
            stargazers_count: 0,
            updated_at: new Date().toISOString(),
            tags: ['🎓 TCC', 'Unity', 'REST API', 'ChatBot IA', 'Top-Down 2D'],
            customColor: 'from-blue-500 to-cyan-500',
            customEmoji: '🎓'
          },
          {
            id: 9999002,
            name: 'DivingSimulator',
            full_name: 'DivingSimulator/DivingSimulatorOfficial',
            description: 'Simulador de mergulho oficial desenvolvido em Unity. Projeto imersivo com física realista e experiência educacional sobre mergulho.',
            html_url: 'https://github.com/DivingSimulator',
            homepage: null,
            language: 'C#',
            stargazers_count: 0,
            updated_at: new Date().toISOString(),
            tags: ['Unity 3D', 'VR Desktop', 'Simulador', 'Física Realista'],
            customColor: 'from-blue-600 to-teal-600',
            customEmoji: '🤿'
          }
        ]
        
        // Projetos pessoais com tags customizadas
        const projectTags: { [key: string]: string[] } = {
          'AR-Shop': ['Unity', 'Realidade Aumentada', 'Mobile'],
          'Taket-It-Back': ['Unity 3D', 'Game Jam', '7 Dias']
        }
        
        // Cores e emojis customizados por projeto
        const projectStyles: { [key: string]: { color: string, emoji: string } } = {
          'ReviewGameAvanade': { 
            color: 'from-blue-500 to-cyan-500', 
            emoji: '🎓' // Educação/Revisão
          },
          'DivingSimulator': { 
            color: 'from-blue-600 to-teal-600', 
            emoji: '🤿' // Mergulho
          },
          'AR-Shop': { 
            color: 'from-pink-500 to-purple-500', 
            emoji: '🛍️' // Shopping/AR
          },
          'Taket-It-Back': { 
            color: 'from-orange-500 to-red-500', 
            emoji: '⚔️' // Jogo de ação
          }
        }
        
        // Lista específica de projetos permitidos
        const allowedProjects = ['AR-Shop', 'Taket-It-Back']
        
        // Buscar repositórios pessoais
        const personalResponse = await fetch('https://api.github.com/users/GabrielSelvenca/repos?per_page=100')
        const personalData = await personalResponse.json()
        
        // Filtrar apenas os projetos permitidos e adicionar tags + estilos
        const filteredPersonalRepos = personalData
          .filter((repo: GitHubRepo) => 
            allowedProjects.some(allowed => repo.name.toLowerCase().includes(allowed.toLowerCase()))
          )
          .map((repo: GitHubRepo) => ({
            ...repo,
            tags: projectTags[repo.name] || [],
            customColor: projectStyles[repo.name]?.color,
            customEmoji: projectStyles[repo.name]?.emoji
          }))
        
        // Buscar organizações
        const orgsResponse = await fetch('https://api.github.com/users/GabrielSelvenca/orgs')
        const orgsData = await orgsResponse.json()
        
        // Buscar repositórios de cada organização
        let orgRepos: GitHubRepo[] = []
        for (const org of orgsData) {
          try {
            const orgReposResponse = await fetch(`https://api.github.com/orgs/${org.login}/repos?per_page=100`)
            const orgReposData = await orgReposResponse.json()
            orgRepos = [...orgRepos, ...orgReposData]
          } catch (error) {
            console.error(`Erro ao buscar repos da org ${org.login}:`, error)
          }
        }
        
        // Combinar projetos TCC + repos pessoais + de organizações
        const allRepos = [...tccProjects, ...filteredPersonalRepos, ...orgRepos]
        
        // Buscar número de commits para cada repo (exceto TCC que são privados)
        const reposWithCommits = await Promise.all(
          allRepos.map(async (repo: GitHubRepo) => {
            // Projetos TCC são privados, dar prioridade máxima
            if (repo.id >= 9999000) {
              return { ...repo, commitCount: 9999 }
            }
            
            try {
              const owner = repo.full_name.split('/')[0]
              const commitsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo.name}/commits?per_page=1`)
              const linkHeader = commitsResponse.headers.get('Link')
              let commitCount = 1
              
              if (linkHeader) {
                const match = linkHeader.match(/page=(\d+)>; rel="last"/)
                if (match) {
                  commitCount = parseInt(match[1])
                }
              }
              
              return { ...repo, commitCount }
            } catch {
              return { ...repo, commitCount: 0 }
            }
          })
        )
        
        // Ordenar por número de commits (projetos TCC aparecem primeiro)
        const sortedRepos = reposWithCommits
          .sort((a, b) => (b.commitCount || 0) - (a.commitCount || 0))
          .slice(0, 9)
        
        setRepos(sortedRepos)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'from-yellow-500 to-yellow-600',
      'TypeScript': 'from-blue-500 to-blue-600',
      'Python': 'from-green-500 to-green-600',
      'C': 'from-gray-500 to-gray-600',
      'C#': 'from-purple-500 to-purple-600',
      'HTML': 'from-orange-500 to-orange-600',
      'Kotlin': 'from-purple-400 to-purple-500',
    }
    return colors[language || ''] || 'from-primary to-primary-light'
  }

  const formatTitle = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const formatDescription = (description: string | null, name: string, language: string | null) => {
    if (description) return description
    
    // Gerar descrições inteligentes baseadas no nome e linguagem
    const nameLower = name.toLowerCase()
    
    // Jogos Unity
    if (language === 'C#' && (nameLower.includes('game') || nameLower.includes('fighter') || nameLower.includes('power') || nameLower.includes('school') || nameLower.includes('senhor') || nameLower.includes('taket'))) {
      return `Jogo desenvolvido em Unity com C#. Projeto de game development com mecânicas interativas e gameplay envolvente.`
    }
    
    // Projetos Python
    if (language === 'Python') {
      if (nameLower.includes('cript') || nameLower.includes('senha')) {
        return `Sistema de criptografia e segurança desenvolvido em Python. Implementação de algoritmos para proteção de dados.`
      }
      if (nameLower.includes('video') || nameLower.includes('download')) {
        return `Aplicação Python para download e processamento de vídeos. Ferramenta de automação com interface amigável.`
      }
      if (nameLower.includes('binary') || nameLower.includes('edit')) {
        return `Editor e manipulador de arquivos binários em Python. Ferramenta para análise e modificação de dados em baixo nível.`
      }
      return `Aplicação desenvolvida em Python com foco em automação e processamento de dados.`
    }
    
    // Projetos TypeScript/JavaScript
    if (language === 'TypeScript' || language === 'JavaScript') {
      if (nameLower.includes('breakout') || nameLower.includes('game') || nameLower.includes('gamifica')) {
        return `Jogo web interativo desenvolvido com TypeScript. Experiência gamificada com mecânicas envolventes.`
      }
      if (nameLower.includes('canvas')) {
        return `Projeto de manipulação de canvas HTML5 com JavaScript. Gráficos e animações interativas.`
      }
      if (nameLower.includes('relatorio') || nameLower.includes('mercado')) {
        return `Sistema de relatórios e integração com API do Mercado Pago. Automação de processos financeiros.`
      }
      return `Aplicação web moderna desenvolvida com ${language}. Interface interativa e responsiva.`
    }
    
    // Projetos Kotlin
    if (language === 'Kotlin') {
      return `Aplicativo Android desenvolvido em Kotlin. Solução mobile com design moderno e performance otimizada.`
    }
    
    // Projetos C
    if (language === 'C') {
      if (nameLower.includes('cript')) {
        return `Sistema de criptografia implementado em C. Algoritmos de segurança em baixo nível com alta performance.`
      }
      return `Aplicação desenvolvida em C com foco em performance e eficiência de recursos.`
    }
    
    // Projetos HTML (sites/desafios)
    if (language === 'HTML') {
      if (nameLower.includes('desafio')) {
        return `Coleção de desafios e exercícios de desenvolvimento web. Projetos práticos de HTML, CSS e JavaScript.`
      }
      return `Website desenvolvido com HTML, CSS e JavaScript. Interface responsiva e moderna.`
    }
    
    // Projetos C# (AR/Unity)
    if (language === 'C#' && nameLower.includes('ar')) {
      return `Aplicação de Realidade Aumentada (AR) desenvolvida em Unity. Experiência imersiva com tecnologia AR.`
    }
    
    return `Projeto ${formatTitle(name)} desenvolvido com ${language || 'múltiplas tecnologias'}.`
  }

  return (
    <section id="projects" className="py-20 px-4">
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
              Meus <span className="text-gradient">Projetos</span>
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
              Projetos selecionados e repositórios de organizações que participo
            </motion.p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && repos.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary hover:glow-effect transition-all duration-200"
                >
                  {/* Project Header with Gradient */}
                  <div className={`relative h-32 bg-gradient-to-br ${repo.customColor || getLanguageColor(repo.language)} opacity-80`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">
                        {repo.customEmoji || (
                          <>
                            {repo.language === 'JavaScript' && '⚡'}
                            {repo.language === 'TypeScript' && '📘'}
                            {repo.language === 'Python' && '🐍'}
                            {repo.language === 'C' && '⚙️'}
                            {repo.language === 'C#' && '💜'}
                            {repo.language === 'HTML' && '🌐'}
                            {repo.language === 'Kotlin' && '📱'}
                            {!repo.language && '📦'}
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Overlay with Links */}
                    <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-primary rounded-full hover:bg-primary-dark transition-colors"
                        aria-label="Ver no GitHub"
                      >
                        <Github size={20} />
                      </motion.a>
                      {repo.homepage && (
                        <motion.a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 bg-primary rounded-full hover:bg-primary-dark transition-colors"
                          aria-label="Ver Demo"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {formatTitle(repo.name)}
                    </h3>
                    
                    <p className="text-gray-text text-sm mb-4 line-clamp-2 min-h-[40px]">
                      {formatDescription(repo.description, repo.name, repo.language)}
                    </p>

                    {/* Tags */}
                    {repo.tags && repo.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.tags.map((tag) => {
                          // Estilo especial para tag TCC
                          const isTCC = tag.includes('TCC')
                          const isUnity = tag.toLowerCase().includes('unity')
                          const isVR = tag.toLowerCase().includes('vr') || tag.toLowerCase().includes('ar')
                          const isAPI = tag.toLowerCase().includes('api')
                          const isIA = tag.toLowerCase().includes('ia') || tag.toLowerCase().includes('chatbot')
                          
                          let tagClass = 'px-3 py-1 text-xs rounded-full transition-all font-medium '
                          
                          if (isTCC) {
                            tagClass += 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50'
                          } else if (isIA) {
                            tagClass += 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                          } else if (isVR) {
                            tagClass += 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30'
                          } else if (isAPI) {
                            tagClass += 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30'
                          } else if (isUnity) {
                            tagClass += 'bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-lg hover:shadow-gray-500/30'
                          } else {
                            tagClass += 'bg-dark-border text-gray-text hover:bg-primary/20 hover:text-primary'
                          }
                          
                          return (
                            <span key={tag} className={tagClass}>
                              {tag}
                            </span>
                          )
                        })}
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-text">
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <span>🔗</span>
                        <span>GitHub</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://github.com/GabrielSelvenca?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-primary hover:bg-primary/10 rounded-lg font-semibold transition-all duration-300"
            >
              <Github size={20} />
              Ver Todos os Repositórios
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
