const path = require("path");
const router = require("express").Router();
const signInRoutes = require("./api/signIn");

// API Routes
router.use("/", signInRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../react-space-cats/public/index.html"));
});

module.exports = router;