import Link from 'next/link'

export default function Button({ link, children, id }) {
  return (
    <Link
      href={link}
      className="block no-underline cursor-pointer bg-eventBg2 border border-solid border-eventBg2 rounded-lg text-white py-2 px-4 text-center shadow-btnShadow hover:bg-eventBg hover:border-eventBg"
    >
      {children}
    </Link>
  )
}
