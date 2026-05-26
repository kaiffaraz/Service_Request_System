import express from "express";

const router = express.Router();

// CREATE REQUEST
router.post("/", async (req, res) => {

  try {

    const requestData = req.body;

    console.log(
      "Incoming Request:",
      requestData
    );

    // Later we will save to MongoDB

    res.status(201).json({

      success: true,

      message:
        "Request submitted successfully"

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
        "Server Error"

    });

  }

});

export default router;