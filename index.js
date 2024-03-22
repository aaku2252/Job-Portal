import express from "express";
import ejs from "ejs";
import path from "path";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "view"));

app.get("/", (req, res) => {
    res.render("userLayout.ejs");
});
app.get("/recruit", (req, res) => {
    res.render("recruiterLayout.ejs");
});

export { app };
