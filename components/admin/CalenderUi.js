import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import CardUI from '../ui/Card'

function CalendarUi() {
  const [value, onChange] = useState(new Date())

  return (
    <CardUI>
      <Calendar
        className={'react-calendar'}
        onChange={onChange}
        value={value}
      />
    </CardUI>
  )
}

export default CalendarUi
