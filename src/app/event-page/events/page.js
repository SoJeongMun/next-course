'use client'

import EventList from '@/app/components/event/EventList'
import EventSearch from '@/app/components/event/EventSearch'
import { getAllEvents } from '@/event-dummy-data'
import { useRouter } from 'next/navigation'

export default function WholeEvents() {
  const wholeEvents = getAllEvents()
  const router = useRouter()

  const findEventHandler = (year, month) => {
    const fullPath = `/event-page/events/detail/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList list={wholeEvents} />
    </div>
  )
}
