const withAuth = (req, res, next) => {
    if (!req.session.UserID) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;

//   Auth Page makes sure login functionality is up and running, otherwise user cannot progress to dashboard page