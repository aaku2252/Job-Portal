import fs from "fs";

export default class JobModel {
  static getJobData() {
    const filePath = new URL(
      "../../public/jobdata/MOCK_DATA.json",
      import.meta.url,
    );
    return JSON.parse(
      fs.readFileSync(filePath, {
        encoding: "utf8",
      }),
    );
  }

  static getLikedJobs() {
    const filePath = new URL(
      "../../public/jobdata/liked.json",
      import.meta.url,
    );
    return JSON.parse(
      fs.readFileSync(filePath, {
        encoding: "utf8",
      }),
    );
  }

  static setLikedJobs(req) {
    const id = req.params.id;
    const filePath = new URL(
      "../../public/jobdata/liked.json",
      import.meta.url,
    );

    const liked = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    if (req.session.email != undefined) {
      if (liked.hasOwnProperty(req.session.email)) {
        liked[req.session.email].push(id);
      } else {
        liked[req.session.email] = [id];
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(liked));
  }

  static removeLikedJob(req) {
    const id = req.params.id;

    const filePath = new URL(
      "../../public/jobdata/liked.json",
      import.meta.url,
    );
    const liked = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (liked[req.session.email].includes(id)) {
      const newLiked = liked[req.session.email].filter((x) => x !== id);
      liked[req.session.email] = newLiked;
      fs.writeFileSync(filePath, JSON.stringify(liked));
    }
  }
}
