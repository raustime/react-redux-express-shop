const express = require('express')
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require('../controllers/productController')
const router = express.Router()
const { protect, admin } = require('../middleware/authMiddleware')

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/top').get(getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, createProductReview)

module.exports = router
