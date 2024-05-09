import JobModel from "../model/jobsModel.js";
import UserModel from "../model/userModel.js";

export default class UserController {
  static homeJobPage(req, res) {
    const jobs = JobModel.getJobData();
    res.render("userContent", {
      layout: "userLayout",
      jobs: jobs,
      login: true,
    });
  }
  static loginPage(req, res) {
    res.render("login.ejs", {
      layout: "userLayout.ejs",
      wrongUser: false,
    });
  }
  static signupPage(req, res) {
    res.render("signup.ejs", {
      layout: "userLayout.ejs",
      err: null,
    });
  }
  static loginUser(req, res) {
    const { email, password } = req.body;
    const userCheck = UserModel.userLoginCheck(email, password);
    console.log(userCheck);
    if (userCheck) {
      req.session.email = email;
      res.redirect("/");
    } else {
      res.render("login.ejs", {
        layout: "userLayout.ejs",
        wrongUser: !userCheck,
      });
    }
  }
  static signupUser(req, res) {
    const result = UserModel.userSignup(req.body);
    console.log("result", result);
    if (!result.action) {
      return res.render("signup.ejs", {
        layout: "userLayout.ejs",
        err: result.msg,
      });
    }
    req.session.email = email;
    res.redirect("/");
  }
  static logoutUser(req, res) {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      } else {
        res.redirect("/");
      }
    });
  }
}
