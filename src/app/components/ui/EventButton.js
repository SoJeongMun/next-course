import Link from 'next/link'

export default function EventButton({ link, children, onClick }) {
  return (
    <div className="event-btn">
      {link ? <Link href={link}>{children}</Link> : <button onClick={onClick}>{children}</button>}
    </div>
  )
}
