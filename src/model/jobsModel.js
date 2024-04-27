import fs from "fs";

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

    static setLikedJobs(id) {
        const filePath = new URL(
            "../../public/jobdata/liked.json",
            import.meta.url
        );
        const liked = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        if (!liked.includes(id)) {
            liked.push(id);
            fs.writeFileSync(filePath, JSON.stringify(liked));
        }
    }

    static removeLikedJob(id) {
        const filePath = new URL(
            "../../public/jobdata/liked.json",
            import.meta.url
        );
        const liked = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        if (liked.includes(id)) {
            const newLiked = liked.filter((x) => x !== id);
            fs.writeFileSync(filePath, JSON.stringify(newLiked));
        }
    }
}
