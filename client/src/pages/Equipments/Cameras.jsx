import React, { useEffect, useState } from "react";
import axios from "axios";
const Cameras = () => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    // Получение камер из БД
    const fetchAllCameras = async () => { 
      try {
        const res = await axios.get("http://localhost:8800/cameras");
        setCameras(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCameras();
  }, []);
  const handleOrder = () => {
    //добавление в корзину
    console.log("Good answer");
  };
  return (
    <div className="cameras_container">
      <div className="cameras">
        {cameras.map((camera) => (
          <div className="camera" key={camera.id}>
            <h1>{camera.camera_name}</h1>
            <p>{camera.serial_number}</p>
            <p>{camera.equipment}</p>
            <button className="order" onClick={() => handleOrder(camera.id)}>
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cameras;
