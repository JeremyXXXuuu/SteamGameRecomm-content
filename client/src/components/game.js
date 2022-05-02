import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api/index.js";
import { useDispatch } from "react-redux";
import { getGames, findGamesByName } from "../actions/games";
import { compose } from "redux";

const Game = () => {
  const initialGameState = {
    id: null,
    app_id: [],
    url: "",
    name: "",
    recomm_id: "",
  };

  const [currentGame, setCurrentGame] = useState(initialGameState);
  const [gameDetails, setGameDetails] = useState("");
  const getGame = (id) => {
    api
      .get(id)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        setCurrentGame(...data);
        // console.log(currentGame);
      })
      .catch((e) => {
        console.log(e);
        console.log("can't get game");
      });
  };

  const getDetails = (gid) => {
    api
      .getGameDetails(gid)
      .then((res) => {
        setGameDetails(res.data[gid].data.detailed_description);
        console.log(res.data[gid].data.detailed_description);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const { id } = useParams();
  useEffect(() => {
    getGame(id);
    getDetails(id);
  }, [id]);

  const baseSteamUrl = "https://store.steampowered.com/api/appdetails";
  const testUrl = "https://store.steampowered.com/api/appdetails?appids=10";

  // const getGamedetails = api.getGamedetails(gameUrlApi);

  return (
    <div>
      <h1>Game Name: {currentGame.name}</h1>
      <h1>Game id: {currentGame.app_id}</h1>
      <h1>Game url: {currentGame.url}</h1>
      <h1>Game recomm: {currentGame.recomm_id}</h1>
      <h1>Game details: {gameDetails}</h1>
      {/* <div>{getGameDetails(currentGame.app_id)}</div> */}
      <div>{getDetails(currentGame.app_id)}</div>
    </div>
  );
};

export default Game;
