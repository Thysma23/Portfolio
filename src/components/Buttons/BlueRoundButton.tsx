import { ButtonHTMLAttributes } from "react"

export default function BlueRoundButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <a href={require("../../assets/cv/CvStageDevWebMeunierMathys.pdf")} download="CvMeunierMathys" target="_blank">
            <button {...props} className={(props.className || "") + " bg-blue-600 text-slate-200 rounded-2xl p-3 font-bold"}>
                {props.children}
            </button>
        </a>
    )
}