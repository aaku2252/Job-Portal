const auth = (req, res, next) => {
  if (!req.session.email) {
    return res.redirect("/login");
  }
  next();
};
export default auth;
