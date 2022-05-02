import { FETCH_ALL } from "./actionTypes";
import * as api from "../api/index.js";

export const getGames = () => async (dispatch) => {
  try {
    const { data } = await api.getAll();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const findGamesByName = (name) => async (dispatch) => {
  try {
    const { data } = await api.findByGameName(name);

    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
