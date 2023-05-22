import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="my-0 mx-auto w-3/4 pt-20">
      <ul className="flex flex-col justify-between items-center">
        <li className="text-center text-3xl text-eventBg font-bold cursor-pointer hover:underline hover:text-eventBg2">
          <Link href="/event-page">Event Page</Link>
        </li>
      </ul>
    </div>
  )
}
