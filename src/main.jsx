import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hero } from './components/Hero.jsx'
import { Steps } from './components/Steps.jsx'
import './styles.css'

function App() {
  return (
    <main className="guide-shell">
      <Hero />
      <Steps />
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
