export function VideoSlot({ label, src }) {
  return (
    <video className="video-slot" controls muted preload="metadata" aria-label={label} src={src}>
      <track kind="captions" />
    </video>
  )
}
