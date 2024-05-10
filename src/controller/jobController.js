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
  static searchJobs(req, res) {
    const jobs = JobModel.getJobData();
    const login = req.session.email ? true : false;

    // jobs = jobs.filter((x) => {x.});
    res.render("userContent", {
      layout: "userLayout.ejs",
      jobs: jobs,
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
}
