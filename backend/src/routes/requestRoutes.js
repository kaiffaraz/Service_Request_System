import express from "express";

import {
  createRequest,
  getRequests,
  updateRequestStatus,
  deleteRequest
} from "../controllers/requestController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();


// CREATE REQUEST
router.post("/", protect, createRequest);


// GET ALL REQUESTS
router.get("/", protect, getRequests);


// UPDATE REQUEST STATUS
router.put("/:id", protect, updateRequestStatus);


// DELETE REQUEST
router.delete("/:id", protect, deleteRequest);


export default router;