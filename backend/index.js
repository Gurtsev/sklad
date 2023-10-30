import express from "express"
import mysql from "mysql"


const app = express();


const db = mysql.createConnection({
  host:"localhost",
  user: "root",
  password:"Zx-cv-09-87-vc-xz",
  database:"sklad_db"
});

app.get("/", (req, res) => {
  res.json("hello this is a backend!");
});


app.get("/clients", (req, res) => {
  const q = "SELECT * FROM clients"
  db.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data);
  })
})




app.listen(8800, ()=> {
  console.log('Connected to backend!');
});