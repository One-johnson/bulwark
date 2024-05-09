const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//running the server
app.listen(3002, () => {
  console.log("Server is running on port 3002");
});

//create database
const db = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "bulwarkdb",
});

//create  ROUTE for register
app.post("/register", (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;

  const SQL = "INSERT INTO users (email, username, password) VALUES (?,?,?)";
  const Values = [sentEmail, sentUserName, sentPassword];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("User inserted successfully!");
      res.send({ message: "User Added!" });
    }
  });
});

//create route for login
app.post("/login", (req, res) => {
  const sentloginUserName = req.body.LoginUserName;
  const sentloginPassword = req.body.LoginPassword;

  const SQL = "SELECT * FROM users WHERE username = ? && password = ? ";
  const Values = [sentloginUserName, sentloginPassword];

  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send({ error: err });
    }
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ message: `Credential don't match!` });
    }
  });
});

app.get("/nursery2", (req, res) => {
  const sql = "SELECT * FROM nursery2students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.post("/nursery2", (req, res) => {
  const sql = "INSERT INTO nursery2students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});

app.get("/nursery2/view/:id", (req, res) => {
  const sql = "SELECT * FROM nursery2students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.put("/nursery2/update/:id", (req, res) => {
  const sql = "UPDATE nursery2students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.delete("/nursery2/delete/:id", (req, res) => {
  const sql = "DELETE FROM nursery2students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});


//nursery 1 route
app.get("/nursery1", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.post("/nursery1", (req, res) => {
  const sql = "INSERT INTO nursery1students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});

app.get("/nursery1/view/:id", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.put("/nursery1/update/:id", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.delete("/nursery1/delete/:id", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
