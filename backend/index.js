import Express from "express";
import mysql from "mysql";
import cors from "cors";

const app = Express();
app.use(Express.json());
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "janith1999",
    database: "books",
});

app.get("/", (req, res, next) => {
    res.json("Hello this is the backend");
});

app.get("/books", (req, res, next) => {
    const q = "SELECT * FROM bookset";
    db.query(q, (error, data) => {
        if (error) {
            return res.json(error);
        }
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO bookset(`title`, `desc`, `price`, `cover`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Backend is connected.");
});
