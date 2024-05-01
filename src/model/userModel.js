import fs from "fs";
const filePath = new URL("../../public/user/userdata.json", import.meta.url);
export default class UserModel {
    static userLoginCheck(email, password) {
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
        console.log(email, password);
        let matched = false;
        data.forEach((element) => {
            console.log(element.email, element.password);
            if (element.email === email && element.password === password) {
                console.log("user details matched.");
                matched = true;
                return;
            }
        });
        return matched;
    }
}
