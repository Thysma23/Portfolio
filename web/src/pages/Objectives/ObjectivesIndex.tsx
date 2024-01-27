import TimelineContainer from "../../components/timeline/TimelineContainer"
import TimelineItem from "../../components/timeline/TimelineItem"

export default function ObjectivesIndex() {
  return (
    <main className="pt-16 sm:pt-32 md:pt-16 xl:pt-20 2xl:pt-24 mx-5 sm:mx-16 md:mx-20 lg:mx-32">
      <h1 className="block sm:hidden md:block">Mes objectifs</h1>
      <div className="mt-5 sm:mt-0 md:mt-5 2xl:flex 2xl:space-x-4">
        <div>
          <section>
            <h2>Objectifs de stage</h2>
            <p className="whitespace-pre-line">
              Je suis à la recherche d'un stage du 11 mars au 10 juin
              pour valider mon BUT Informatique
              qui me permettra de développer mes compétences en développement web et mobile
              au sein d'une équipe collaborative,
              tout en offrant la perspective d'une alternance pour l'année suivante.
            </p>
          </section>
          <section className="mt-5">
            <h2>Objectifs post-universitaire</h2>
            <p>
              Après l'obtention de mon BUT Informatique, je souhaite continuer mes études en alternance en&nbsp;
              <a href="https://www.epitech.eu/formation-alternance/master-of-science-post-bac3/" className="text-slate-700">MSC Pro à Epitech Nantes</a>.
              <br />
              Mon choix s'explique par son mode d'enseignement par projets, aliant pratique et collaboration.
            </p>
            <p>
              J'apprécie découvrir de nouveaux domaines et technologies et ne sait pas encore vers quelle spécialisation me diriger. Une formation offrant la possibilité d'expérimenter un vaste choix d'options comme Epitech me permettra de m'orienter vers ce qui me plaît le plus.
            </p>
          </section>
        </div>
        <aside className="hidden 2xl:block">
          <TimelineContainer>
            <TimelineItem date={{ datetime: new Date("2018-09-01"), text: "Septembre 2018" }}
              lieu={{
                link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e60d7b3de6436d:0xcc8ac4f1da8a7bcc?sa=X&ved=2ahUKEwjV3NffofmDAxXjQ6QEHROxD-sQ4kB6BAg6EAA",
                name: "Nogent Sur Marne (94130)"
              }}
              title="Lycée Louis Armand"
              description="BAC Général spécialités Math NSI." />
            <TimelineItem date={{ datetime: new Date("2021-09-01"), text: "Septembre 2021" }}
              lieu={{
                link: "",
                name: "Nantes (44000)"
              }}
              title="IUT De Nantes"
              description="BUT Informatique parcours réalisation d'applications : conception, développement, validation." />
          </TimelineContainer>
        </aside>
      </div>
    </main>
  )
}
