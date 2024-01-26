import ProfilPicture from "./ProfilPicture";
import Welcome from "./Welcome";

export default function HomeIndex() {
    return <main className="flex justify-around align-middle">
        <Welcome />
        <ProfilPicture />
    </main>
}
