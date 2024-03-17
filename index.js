import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello this is home page");
});

export { app };
