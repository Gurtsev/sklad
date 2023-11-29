import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [client, setClient] = useState({
    first_name: "",
    second_name: "",
    name_project: "",
  });

  const navigate = useNavigate();

  const location = useLocation();

  const clientId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/clients/" + clientId, client);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(client);

  return (
    <div className="form">
      <h1>Update the client</h1>
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
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
