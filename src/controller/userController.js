import JobModel from "../model/jobsModel.js";
import UserModel from "../model/userModel.js";

export default class UserController {
    static homeJobPage(req, res) {
        const jobs = JobModel.getJobData();
        const login = req.session.email ? true : false;
        res.render("userContent", {
            layout: "userLayout.ejs",
            jobs: jobs,
            login: login,
        });
    }
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
        console.log(userCheck);
        const jobs = JobModel.getJobData();
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
