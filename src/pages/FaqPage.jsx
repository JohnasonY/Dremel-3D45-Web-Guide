import layerHeightImage from "../assets/FAQ/layerHeight.png";

const questions = [
  {
    question: "What material is the printer currently using?",
    answer:
      "The printer is currently using PETG. If you want to use a different material, go to the GUIDE page and follow Step 1: Change Filament.",
  },
  {
    question: "Why isn't the nozzle extruding any material?",
    answer:
      "When changing the filament, make sure the filament is pushed fully into the printhead until it feeds properly.",
  },
  {
    question: "What material and print settings should I use for my model?",
    answer:
      "If you downloaded the model online, check the author's recommended material and print settings first.",
  },
  {
    question: "Where can I change the layer height?",
    answer:
      "In Dremel DigiLab 3D Slicer, you can change the layer height by selecting a different Profile. ",
    image: layerHeightImage,
  },
  {
    question:
      "What should I do if some parts are fused together at the bottom?",
    answer:
      "Try increasing the distance between the nozzle and the build platform. On the printer, TOOLS -> CALIBRATE -> NOZZLE GAP CALIBRATION.",
  },
];

export function FaqPage() {
  return (
    <section className="faq-page">
      <div className="faq-copy">
        <h2>Common Questions</h2>
        <p>
          Quick answers for the Dremel DigiLab 3D45 printer and the Dremel
          DigiLab 3D Slicer software
        </p>
      </div>

      <div className="faq-list">
        {questions.map((item) => (
          <article className="faq-card" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
            {item.image && <img src={item.image} alt={item.question} />}
          </article>
        ))}
      </div>
    </section>
  );
}
