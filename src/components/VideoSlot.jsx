export function VideoSlot({ label, src }) {
  return (
    <video className="video-slot" controls preload="metadata" aria-label={label} src={src}>
      <track kind="captions" />
    </video>
  )
}
