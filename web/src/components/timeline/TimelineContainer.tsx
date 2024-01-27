import { ReactNode } from "react";

export type TimelineContainerProps = {
    children?: ReactNode
}

export default function TimelineContainer({ children }: TimelineContainerProps) {
    return (
        <div className="px-10 h-full flex flex-col justify-center bg-gray-200 rounded-lg shadow-sm duration-300 ease-in-out hover:shadow-2xl">
            <ol className="relative border-s dark:border-gray-700 ">
                {children}
            </ol>
        </div>
    )
}
