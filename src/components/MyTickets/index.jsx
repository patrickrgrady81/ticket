import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TicketCard from '../TicketCard';

function MyTickets() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      setData(persons);
      console.log(persons);
    })
  },[]);

  return (
    <div>    
      {data.map((person) => {
        return <TicketCard person={person}/>
      })}
    </div>
  )
}

export default MyTickets