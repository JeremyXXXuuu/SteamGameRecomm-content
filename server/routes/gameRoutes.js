const express = require("express");
const router = express.Router();

const {
  getGame,
  setGame,
  updateGame,
} = require("../controllers/gameController");

const { protect } = require("../middleware/authMiddleware");
router
  .route("/")
  .get(protect, getGame)
  .post(protect, setGame)
  .put(protect, updateGame);
module.exports = router;
