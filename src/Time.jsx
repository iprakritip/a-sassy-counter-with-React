import React, { useState } from 'react'

const Time = () => {
 let date = new Date();
  const [hours, setHours]=useState(date.getHours());
  // Used ternairy operators to add an extra zero in
  // the minutes when the minute is greater than 10
  const [minutes, setMinutes]= useState((date.getMinutes()<10?'0':'') + date.getMinutes());

  setInterval (function(){
    let date=new Date();
    setHours(date.getHours());
    setMinutes((date.getMinutes()<10?'0':'') + date.getMinutes());
  }, 60000);

  return (
        <p className="time">{hours}:{minutes}</p>
  )
}

export default Time