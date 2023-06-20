import EventList from '@app/components/event/EventList'
import { getFeaturedEvents } from '../helpers/api-util'

export default async function EventHome() {
  const events = await getFeaturedEvents()
  return (
    <div>
      <EventList list={events} />
    </div>
  )
}
