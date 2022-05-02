import React from "react";
import * as api from "../api/index.js";
function Test() {
  const getGame = () => {
    api
      .getAll()
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
        console.log("can't get game");
      });
  };
  return (
    <div>
      <button onClick={getGame}>test</button>;)
    </div>
  );
}

export default Test;
