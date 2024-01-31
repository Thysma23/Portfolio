import TimelineItem from "@/components/timeline/TimelineItem";
import TimelineContainer from "@/components/timeline/TimelineContainer";

export default function ObjectivesSchoolTimeLine() {
    return (
        <aside className="hidden 2xl:block">
            <TimelineContainer>
                <TimelineItem date={{ datetime: new Date("2018-09-01"), text: "Septembre 2018" }}
                    lieu={{
                        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e60d7b3de6436d:0xcc8ac4f1da8a7bcc?sa=X&ved=2ahUKEwjV3NffofmDAxXjQ6QEHROxD-sQ4kB6BAg6EAA",
                        name: "Nogent Sur Marne (94130)"
                    }}
                    title="Lycée Louis Armand"
                    description="BAC Général spécialités Math NSI."
                />
                <TimelineItem date={{ datetime: new Date("2021-09-01"), text: "Septembre 2021" }}
                    lieu={{
                        link: "",
                        name: "Nantes (44000)"
                    }}
                    title="IUT De Nantes"
                    description="BUT Informatique parcours réalisation d'applications : conception, développement, validation."
                />
            </TimelineContainer>
        </aside>
    );
};
