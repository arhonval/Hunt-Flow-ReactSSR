function isAuth(req, res, next) {
  const Login = req.session.login;
  if (!Login) {
    return res.redirect('/login');
  }
  next();
}

module.exports = isAuth;
