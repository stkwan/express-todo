// CORS preflight OPTIONS request
const handlePreflight = function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "https://safe-bastion-78041-32acd1b2973d.herokuapp.com"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header("Access-Control-Allow-Headers", "Content-Type,Accept,X-Custom-Header");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();
};

module.exports = handlePreflight;