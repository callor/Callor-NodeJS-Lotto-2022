import express from "express";
const router = express.Router();
const LOTTO_456 = { max: 45, lotto: 6 };

import { shuffle, sort } from "./shuffle.js";

/* GET home page. */
router.get("/", function (req, res, next) {
  const numbers = [];

  for (let i = 0; i < LOTTO_456.max; i++) {
    numbers[i] = i + 1;
  }
  shuffle(numbers);
  const lottos = [...numbers.slice(0, 6)];
  sort(lottos);
  res.render("lotto", { lottos });
});

export default router;
