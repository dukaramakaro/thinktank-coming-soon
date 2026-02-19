import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from '../components/layout/PageTransition'
import Home from '../pages/Home'
import WebDevelopment from '../pages/WebDevelopment'
import ProcessAutomation from '../pages/ProcessAutomation'
import AudiovisualProduction from '../pages/AudiovisualProduction'
import DataSolutions from '../pages/DataSolutions'

export default function AppRouter() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/web-development" element={<PageTransition><WebDevelopment /></PageTransition>} />
        <Route path="/automation" element={<PageTransition><ProcessAutomation /></PageTransition>} />
        <Route path="/audiovisual" element={<PageTransition><AudiovisualProduction /></PageTransition>} />
        <Route path="/data-solutions" element={<PageTransition><DataSolutions /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}
