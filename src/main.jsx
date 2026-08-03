import React from 'react'
import ReactDOM from 'react-dom/client'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { GuidePage } from './pages/GuidePage.jsx'
import './styles.css'

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(nextPath) {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="guide-shell">
      <Navbar activePath={path} onNavigate={navigate} />
      {path === '/about' ? <AboutPage /> : <GuidePage />}
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
