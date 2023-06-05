import EventList from '@app/components/event/EventList'
import { getFeaturedEvents } from '../helpers/api-util'

export default function EventHome({ events }) {
  return (
    <div>
      <EventList list={events} />
    </div>
  )
}

export async function getStaticProps() {
  const events = await getFeaturedEvents()
  return {
    props: {
      events,
    },
  }
}
