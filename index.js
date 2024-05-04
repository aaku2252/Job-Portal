import express, { urlencoded } from "express";
import ejs from "ejs";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";

//> controller files import
import UserController from "./src/controller/userController.js";
import JobController from "./src/controller/jobController.js";
//> middleware files import
import validateRequest from "./src/middleware/validationMIddleware.js";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(ejsLayouts);
app.use("/node_modules", express.static("node_modules"));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "view"));

app.get("/", UserController.homeJobPage);
app.post("/liked/:id", JobController.likedJobs);
app.post("/unLiked/:id", JobController.unLikedJobs);

app.get("/login", UserController.loginPage);
app.get("/signup", UserController.signupPage);

app.post("/login", UserController.loginUser);
app.post("/signup", validateRequest, UserController.signupUser);

export { app };
