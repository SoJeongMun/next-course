import LogisticsItem from '../event-detail/LogisticsItem'
import DateIcon from '../icons/DateIcon'
import AddressIcon from '../icons/AddressIcon'
import { useRouter } from 'next/navigation'

function EventLogistics({ data }) {
  const { date, location, image, imageAlt } = data
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const addressText = location.replace(', ', '\n')

  const router = useRouter()
  const goToList = () => {
    router.push('/event-page')
  }

  return (
    <section className="shadow-btnShadow rounded-md bg-eventBg p-8 max-w-3xl w-4/5 -my-12 mx-auto text-white flex justify-between gap-4 flex-col items-center md:p-10 md:-my-20rem md:gap-12rem md:flex-row md:items-stretch md:justify-evenly md:w-[fit-content] md:gap-14">
      <div
        className="w-40 h-40 rounded-full overflow-hidden border-4 border-solid border-white cursor-pointer md:w-60 md:h-60"
        onClick={goToList}
      >
        <img src={`/${image}`} alt={imageAlt} className="w-40 h-40 object-cover md:w-60 md:h-60" />
      </div>
      <ul className="flex gap-8 justify-center items-center flex-col md:items-start">
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address className="whitespace-pre">{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}

export default EventLogistics
