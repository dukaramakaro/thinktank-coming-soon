import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/images/logo.png'
import './Home.css'

const services = [
  {
    path: '/web-development',
    title: 'Web Development',
    description: 'Modern, fast, and purposeful digital experiences built with React and TypeScript.',
    icon: '</>',
  },
  {
    path: '/automation',
    title: 'Process Automation',
    description: 'From chaotic spreadsheets to intelligent systems. Eliminate manual work.',
    icon: '{}',
  },
  {
    path: '/audiovisual',
    title: 'Audiovisual Production',
    description: 'Visual content that connects with your audience and drives real results.',
    icon: '>>',
  },
  {
    path: '/data-solutions',
    title: 'Data Solutions',
    description: 'Turn noise into insights and data into decisions that move your business.',
    icon: '#_',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  return (
    <main className="home">
      {/* Background */}
      <div className="home__bg">
        <div className="home__grid" />
        <div className="home__orb home__orb--1" />
        <div className="home__orb home__orb--2" />
        <div className="home__scanline" />
      </div>

      {/* Hero */}
      <section className="home__hero">
        <div className="container">
          <motion.div
            className="home__logo-wrap"
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img src={logo} alt="ThinkTank Creations" className="home__logo" />
          </motion.div>

          <motion.h1
            className="home__brand"
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            ThinkTank Creations
          </motion.h1>

          <motion.p
            className="home__tagline"
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            THINK <span className="neon-text">WISE</span>, CREATE <span className="neon-text">SMART</span>
          </motion.p>

          <motion.p
            className="home__intro"
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Freelance studio based in Playa del Carmen. We build digital solutions
            that solve real business problems — from web apps to data systems.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="home__services section">
        <div className="container">
          <motion.div
            className="home__services-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-section__label">What We Do</span>
            <h2>Solutions, Not Just Services</h2>
          </motion.div>

          <motion.div
            className="home__services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {services.map((service) => (
              <motion.div key={service.path} variants={itemVariants}>
                <Link to={service.path} className="home__service-card">
                  <span className="home__service-icon">{service.icon}</span>
                  <h3 className="home__service-title">{service.title}</h3>
                  <p className="home__service-desc">{service.description}</p>
                  <span className="home__service-link">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="home__contact section">
        <div className="container">
          <motion.div
            className="home__contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to build something?</h2>
            <p>Let's talk about your project and find the right solution.</p>
            <a href="mailto:thinktankcreations@proton.me" className="cta__button">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
