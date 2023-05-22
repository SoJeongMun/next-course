'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathData = usePathname()
  const eventPage = pathData.includes('event-page')

  return (
    <header className="w-full flex justify-between items-baseline py-4 px-[10%] h-20 bg-gray-800">
      <div className="text-2xl text-white h-full flex justify-center items-center font-bold md:text-4xl">
        <Link href="/">Next</Link>
      </div>
      <nav>
        <ul className="flex flex-row justify-between gap-8 text-white text-lg md:text-2xl">
          {eventPage ? (
            <li>
              <Link href="/event-page/events">Whole Events</Link>
            </li>
          ) : null}
          <li>
            <Link href="https://github.com/SoJeongMun/next-course" target="_blank">
              Github
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
