import { HTMLAttributes, } from "react"

export default function Main(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <main {...props} className={(props.className || "") + " bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 h-screen"}>
            {props.children}
        </main>
    )
}
