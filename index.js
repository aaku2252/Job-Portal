import express, { urlencoded } from "express";
import ejs from "ejs";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//> controller files import
import UserController from "./src/controller/userController.js";
import JobController from "./src/controller/jobController.js";
//> middleware files import
import validateRequest from "./src/middleware/validationMIddleware.js";
import auth from "./src/middleware/authMiddleware.js";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();
app.use(
  session({
    secret: process.env.key,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 3600 * 24 * 60 * 60,
    },
  }),
);

app.use(ejsLayouts);
app.use("/node_modules", express.static("node_modules"));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "view"));

app.get("/", JobController.homeJobPage);
app.post("/liked/:id", JobController.likedJobs);
app.post("/unLiked/:id", JobController.unLikedJobs);

app.get("/login", UserController.loginPage);
app.get("/signup", UserController.signupPage);
app.get("/profile", auth);

app.post("/login", UserController.loginUser);
app.post("/logout", UserController.logoutUser);
app.post("/signup", validateRequest, UserController.signupUser);

export { app };
