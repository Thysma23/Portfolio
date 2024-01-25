import ProfilPicture from "./ProfilPicture";
import Welcome from "./Welcome";
import Main from "../../components/container/Main";

export default function HomeIndex() {
    return <Main className="flex justify-around align-middle">
        <Welcome />
        <ProfilPicture />
    </Main>
}