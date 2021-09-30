const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "test",
});

// Database : test, table: users (id, name, email, mobile, password)

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const password = req.body.password;
  
  console.log(req.body);

  db.query(
    "INSERT INTO users (name, email, mobile, password) VALUES (?,?,?,?)",
    [name, email, mobile, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/useremail", (req, res) => {
  const id = req.body.loginid;
  console.log(id);
  db.query("SELECT * FROM users WHERE (email = ? || mobile = ?) LIMIT 1",[id, id] ,(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.put("/update", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const email = req.body.mobile;
  const name = req.body.name;
  db.query(
    "UPDATE user SET name = ?, email = ?, password = ?  WHERE id = ?",
    [name,email,password, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
