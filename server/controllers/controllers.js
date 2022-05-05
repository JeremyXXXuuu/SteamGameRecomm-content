import express from "express";
import mongoose from "mongoose";
import GameMessage from "../models/gameMessage.js";
import RecomMessage from "../models/gameRecom.js";
import axios from "axios";
const router = express.Router();

// export const getPosts = async (req, res) => {
//   try {
//     const gameMessage = await GameMessage.find();

//     res.status(200).json(gameMessage);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const getGames = async (req, res) => {
//   try {
//     const recomMessage = await RecomMessage.find();

//     res.status(200).json(recomMessage);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

export const getGames = async (req, res) => {
  const { page, name } = req.query;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  try {
    const limit = 9;
    const recomMessage = await RecomMessage.paginate(condition, {
      limit,
      page,
    });
    res.status(200).json(recomMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGame = async (req, res) => {
  const { id } = req.params;
  try {
    const recomMessage = await RecomMessage.find({ app_id: id });

    let recom = recomMessage[0].recomm_id.split(",");
    const baseUrl = "https://store.steampowered.com/app/";

    recom = recom.map((element) => {
      return String(baseUrl + element);
    });
    // console.log(recom);
    res.status(200).json(recomMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRecomm = async (req, res) => {
  const { id } = req.params;
  var recomGames = [];

  try {
    const recomMessage = await RecomMessage.find({ app_id: id });
    let recom = recomMessage[0].recomm_id.split(",");
    recom = recom.map((element) => {
      return Number(element);
    });
    console.log(recom);

    await Promise.all(
      recom.map(async (r) => {
        const recomGame = await RecomMessage.find({ app_id: r });
        var a = recomGame[0];

        recomGames.push(a);
      })
    );

    console.log(recomGames);
    res.status(200).json(recomGames);
  } catch (error) {}
};

export const getDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://store.steampowered.com/api/appdetails?appids=${id}&cc=us`
    );
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const createRecom = async (req, res) => {
  const { app_id, url, name, recom } = req.body;
  const newRecomMessage = new RecomMessage({ app_id, url, name, recom });
  try {
    await newRecomMessage.save();
    res.status(201).json(newRecomMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
