export function ResourceLink({ href, text, Icon }) {
  return (
    <a className="resource-link" href={href} target="_blank" rel="noreferrer">
      {text}
      <Icon size={18} aria-hidden="true" />
    </a>
  )
}
