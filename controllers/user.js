const User = require("./models/user");

exports.signup = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
};
