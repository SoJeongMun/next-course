'use client'

import EventList from '@/app/components/event/EventList'
import ResultsTitle from '@/app/components/event/ResultsTitle'
import ErrorAlert from '@/app/components/ui/ErrorAlert'
import EventButton from '@/app/components/ui/EventButton'
import { getFilteredEvents } from '@/event-dummy-data'
import { useParams } from 'next/navigation'

export default function EventFiltering() {
  const { slug } = useParams()
  if (!slug) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    )
  }

  const [year, month] = slug.split('/')
  const numYear = +year
  const numMonth = +month
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <div className="event-alert">
        <ErrorAlert>
          <p>
            Invalid Filter.
            <br />
            Please Adjust Your Values!
          </p>
        </ErrorAlert>
        <EventButton link="/event-page/events">Show All Events</EventButton>
      </div>
    )
  }

  const filteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })
  if (!filteredEvent || filteredEvent.length === 0) {
    return (
      <div className="event-alert">
        <ErrorAlert>
          <p>No Event Found For The Chosen Filter!</p>
        </ErrorAlert>
        <EventButton link="/event-page/events">Show All Events</EventButton>
      </div>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList list={filteredEvent} />
    </div>
  )
}
