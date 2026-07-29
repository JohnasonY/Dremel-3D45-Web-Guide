export function GuideImage({ alt, src }) {
  return (
    <figure className="guide-image">
      <img src={src} alt={alt} />
    </figure>
  )
}
