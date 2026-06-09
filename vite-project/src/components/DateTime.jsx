import React, { useEffect, useState } from 'react'

const DateTIme = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date())
    }, 60000)

    return () => clearInterval(timerId)
  }, [])

  const day = now.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
  const month = now.toLocaleDateString('en-US', { month: 'long' }).toLowerCase()
  const hour = now.getHours() % 12 || 12
  const minute = String(now.getMinutes()).padStart(2, '0')
  const period = now.getHours() >= 12 ? 'PM' : 'AM'
  const formattedDateTime = `${day} ${month} ${hour}:${minute} ${period}`

  return (
    <div>
      <p>{formattedDateTime}</p>
    </div>
  )
}

export default DateTIme
