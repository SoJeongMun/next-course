import EventButton from '../ui/EventButton'
import DateIcon from '../icons/DateIcon'
import AddressIcon from '../icons/AddressIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'

export default function EventItem({ data }) {
  const { id, title, location, date, image } = data
  const eventDate = new Date(date).toLocaleDateString('en-US', {
    dat: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const formattedAddress = location.replace(', ', '\n')
  const explorePath = `event-page/events/detail/${id}`

  return (
    <li className="shadow-cardShadow rounded-lg overflow-hidden bg-white m-4 flex flex-col gap-4 md:mt-0 md:mb-8 md:flex-row md:gap-6">
      <img src={'/' + image} alt={title} className="w-full object-cover h-40 md:w-2/5 md:h-56" />
      <div className="w-full px-2 text-center md:w-3/5 md:p-0 md:text-left">
        <div>
          <h2 className="text-xl text-eventBg2 font-extrabold my-2 md:my-4">{title}</h2>
          <div className="flex items-center gap-2">
            <DateIcon />
            <time className="text-gray-600 font-bold">{eventDate}</time>
          </div>
        </div>
        <div className="flex items-start gap-2 my-3 whitespace-pre">
          <AddressIcon />
          <address className="text-gray-600">{formattedAddress}</address>
        </div>
        <div className="flex flex-col py-2 px-4 md:flex-row md:justify-end">
          <EventButton link={explorePath} id={id}>
            <span className="align-middle">Explore Event</span>
            <span className="align-middle ml-2 inline-flex justify-center items-center">
              <ArrowRightIcon />
            </span>
          </EventButton>
        </div>
      </div>
    </li>
  )
}
