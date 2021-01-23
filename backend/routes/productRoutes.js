import express from "express";
const router = express.Router();

import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  addProduct,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, addProduct);
router.route("/:id/reviews").put(protect, createProductReview);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
