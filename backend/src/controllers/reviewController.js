const db =
  require("../config/db");

// ==========================
// CREATE REVIEW
// ==========================

const createReview = (
  req,
  res
) => {

  try {

    const {

      name,
      review,
      rating

    } = req.body;

    const query = `

      INSERT INTO reviews
      (name, review, rating)

      VALUES (?, ?, ?)

    `;

    db.query(

      query,

      [

        name,
        review,
        rating

      ],

      (error, result) => {

        if (error) {

          console.log(error);

          return res.status(500).json({

            message:
              "Failed to submit review"

          });

        }

        res.status(201).json({

          id: result.insertId,

          name,
          review,
          rating

        });

      }

    );

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Server Error"

    });

  }

};

// ==========================
// GET REVIEWS
// ==========================

const getReviews = (
  req,
  res
) => {

  try {

    const query = `

      SELECT *
      FROM reviews

      ORDER BY created_at DESC

    `;

    db.query(

      query,

      (error, results) => {

        if (error) {

          console.log(error);

          return res.status(500).json({

            message:
              "Failed to fetch reviews"

          });

        }

        res.json(results);

      }

    );

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message:
        "Server Error"

    });

  }

};

module.exports = {

  createReview,
  getReviews

};