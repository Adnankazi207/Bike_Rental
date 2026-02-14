const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const AreaRouter = require("./routes/AreaRoutes");
const BikeRouter = require("./routes/BikeRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
  "/api/payment/webhook",
  express.raw({ type: "application/json" })
);


app.use(
  cors({
    origin: ["http://localhost:5173", "https://bike-rental-frontend-02uq.onrender.com"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS","PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/rentals", require("./routes/RentalRoutes"));
app.use("/api/bikes", BikeRouter);
app.use("/api/areas", AreaRouter);

app.use("/api/customers", require("./routes/CustomerRoutes"));
app.use("/api/bookings", require("./routes/BookingRoutes"));
app.use("/api/availability", require("./routes/AvailablityRoutes"));
app.use("/api/reports", require("./routes/ReportRoutes"));

app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/auth", require("./routes/AuthRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
