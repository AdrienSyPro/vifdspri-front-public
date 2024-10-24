import ExperienceDuration from "@components/ExperienceDuration";
import TextBlock from "@components/TextBlock";
import TextHighlighted from "@components/TextHighlighted";

export default function Page() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-8 mb-8 bg-black text-white p-4">Mon parcours</h2>

      <TextBlock classes="flex lg:min-h-64">
        <ExperienceDuration yearStart="2024" yearEnd="2024" duration="6 m." />
        <div className="lg:flex lg:flex-col lg:justify-between">
          <div className="lg:flex lg:flex-col lg:h-1/3 lg:justify-between">
            <h2 className="text-xl font-bold">Développeur React | Next.js | Symfony | Rust</h2>
            <br className="lg:hidden" />
            <p>
              <strong>Contexte :</strong> Startup dans le secteur de l’immobilier de bureau
            </p>
          </div>
          <br className="lg:hidden" />
          <div className="lg:h-2/3 lg:pt-5">
            Création d’un produit tech innovant dans le secteur de l’immobilier de bureau, tout en
            maintenant le MVP utilisé par les équipes Sales et CSM, et servant de vitrine pour les
            clients. Poste multi-casquettes <TextHighlighted>DevOps</TextHighlighted>.

            Le MVP a été créé avec les technologies <TextHighlighted>Symfony, MySQL, MongoDB, Elastic Search, Docker</TextHighlighted>.

            La nouvelle version écrite en <TextHighlighted>Rust</TextHighlighted> est connectée à de multiples sources de données via
            les API Slack, Mangopay, Hubspot, et la DB du MVP. Le framework <TextHighlighted>Next.js</TextHighlighted> permet de
            construire le front, qui communique avec l’API en <TextHighlighted>GraphQL</TextHighlighted>. Côté <TextHighlighted>CI/CD</TextHighlighted>, le versionning
            est effectué via <TextHighlighted>Git</TextHighlighted> et le déploiement est géré avec les <TextHighlighted>GitHub Actions</TextHighlighted>. La gestion de
            l’infrastructure sur le cloud est faite avec
            <TextHighlighted>GCP</TextHighlighted> et <TextHighlighted>Kubernetes</TextHighlighted>.
          </div>
        </div>
      </TextBlock>

      <TextBlock classes="bg-black text-white flex lg:min-h-64">
        <ExperienceDuration isBackgroundBlack yearStart="2021" yearEnd="2023" duration="2 a." />
        <div className="lg:flex lg:flex-col lg:justify-between">
          <div className="lg:flex lg:flex-col lg:h-1/3 lg:justify-between">
            <h2 className="text-xl font-bold">Développeur React | Symfony</h2>
            <br className="lg:hidden" />
            <p>
              <strong>Contexte :</strong> Création d&apos;une application de gestion des centres de tri de déchets
            </p>
          </div>
          <br className="lg:hidden" />
          <div className="lg:h-2/3 lg:pt-5">
            Remplacement de l&apos;ancien fonctionnement par fichiers excel par une application web moderne en
            <TextHighlighted>Symfony</TextHighlighted> et <TextHighlighted>React</TextHighlighted> dans
            un contexte <TextHighlighted>Agile</TextHighlighted>.
          </div>
        </div>
      </TextBlock>

      <TextBlock classes="flex lg:min-h-64">
        <ExperienceDuration yearStart="2021" yearEnd="2021" duration="6 m." />
        <div className="lg:flex lg:flex-col lg:justify-between">
          <div className="lg:flex lg:flex-col lg:h-1/3 lg:justify-between">
            <h2 className="text-xl font-bold">Développeur React | Symfony</h2>
            <br className="lg:hidden" />
            <p>
              <strong>Contexte :</strong> Refonte du back-office d’administration
            </p>
          </div>
          <br className="lg:hidden" />
          <div className="lg:h-2/3 lg:pt-5">
            Création d&apos;un back-office en <TextHighlighted>Symfony</TextHighlighted> et <TextHighlighted>React</TextHighlighted>,
            l&apos;objectif étant de migrer l&apos;ensemble des fonctionnalités de l&apos;ancienne version vers la nouvelle version.
            Intégration d&apos;une équipe en full-remote dans un contexte <TextHighlighted>Agile</TextHighlighted>.
          </div>
        </div>
      </TextBlock>
    </>
  );
}
