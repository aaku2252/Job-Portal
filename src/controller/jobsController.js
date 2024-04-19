import JobData from "../model/jobsModel.js";

export default class JobController {
    static getJobs() {
        return JobData.getJobData();
    }
}
