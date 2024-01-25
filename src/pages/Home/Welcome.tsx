import BlueRoundButton from "../../components/Buttons/BlueRoundButton";

export default function Welcome() {
    return (
        <div className=" text-slate-900 my-auto">
            <p className="text-4xl font-bold">
                Bonjour,
            </p>
            <p className="text-4xl font-bold">
                je suis <span className="text-slate-200">Mathys Meunier</span>,
            </p>
            <p className="text-2xl font-medium">
                Étudiant en 3<span className="text-sm leading-3">e</span> année de BUT Informatique
            </p>
            <BlueRoundButton className="mt-2">Télécharger mon cv</BlueRoundButton>
        </div>
    )
}