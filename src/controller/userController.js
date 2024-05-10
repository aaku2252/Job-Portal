import UserModel from "../model/userModel.js";

export default class UserController {
  static loginPage(req, res) {
    res.render("login.ejs", {
      layout: "userLayout.ejs",
      wrongUser: false,
      login: false,
    });
  }
  static signupPage(req, res) {
    res.render("signup.ejs", {
      layout: "userLayout.ejs",
      err: null,
      login: false,
    });
  }
  static loginUser(req, res) {
    const { email, password } = req.body;
    const userCheck = UserModel.userLoginCheck(email, password);

    if (userCheck) {
      req.session.email = email;
      res.redirect("/");
    } else {
      res.render("login.ejs", {
        layout: "userLayout.ejs",
        wrongUser: !userCheck,
        login: false,
      });
    }
  }
  static signupUser(req, res) {
    const result = UserModel.userSignup(req.body);

    if (!result.action) {
      return res.render("signup.ejs", {
        layout: "userLayout.ejs",
        err: result.msg,
        login: false,
      });
    }
    req.session.email = email;
    const jobs = JobModel.getJobData();
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
