import printerImage from '../assets/Dremel DigiLab 3D45 Printer.webp'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Dremel DigiLab 3D45 Quick Guide</h1>
      </div>
      <img
        className="hero-printer"
        src={printerImage}
        alt="Dremel DigiLab 3D45 printer"
      />
    </section>
  )
}
