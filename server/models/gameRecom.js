const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
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

recomSchema.plugin(mongoosePaginate);

// var RecomMessage = mongoose.model("Recom_tests", recomSchema);
var RecomMessage = mongoose.model("steam_games2_recommid", recomSchema);

module.exports = RecomMessage;
