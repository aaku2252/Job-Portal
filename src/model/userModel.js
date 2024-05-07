import fs from "fs";
import { v4 as id } from "uuid";

console.log();
const filePath = new URL("../../public/user/userdata.json", import.meta.url);
export default class UserModel {
    static userLoginCheck(email, password) {
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
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
    static userSignup(val) {
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
        let result = { action: true, msg: "" };
        let notification = false;
        if (val.push_notification) {
            notification = true;
        }

        if (data.length != 0) {
            data.forEach((element) => {
                if (element.email === val.email) {
                    result = {
                        action: false,
                        msg: "This email already exists.",
                    };
                    return;
                }
            });
        }
        if (result.action) {
            data.push({
                id: id(),
                image: val.image,
                first_name: val.first_name,
                last_name: val.last_name,
                email: val.email,
                address: val.address,
                city: val.city,
                state: val.state,
                pin_code: val.pin_code,
                about: val.about,
                password: val.password,
                push_notification: notification,
            });
            fs.writeFile(filePath, JSON.stringify(data), (err, file) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("User created.");
                }
            });
        }

        return result;
    }
}
