import ProfilPicture from "./ProfilPicture";
import Welcome from "./Welcome";

export default function HomeIndex() {
    return <main className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 h-screen flex justify-around align-middle">
        <Welcome />
        <ProfilPicture />
    </main>
}