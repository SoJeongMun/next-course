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
