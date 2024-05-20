const express = require("express");
const app = express();
const express = require("express");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");

// Set up storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique file names
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// Other required middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Static route to serve uploaded files
app.use('/uploads', express.static('uploads'));

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

//route for nursery 2
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

//Basic 5 route
app.get("/basic5", (req, res) => {
  const sql = "SELECT * FROM basic5students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/basic5", (req, res) => {
  const sql = "INSERT INTO basic5students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic5/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic5students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic5/update/:id", (req, res) => {
  const sql = "UPDATE basic5students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic5/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic5students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 6 route
app.get("/basic6", (req, res) => {
  const sql = "SELECT * FROM basic6students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/basic6", (req, res) => {
  const sql = "INSERT INTO basic6students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic6/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic6students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic6/update/:id", (req, res) => {
  const sql = "UPDATE basic6students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic6/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic6students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 7 route
app.get("/basic7", (req, res) => {
  const sql = "SELECT * FROM basic7students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/basic7", (req, res) => {
  const sql = "INSERT INTO basic7students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic7/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic7students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic7/update/:id", (req, res) => {
  const sql = "UPDATE basic7students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic7/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic7students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 8 route
app.get("/basic8", (req, res) => {
  const sql = "SELECT * FROM basic8students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/basic8", (req, res) => {
  const sql = "INSERT INTO basic8students SET ?";
  const values = req.body;
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic8/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic8students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic8/update/:id", (req, res) => {
  const sql = "UPDATE basic8students SET ? WHERE id =?";
  const id = req.params.id;
  const values = req.body;
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic8/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic8students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

//Basic 9 route
app.get("/basic9", (req, res) => {
  const sql = "SELECT * FROM basic9students";
  db.query(sql, (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.post("/basic9", upload.single("profilePicture"), (req, res) => {
   const { body, file } = req;
  const sql = "INSERT INTO basic9students SET ?";
  const values = { ...body, profilePicture: file ? file.path : null };
  db.query(sql, values, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
});
app.get("/basic9/view/:id", (req, res) => {
  const sql = "SELECT * FROM basic9students WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.put("/basic9/update/:id", upload.single("profilePicture"), (req, res) => {
   const { body, file } = req;
  const sql = "UPDATE basic9students SET ? WHERE id =?";
  const id = req.params.id;
   const values = {
     ...body,
     profilePicture: file ? file.path : body.profilePicture,
   };
  db.query(sql, [values, id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});
app.delete("/basic9/delete/:id", (req, res) => {
  const sql = "DELETE FROM basic9students WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, results) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(results);
  });
});

