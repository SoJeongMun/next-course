export default function ErrorAlert({ children }) {
  return (
    <div className="mt-10 my-6 mx-auto py-4 px-8 w-[90%] max-w-2xl bg-eventBg text-white font-bold text-2xl text-center rounded-md">
      {children}
    </div>
  )
}
