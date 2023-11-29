import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [client, setClient] = useState({
    first_name: "",
    second_name: "",
    name_project: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/clients", client);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(client);

  return (
    <div className="form">
      <h1>Add new client</h1>
      <input
        type="text"
        placeholder="first name"
        onChange={handleChange}
        name="first_name"
      />
      <input
        type="text"
        placeholder="second name"
        onChange={handleChange}
        name="second_name"
      />
      <input
        type="text"
        placeholder="name project"
        onChange={handleChange}
        name="name_project"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
