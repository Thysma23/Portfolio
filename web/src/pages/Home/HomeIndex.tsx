import ProfilPicture from "./ProfilPicture";
import Welcome from "./Welcome";

export default function HomeIndex() {
    return (
        <main className="flex flex-col md:flex-row md:justify-around align-middle items-center">
            <Welcome />
            <ProfilPicture />
        </main>
    )
}
