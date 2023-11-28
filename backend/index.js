import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();


const db = mysql.createConnection({
  host:"localhost",
  user: "root",
  password:"Zx-cv-09-87-vc-xz",
  database:"sklad_db"
});

app.use(express.json());

app.use(cors())

app.get("/", (req, res) => {  //проверка подключения к бэку
  res.json("hello this is a backend!");
}); 



app.get("/clients", (req, res) => {   //вывод данных из бд
  const q = "SELECT * FROM clients"
  db.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data);
  })
});


app.post ("/clients", (req, res) => {  //добавление данных в бд
  const q = "INSERT INTO clients(`first_name`, `second_name`,`name_project`) VALUES (?)"
  const values = ["Ksenia", "Gumannikova", "Komus"];
  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Client has been created!");
  })
})





app.listen(8800, ()=> {
  console.log('Connected to backend!');
});