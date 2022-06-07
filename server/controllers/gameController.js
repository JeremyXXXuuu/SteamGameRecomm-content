const asyncHandler = require("express-async-handler");

const Game = require("../models/gameModel");
const User = require("../models/userModel");

const getGame = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const game = await Game.find({
    user: req.user.id,
    game_id: id,
  });
  console.log(game[0].score);
  console.log(req.user.id);
  console.log(id);
  res.status(200).json(game);
});

const setGame = asyncHandler(async (req, res) => {
  const { id, score } = req.body;
  if (!id) {
    res.status(400);
    throw new Error("Please add a id field");
  }
  const game = await Game.create({
    user: req.user.id,
    game_id: id,
    score: score,
  });
  res.status(200).json(game);
});

const updateGame = asyncHandler(async (req, res) => {
  const { score } = req.body;
  if (!score) {
    res.status(400);
    throw new Error("Game not found");
  }
  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  var query = {
    user: req.user.id,
    game_id: req.body.id,
  };
  const updatedGame = await Game.findOneAndUpdate(query, {
    $set: { score: score },
  });
  res.status(200).json(updatedGame);
});

module.exports = {
  getGame,
  setGame,
  updateGame,
};
