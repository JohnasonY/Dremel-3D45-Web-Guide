import { guideSteps } from '../data/guideSteps.jsx'
import { StepCard } from './StepCard.jsx'

export function Steps() {
  return (
    <section className="steps" aria-label="Dremel DigiLab 3D45 simple guide steps">
      {guideSteps.map((step) => (
        <StepCard key={step.number} step={step} />
      ))}
    </section>
  )
}
