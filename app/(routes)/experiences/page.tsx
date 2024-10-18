import ExperienceDuration from "@components/ExperienceDuration";
import TextBlock from "@components/TextBlock";
import TextHighlighted from "@components/TextHighlighted";

export default function Page() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-8 mb-8 bg-black text-white p-4">Mon parcours</h2>

      <TextBlock classes="flex">
        <ExperienceDuration yearStart="2024" yearEnd="2024" duration="6 m." />
        <div>
          <h2 className="text-xl font-bold">Développeur React | Next.js | Symfony | Rust</h2>
          <br />
          <p>
            <strong>Contexte :</strong> Startup dans le secteur de l’immobilier de bureau
          </p>
          <br />
          <p>
            Création d’un produit tech innovant dans le secteur de l’immobilier de bureau, tout en
            maintenant le MVP utilisé par les équipes Sales et CSM, et servant de vitrine pour les
            clients. Poste multi-casquette <TextHighlighted>DevOps</TextHighlighted>.

            Le MVP a été créée avec les technologies <TextHighlighted>Symfony, MySQL, MongoDB, Elastic Search, Docker</TextHighlighted>.

            La nouvelle version écrite en <TextHighlighted>Rust</TextHighlighted> est connectée à de multiples sources de données via
            les API Slack, Mangopay, Hubspot, et la DB du MVP. Le framework <TextHighlighted>Next.js</TextHighlighted> permet de
            construire le front, qui communique avec l’API en <TextHighlighted>GraphQL</TextHighlighted>. Côté <TextHighlighted>CI/CD</TextHighlighted>, le versionning
            est effectué via <TextHighlighted>Git</TextHighlighted> et le déploiement est géré avec les <TextHighlighted>GitHub Actions</TextHighlighted>. La gestion de
            l’infrastructure sur le cloud est faite avec
            <TextHighlighted>GCP</TextHighlighted> et <TextHighlighted>Kubernetes</TextHighlighted>.
          </p>
        </div>
      </TextBlock>

      <TextBlock classes="bg-black text-white flex">
        <ExperienceDuration isBackgroundBlack yearStart="2021" yearEnd="2023" duration="2 a." />
        <div>
          <h2 className="text-xl font-bold">Développeur React | Symfony</h2>
          <br />
          <p>
            <strong>Contexte :</strong> Création d&apos;une application de gestion des centre de tri de déchets
          </p>
          <br />
          <p>
            Remplacement de l&apos;ancien fonctionnement par fichiers excel par une application web moderne en
            <TextHighlighted>Symfony</TextHighlighted> et <TextHighlighted>React</TextHighlighted> dans
            un contexte agile.
          </p>
        </div>
      </TextBlock>

      <TextBlock classes="flex">
        <ExperienceDuration yearStart="2021" yearEnd="2021" duration="6 m." />
        <div>
          <h2 className="text-xl font-bold">Développeur React | Symfony</h2>
          <br />
          <p>
            <strong>Contexte :</strong> Refonte du back-office d’administration
          </p>
          <br />
          <p>
            Création d&apos;un back-office en Symfony et React,
            l&apos;objectif étant de migrer l&apos;ensemble des fonctionnalités de l&apos;ancienne version vers la nouvelle version.
            Intégration d&apos;une équipe en full-remote dans un contexte agile.
          </p>
        </div>
      </TextBlock>
    </>
  );
}
