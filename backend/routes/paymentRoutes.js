const express = require("express");
const {
  createPaymentOrder,
  verifyWebhook,
  verifyPayment,
} = require("../controllers/paymentController");

const router = express.Router();

router.post("/create-order", createPaymentOrder);
router.post("/webhook", verifyWebhook);
router.get("/verify/:orderId", verifyPayment);

module.exports = router;