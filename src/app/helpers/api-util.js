export async function getAllEvents() {
  const data = await (await fetch('https://dummy-data-1eebb-default-rtdb.firebaseio.com/events.json')).json()

  const events = []
  for (const i in data) {
    events.push({ id: i, ...data[i] })
  }
  /** 
    const { e1, e2, e3 } = await (await fetch('https://dummy-data-1eebb-default-rtdb.firebaseio.com/events.json')).json()
    const events = [ e1, e2, e3 ]
    events.map((el, i) => ({ id: i, ...el }))
  */

  return events
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents()
  return allEvents.filter(event => event.isFeatured)
}

export async function getEventById(id) {
  const allEvents = await getAllEvents()
  return allEvents.find(event => event.id === id)
}

export async function getFilteredEvents(date) {
  const { year, month } = date
  const allEvents = await getAllEvents()

  let filteredEvents = allEvents.filter(event => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })

  return filteredEvents
}
