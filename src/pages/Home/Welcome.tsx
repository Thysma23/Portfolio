import BlueRoundButton from "../../components/Buttons/BlueRoundButton";

export default function Welcome() {
    return (
        <div className=" text-slate-900 my-24 sm:mt-40 md:my-auto">
            <p className="text-4xl font-bold">
                Bonjour,
                <br />
                je suis <span className="text-slate-200">Mathys Meunier</span>,
            </p>
            <p className="text-xl font-medium">
                Étudiant en 3<span className="text-sm leading-3">e</span> année de BUT Informatique
            </p>
            <a href={require("../../assets/cv/CvStageDevWebMeunierMathys.pdf")} download="CvMeunierMathys" target="_blank" rel="noreferrer">
                <BlueRoundButton className="mt-2">Télécharger mon cv</BlueRoundButton>
            </a>
        </div>
    )
}
