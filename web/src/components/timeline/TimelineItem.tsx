/** 
 * MIT License

Copyright (c) 2023 Bergside Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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
        <li className="mb-6 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-dotted border-gray-900 bg-gray-700"></div>
            <span className="mb-1 text-sm font-normal leading-none :text-gray-500">
                <time dateTime={date.datetime.toDateString()} >{date.text}</time> —&nbsp;
                <a href={lieu.link} className="mb-2 text-sm font-normal leading-none inline-block text-gray-500 hover:underline" target="_blank" rel="noreferrer">{lieu.name}</a>
            </span><br />
            <span className="text-lg font-semibold text-gray-700">{title}</span>
            <p className="mb-4 text-base font-normal w-[40cap] text-gray-400">{description}</p>
        </li>
    )
}
