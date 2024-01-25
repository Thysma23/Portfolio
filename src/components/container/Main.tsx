import { HTMLAttributes } from "react"

export default function Main(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <main {...props} className={(props.className || "") + " h-screen"}>
            {props.children}
        </main>
    )
}
