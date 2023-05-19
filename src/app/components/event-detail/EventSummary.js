function EventSummary({ title }) {
  return (
    <section className="w-full h-[30vh] bg-eventBg">
      <h1 className="m-0 pt-12 text-4xl text-center text-white drop-shadow-headText md:text-6xl">{title}</h1>
    </section>
  )
}

export default EventSummary
