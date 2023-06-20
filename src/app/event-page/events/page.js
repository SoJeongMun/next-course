'use client'

import EventList from '@/app/components/event/EventList'
import EventSearch from '@/app/components/event/EventSearch'
import { getAllEvents } from '@/app/helpers/api-util'
import { useRouter } from 'next/navigation'

export default async function WholeEvents() {
  const router = useRouter()
  const wholeEvents = await getAllEvents()

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
