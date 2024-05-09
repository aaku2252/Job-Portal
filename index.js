import express, { urlencoded } from "express";
import ejs from "ejs";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import dotenv from "dotenv";

//> controller files import
import UserController from "./src/controller/userController.js";
import JobController from "./src/controller/jobController.js";
//> middleware files import
import validateRequest from "./src/middleware/validationMIddleware.js";
import auth from "./src/middleware/authMiddleware.js";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(
  session({
    secret: process.env.key,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

app.use(ejsLayouts);
app.use("/node_modules", express.static("node_modules"));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "view"));

app.get("/", UserController.homeJobPage);
app.post("/liked/:id", JobController.likedJobs);
app.post("/unLiked/:id", JobController.unLikedJobs);

app.get("/login", UserController.loginPage);
app.get("/signup", UserController.signupPage);
app.get("/profile");

app.post("/login", UserController.loginUser);
app.post("/logout", UserController.logoutUser);
app.post("/signup", validateRequest, UserController.signupUser);

export { app };
