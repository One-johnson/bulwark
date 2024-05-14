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

//KG 1 route
app.get("/kg1", (req, res) => {
  const sql = "SELECT * FROM kg1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.post("/kg1", (req, res) => {
  const sql = "INSERT INTO kg1students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});

app.get("/kg1/view/:id", (req, res) => {
  const sql = "SELECT * FROM kg1students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.put("/kg1/update/:id", (req, res) => {
  const sql = "UPDATE kg1students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.delete("/kg1/delete/:id", (req, res) => {
  const sql = "DELETE FROM kg1students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//KG 2 route
app.get("/kg2", (req, res) => {
  const sql = "SELECT * FROM kg2students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.post("/kg2", (req, res) => {
  const sql = "INSERT INTO kg2students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});

app.get("/kg2/view/:id", (req, res) => {
  const sql = "SELECT * FROM kg2students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.put("/kg2/update/:id", (req, res) => {
  const sql = "UPDATE kg2students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.delete("/kg2/delete/:id", (req, res) => {
  const sql = "DELETE FROM kg2students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 1 route
app.get("/basic1", (req, res) => {
  const sql = "SELECT * FROM basic1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.post("/basic1", (req, res) => {
  const sql = "INSERT INTO basic1students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});

app.get("/basic1/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic1students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.put("/basic1/update/:id", (req, res) => {
  const sql = "UPDATE basic1students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

app.delete("/basic1/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic1students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 2 route
app.get("/basic2", (req, res) => {
  const sql = "SELECT * FROM basic2students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/basic2", (req, res) => {
  const sql = "INSERT INTO basic2students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic2/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic2students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic2/update/:id", (req, res) => {
  const sql = "UPDATE basic2students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic2/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic2students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 3 route
app.get("/basic3", (req, res) => {
  const sql = "SELECT * FROM basic3students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/basic3", (req, res) => {
  const sql = "INSERT INTO basic3students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic3/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic3students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic3/update/:id", (req, res) => {
  const sql = "UPDATE basic3students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic3/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic3students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 4 route
app.get("/basic4", (req, res) => {
  const sql = "SELECT * FROM basic4students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/basic4", (req, res) => {
  const sql = "INSERT INTO basic4students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic4/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic4students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic4/update/:id", (req, res) => {
  const sql = "UPDATE basic4students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic4/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic4students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
