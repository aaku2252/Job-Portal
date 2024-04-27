import express, { urlencoded } from "express";
import ejs from "ejs";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

//> controller files import
import UserController from "./src/controller/userController.js";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(ejsLayouts);
app.use("/node_modules", express.static("node_modules"));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "view"));

app.get("/", UserController.homeJobPage);
app.post("/liked/:id", UserController.likedJobs);
app.post("/unLiked/:id", UserController.unLikedJobs);

app.get("/login", UserController.login);
app.get("/signup", UserController.signup);

export { app };
