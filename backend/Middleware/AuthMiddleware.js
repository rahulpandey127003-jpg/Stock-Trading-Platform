const jwt = require("jsonwebtoken");
const User = require("../model/UsersModel");

module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ success: false });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false });
  }
};
