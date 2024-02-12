import TimelineItem from "@/components/timeline/TimelineItem";
import TimelineContainer from "@/components/timeline/TimelineContainer";

export default function ObjectivesSchoolTimeLine() {
    return (
        <aside className="hidden 2xl:block">
            <TimelineContainer>
                <TimelineItem date={{ datetime: new Date("2018-09-01"), text: "Septembre 2018" }}
                    lieu={{
                        link: "https://maps.app.goo.gl/CYygMVGHvz4oKfnH9",
                        name: "Nogent Sur Marne (94130)"
                    }}
                    title="Lycée Louis Armand"
                    description="BAC Général spécialités Math NSI."
                />
                <TimelineItem date={{ datetime: new Date("2021-09-01"), text: "Septembre 2021" }}
                    lieu={{
                        link: "https://maps.app.goo.gl/S6557B6euhGV7tXo6",
                        name: "Nantes (44000)"
                    }}
                    title="IUT De Nantes"
                    description="BUT Informatique parcours réalisation d'applications : conception, développement, validation."
                />
                <TimelineItem date={{ datetime: new Date("2024-09-01"), text: "Septembre 2024" }}
                    lieu={{
                        link: "https://maps.app.goo.gl/jwrJM6NG64hJrSMHA",
                        name: "Nantes (44000)"
                    }}
                    title="Epitech Nantes"
                    description="MSC Pro, spécialités à définir."
                />
            </TimelineContainer>
        </aside>
    );
};
