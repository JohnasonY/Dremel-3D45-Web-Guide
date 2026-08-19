import bagClip from "../assets/examples/bagClip.png";

const examples = [
  {
    title: "Bag Clip",
    link: "https://www.printables.com/model/229538-print-in-place-bag-clip-2-parametric",
    material: "PETG",
    description: "A bag clip that can keep your snack fresh.",
    setting: {
      "layer height": "0.3mm (low quality)",
      "nozzle gap": "+0.1mm (to avoid bottom hinges fused together)",
    },
    image: bagClip,
    note: "The latch is too tight, so I used a scrapper to cut out extra bump plastic of the latch",
  },
];

export function ExamplesPage() {
  return (
    <section className="examples-page">
      <div className="examples-copy">
        <h2>Printed Examples</h2>
        <p>Models that were being printed on the Dremel DigiLab 3D45.</p>
      </div>

      <div className="examples-list">
        {examples.map((item) => (
          <article className="example-card" key={item.title}>
            {item.image && <img src={item.image} alt={item.title} />}
            <div className="example-card-copy">
              <div className="example-card-heading">
                <h3>{item.title}</h3>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Model source
                  </a>
                )}
              </div>

              {item.description && <p>{item.description}</p>}
              {item.material && <strong>Material: {item.material}</strong>}

              {item.setting && (
                <dl className="example-settings">
                  {Object.entries(item.setting).map(([name, value]) => (
                    <div key={name}>
                      <dt>{name}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {item.note && <p className="example-note">Note: {item.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
