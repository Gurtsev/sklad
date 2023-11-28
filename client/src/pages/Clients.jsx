import React, { useEffect, useState } from "react";
import axios from 'axios'
const Clients = () => {

  const [clients, setClients] = useState([])

  useEffect(() => {
    const fetchAllClients = async () => {
      try {
        const res = await axios.get("http://localhost:8800/clients")
        setClients(res.data);
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllClients();
  }, [])

  return (
    <h1>Gurtsev</h1>
    <div className="clients">
      {books.map(client=>(
        <div className="client"></div>
      ))}
    </div>
  )
}

export default Clients