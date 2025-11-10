import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula carregamento inicial
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative"
        >
          <ParticlesBackground />
          <div className="relative z-10">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
