import fs from "fs";

const likedJobs = [];

export default class JobModel {
    static getJobData() {
        const filePath = new URL(
            "../../public/jobdata/MOCK_DATA.json",
            import.meta.url
        );
        return JSON.parse(
            fs.readFileSync(filePath, {
                encoding: "utf8",
            })
        );
    }

    static setLikedJobs() {}
}
