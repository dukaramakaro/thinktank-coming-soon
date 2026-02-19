import { motion } from 'framer-motion'
import './HeroSection.css'

interface HeroSectionProps {
  statement: string
  highlight?: string
  subtext: string
}

export default function HeroSection({ statement, highlight, subtext }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>

      <div className="hero__content container">
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {statement}
          {highlight && <span className="neon-text"> {highlight}</span>}
        </motion.h1>

        <motion.p
          className="hero__subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {subtext}
        </motion.p>

        <motion.div
          className="hero__line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </section>
  )
}
