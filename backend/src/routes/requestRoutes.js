const express = require("express");

const {

    createRequest,
    getRequests,
    updateRequestStatus,
    deleteRequest

} = require("../controllers/requestController");

const protect =
    require("../middleware/authMiddleware");

const router = express.Router();


// CREATE REQUEST
router.post("/", protect, createRequest);


// GET ALL REQUESTS
router.get("/", protect, getRequests);


// UPDATE REQUEST STATUS
router.put("/:id", protect, updateRequestStatus);


// DELETE REQUEST
router.delete("/:id", protect, deleteRequest);


module.exports = router;