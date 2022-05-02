import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const gameSchema = mongoose.Schema({
  _id: ObjectId,
  url: String,
  types: String,
  name: String,
  recent_reviews: String,
  all_reviews: String,
  release_date: String,
  popular_tags: String,
  genre: String,
});

var GameMessage = mongoose.model("steam_games2", gameSchema);

export default GameMessage;
