import JobModel from "../model/jobsModel.js";

export default class UserController {
    static homeJobPage(req, res) {
        const jobs = JobModel.getJobData();
        res.render("userContent", {
            layout: "userLayout",
            jobs: jobs,
        });
    }
}
