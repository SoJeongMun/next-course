'use client'

import { useRef } from 'react'
import EventButton from '../ui/EventButton'

export default function EventSearch({ onSearch }) {
  const yearRef = useRef()
  const monthRef = useRef()

  const submitHandler = () => {
    event.preventDefault()

    const selectedYear = yearRef.current.value
    const selectedMonth = monthRef.current.value

    onSearch(selectedYear, selectedMonth)
  }
  return (
    <form
      className="my-8 mx-auto shadow-btnShadow py-4 px-6 bg-white rounded-md w-[90%] max-w-2xl flex justify-between flex-col gap-4 md:flex-row"
      onSubmit={submitHandler}
    >
      <div className="w-full flex gap-8 flex-col md:w-4/5 md:flex-row">
        <div className="event-control">
          <label htmlFor="year" className="font-bold">
            Year
          </label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="event-control">
          <label htmlFor="month" className="font-bold">
            Month
          </label>
          <select id="month" ref={monthRef}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <EventButton>Find 🔍</EventButton>
    </form>
  )
}
