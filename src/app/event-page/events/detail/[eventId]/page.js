'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { getEventById } from '@/event-dummy-data'
import EventContent from '@app/components/event-detail/EventContent'
import EventSummary from '@app/components/event-detail/EventSummary'
import EventLogistics from '@app/components/event-detail/EventLogistics'

export default function EventDetail() {
  const router = useRouter()
  const pathData = usePathname()

  const { eventId } = useParams()
  const eventData = getEventById(eventId)

  if (!eventData) {
    return <p>No Event Found!</p>
  }

  return (
    <>
      <EventSummary title={eventData.title} />
      <EventLogistics data={eventData} />
      <EventContent>
        <p>{eventData.description}</p>
      </EventContent>
    </>
  )
}
