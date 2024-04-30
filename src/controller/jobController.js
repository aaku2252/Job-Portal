import JobModel from "../model/jobsModel.js";

export default class JobController {
    static likedJobs(req, res) {
        const id = req.params.id;
        JobModel.setLikedJobs(id);
        res.status(200).send("Job added to wishlist successfully.");
    }
    static unLikedJobs(req, res) {
        const id = req.params.id;
        JobModel.removeLikedJob(id);
        res.status(200).send("Job removed from wishlist successfully.");
    }
}
