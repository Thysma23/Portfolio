import { ButtonHTMLAttributes } from "react"

export default function BlueRoundButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={(props.className || "") + " bg-blue-600 text-slate-200 rounded-2xl p-3 font-bold shadow-lg hover:shadow-2xl"}>
            {props.children}
        </button>
    )
}
