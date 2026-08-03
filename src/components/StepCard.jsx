import { GuideImage } from "./GuideImage.jsx";
import { ResourceLink } from "./ResourceLink.jsx";
import { Tip } from "./Tip.jsx";
import { VideoSlot } from "./VideoSlot.jsx";

export function StepCard({ step }) {
  const { Icon } = step;

  return (
    <article className="step-card">
      <div className="step-number">{step.number}</div>
      <div className="step-body">
        <div className="step-title">
          <Icon size={24} aria-hidden="true" />
          <h2>
            {step.title}
            {step.label ? <span>{step.label}</span> : null}
          </h2>
        </div>
        <p>{step.description}</p>
        {step.link ? <ResourceLink {...step.link} /> : null}
        {step.tip ? <Tip>{step.tip}</Tip> : null}
        {step.image ? <GuideImage {...step.image} /> : null}
        {step.video ? (
          <>
            <VideoSlot label={step.video.label} src={step.video.src} />
            <a
              className="video-source"
              href={step.video.source.href}
              target="_blank"
              rel="noreferrer"
            >
              {step.video.source.text}
            </a>
          </>
        ) : null}
      </div>
    </article>
  );
}
