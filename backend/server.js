import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

const app = express();
const port = 5000;
const saltRounds = 7;
dotenv.config();

app.use(cors());
app.use(express.json());

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.get("/test", (req, res) => {
  res.json("working");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = $1",
    [username],
    (err, dbRes) => {
      if (err) {
        console.log("DB error:", err.stack);
        return res.status(500).json(false);
      }

      if (dbRes.rows.length === 0) {
        res.json({ msg: "username not found", state: false });
      } else {
        if (dbRes.rows[0].password === password) {
          res.json({ msg: "correct password", state: true });
        } else {
          res.json({ msg: "Wrong password", state: false });
        }
      }
    }
  );
});

app.post("/register", (req, res) => {
  const { newUser, newPw } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = $1",
    [newUser],
    (err, regRes) => {
      if (err) {
        console.log("DB error:", err.stack);
        return res.status(500).json(false);
      }

      if (regRes.rows.length > 0) {
        res.send({ message: "username already exists", state: false });
      } else {
        bcrypt.hash(newPw, saltRounds, async (err, hash) => {
          if (err) {
            console.log("error hashinhh ", err);
          } else {
            await db.query(
              "INSERT INTO users (username,password) VALUES ($1, $2)",
              [newUser, hash],
              (err2) => {
                if (err2) {
                  console.log("Insert error:", err2.stack);
                  return res.status(500).json({ state: false });
                } else {
                  res.send({
                    message: "User Registerd Successfully",
                    state: true,
                  });
                }
              }
            );
          }
        });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
