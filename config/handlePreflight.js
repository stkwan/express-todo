// CORS preflight OPTIONS request
const handlePreflight = function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "https://todo-mern-e9x5vecpc-stkwan.vercel.app"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header("Access-Control-Allow-Headers", "Content-Type,Accept,X-Custom-Header");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();
};

module.exports = handlePreflight;