import mongoose from "mongoose";
const ObjectId = mongoose.ObjectId;
const recomSchema = mongoose.Schema(
  {
    id: ObjectId,
    url: String,
    types: String,
    app_id: Number,
    name: String,
    recomm_id: String,
  },
  { collection: "steam_games2_recommid" }
);

// var RecomMessage = mongoose.model("Recom_tests", recomSchema);
var RecomMessage = mongoose.model("steam_games2_recommid", recomSchema);
export default RecomMessage;
