import { Check } from 'lucide-react'

export function Tip({ children }) {
  return (
    <div className="tip">
      <Check size={20} aria-hidden="true" />
      <p>{children}</p>
    </div>
  )
}
