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

function generateRandomID() {
  const randomSuffix = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
  const paddedSuffix = String(randomSuffix).padStart(4, "0"); // Ensure the suffix has at least 4 digits
  return `EPCS${paddedSuffix}`;
}
//nursery 1 route
app.get("/nursery1", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to nursery1
app.post("/nursery1", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/nursery1/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/nursery1/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/nursery1/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//route for nursery 2
app.get("/nursery2", (req, res) => {
  const sql = "SELECT * FROM nursery2students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/nursery2", (req, res) => {
  const insertSql = "INSERT INTO nursery2students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/nursery2/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/nursery2/update/:customID", (req, res) => {
  const sql = "UPDATE nursery2students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/nursery2/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery2students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//KG 1 route
app.get("/kg1", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/kg1", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/kg1/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/kg1/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/kg1/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//KG 2 route
app.get("/kg2", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/kg2", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/kg2/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/kg2/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/kg2/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 1 route
app.get("/basic1", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic1", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic1/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic1/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic1/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 2 route
app.get("/basic2", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic2", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic2/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic2/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic2/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 3 route
app.get("/basic3", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic3", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic3/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic3/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic3/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 4 route
app.get("/basic4", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic4", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic4/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic4/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic4/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
//Basic 5 route
app.get("/basic5", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic5", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic5/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic5/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic5/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 6 route
app.get("/basic6", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic6", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic6/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic6/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic6/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 7 route
app.get("/basic7", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic7", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic7/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic7/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic7/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 8 route
app.get("/basic8", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic8", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic8/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic8/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic8/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 9 route
app.get("/basic9", (req, res) => {
  const sql = "SELECT * FROM nursery1students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
// Add a new student to kg1
app.post("/basic9", (req, res) => {
  const insertSql = "INSERT INTO nursery1students SET ?";
  const customID = generateRandomID();
  const values = { ...req.body, customID };

  db.query(insertSql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic9/view/:customID", (req, res) => {
  const sql = "SELECT * FROM nursery1students WHERE customID = ?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic9/update/:customID", (req, res) => {
  const sql = "UPDATE nursery1students SET ? WHERE customID =?";
  const customID = req.params.customID;
  const values = req.body;
  db.query(sql, [values, customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic9/delete/:customID", (req, res) => {
  const sql = "DELETE FROM nursery1students WHERE customID =?";
  const customID = req.params.customID;
  db.query(sql, [customID], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});