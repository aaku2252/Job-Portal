import JobModel from "../model/jobsModel.js";

export default class UserController {
    static homeJobPage(req, res) {
        const jobs = JobModel.getJobData();
        res.render("userContent", {
            layout: "userLayout",
            jobs: jobs,
        });
    }
    static likedJobs(req, res) {
        const id = req.params.id;
        JobModel.setLikedJobs(id);
        res.status(200).send("Job added to wishlist successfully.");
    }
    static unlikedJobs(req, res) {
        const id = req.params.id;

        res.status(200).send("Job removed from wishlist successfully.");
    }
}
