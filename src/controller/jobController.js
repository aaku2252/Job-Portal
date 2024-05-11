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
    const likedJobs = await JobModel.getLikedJobs();
    const login = req.session.email ? true : false;
    if (!login) {
      return res.redirect("/");
    }
    console.log("search Jobs");
    console.log(likedJobs);
    likedJobs = likedJobs[req.session.email];
    const jobs = JobModel.getJobData();
    let filteredJobs;
    for (let x in likedJobs) {
      for (y in jobs) {
        if (x == y.id) {
          filteredJobs.push(x);
          break;
        }
      }
    }
    console.log(likedJobs);
    // res.render("userContent", {
    //   layout: "userLayout.ejs",
    //   jobs: likedJobs,
    //   login: login,
    // });
  }
  static likedJobs(req, res) {
    JobModel.setLikedJobs(req);
    res.status(200).send("Job added to wishlist successfully.");
  }

  static unLikedJobs(req, res) {
    JobModel.removeLikedJob(req);
    res.status(200).send("Job removed from wishlist successfully.");
  }
}
