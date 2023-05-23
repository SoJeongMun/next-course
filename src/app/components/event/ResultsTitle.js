import EventButton from '../ui/EventButton'

export default function ResultsTitle({ date }) {
  const chosenDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="mt-8 mx-auto w-[90%] max-w-2xl text-center">
      <p className="mb-6 font-bold text-xl">
        Events in <span className="text-eventBg text-2xl">{chosenDate}</span>
      </p>
      <EventButton link="/event-page/events">Show All Events</EventButton>
    </section>
  )
}
