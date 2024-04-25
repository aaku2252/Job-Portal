import express from "express";
import ejs from "ejs";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

//> controller files import
import UserController from "./src/controller/userController.js";

const app = express();

app.use(express.static("public"));

app.use(ejsLayouts);
app.use("/node_modules", express.static("node_modules"));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "view"));

app.get("/", UserController.homeJobPage);
app.get("/recruit", (req, res) => {
    res.render("recruiterContent", {
        layout: "recruiterLayout",
    });
});

export { app };
