import JobModel from "../model/jobsModel.js";

export default class JobController {
    static homeJobPage(req, res) {
        const jobs = JobModel.getJobData();
        const login = req.session.email ? true : false;
        res.render("userContent", {
            layout: "userLayout.ejs",
            jobs: jobs,
            login: login,
        });
    }
    static async favouriteJobs(req, res) {
        let likedJobs = await JobModel.getLikedJobs();

        const login = req.session.email ? true : false;
        if (!login) {
            return res.redirect("/login");
        }
        likedJobs = likedJobs[req.session.email];
        const jobs = await JobModel.getJobData();
        let filteredJobs = [];
        for (let x of likedJobs) {
            for (let y of jobs) {
                if (x == y.id) {
                    filteredJobs.push(y);
                    break;
                }
            }
        }
        res.render("userContent", {
            layout: "userLayout.ejs",
            jobs: filteredJobs,
            login: login,
        });
    }
    static likedJobs(req, res) {
        JobModel.setLikedJobs(req);
        res.status(200).send("Job added to wishlist successfully.");
    }

    static unLikedJobs(req, res) {
        JobModel.removeLikedJob(req);
        res.status(200).send("Job removed from wishlist successfully.");
    }
    static searchJobs(req, res) {
        const { role, location, gender } = req.body;
        let jobs = JobModel.getJobData();

        if (role != "") {
            jobs = jobs.filter((x) => x.role == role);
        }

        if (location != "") {
            jobs = jobs.filter((x) => x.location == location);
        }

        if (gender) {
            jobs = jobs.filter((x) => x.gender == gender);
        }

        const login = req.session.email ? true : false;
        res.render("userContent", {
            layout: "userLayout.ejs",
            jobs: jobs,
            login: login,
        });
    }
}
