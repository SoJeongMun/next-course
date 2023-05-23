'use client'

import { useParams } from 'next/navigation'
import { getEventById } from '@/event-dummy-data'
import EventContent from '@app/components/event-detail/EventContent'
import EventSummary from '@app/components/event-detail/EventSummary'
import EventLogistics from '@app/components/event-detail/EventLogistics'
import ErrorAlert from '@/app/components/ui/ErrorAlert'

export default function EventDetail() {
  const { eventId } = useParams()
  const eventData = getEventById(eventId)

  if (!eventData) {
    return (
      <ErrorAlert>
        <p>No Event Found!</p>
      </ErrorAlert>
    )
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
