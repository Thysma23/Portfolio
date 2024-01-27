type TimelineItemProps = {
    date: {
        datetime: Date,
        text: string,
    },
    lieu: {
        name: string,
        link?: string,
    },
    title: string,
    description: string,
    future?: boolean,
}

export default function TimelineItem({ date, lieu, title, description }: TimelineItemProps) {
    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-dotted border-gray-900 bg-gray-700"></div>
            <span className="mb-1 text-sm font-normal leading-none :text-gray-500">
                <time dateTime={date.datetime.toDateString()} >{date.text}</time> —&nbsp;
                <a href={lieu.link} className="mb-2 text-sm font-normal leading-none inline-block text-gray-500">{lieu.name}</a>
            </span><br />
            <span className="text-lg font-semibold text-gray-700">{title}</span>
            <p className="mb-4 text-base font-normal w-[40cap] text-gray-400">{description}</p>
        </li>
    )
}
