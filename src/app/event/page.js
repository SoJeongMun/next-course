import { getFeaturedEvents } from '../../../event-dummy-data'
import EventList from '../components/event/EventList'

export default function EventHome() {
  const featuredEventList = getFeaturedEvents()

  return (
    <div>
      <EventList list={featuredEventList} />
    </div>
  )
}
