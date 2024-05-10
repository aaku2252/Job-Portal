import JobModel from "../model/jobsModel.js";

export default class JobController {
    static likedJobs(req, res) {
        console.log(req.sessionStore);
        JobModel.setLikedJobs(req);
        res.status(200).send("Job removed from wishlist successfully.");
    }

    static unLikedJobs(req, res) {
        JobModel.removeLikedJob(req);

        res.status(200).send("Job removed from wishlist successfully.");
    }
}
