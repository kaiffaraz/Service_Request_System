const express =
  require("express");

const {

  createReview,
  getReviews

} = require(
  "../controllers/reviewController"
);

const router =
  express.Router();

// CREATE REVIEW
router.post(
  "/",
  createReview
);

// GET REVIEWS
router.get(
  "/",
  getReviews
);

module.exports =
  router;