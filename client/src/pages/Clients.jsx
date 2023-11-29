import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchAllClients = async () => {
      try {
        const res = await axios.get("http://localhost:8800/clients");
        setClients(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllClients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/clients/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="clients">
        {clients.map((client) => (
          <div className="client" key={client.id}>
            <h1>{client.first_name}</h1>
            <h1>{client.second_name}</h1>
            <h2>{client.name_project}</h2>
            <button className="delete" onClick={() => handleDelete(client.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${client.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new client</Link>
      </button>
    </div>
  );
};

export default Clients;
