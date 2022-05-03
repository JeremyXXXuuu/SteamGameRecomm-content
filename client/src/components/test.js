import React, { useState } from "react";
import * as api from "../api/index.js";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
function Test() {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const { data, error } = useSWR(
    `http://localhost:5000/recom?page=${page}`,
    fetcher
  );
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
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
  console.log(data.docs[0]);
  return (
    // <div>
    //   <h1>{data.docs[0].name}</h1>
    //   <button onClick={getGame}>test</button>;)
    // </div>

    <div>
      {data.docs.map((game) => {
        return <div className=""></div>;
      })}
    </div>
  );
}

export default Test;
