import EventItem from './EventItem'

export default function EventList({ list }) {
  return (
    <ul className="w-11/12 max-w-2xl my-20 mx-auto">
      {list.map(event => (
        <EventItem key={event.id} data={event} />
      ))}
    </ul>
  )
}
