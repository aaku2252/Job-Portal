import { body, validationResult } from "express-validator";
const validateRequest = async (req, res, next) => {
  const rules = [
    body("first_name")
      .notEmpty()
      .withMessage("First name is required. Please fill."),
    body("last_name")
      .isLength({ min: 5 })
      .withMessage("Last Name is required. Please fill the data."),
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email address."),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Minimum length required is 6."),
  ];
  await Promise.all(rules.map((rule) => rule.run(req)));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("signup.ejs", {
      layout: "userLayout.ejs",
      err: errors.array()[0].msg,
    });
  }
  next();
};
export default validateRequest;
