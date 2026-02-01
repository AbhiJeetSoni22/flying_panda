import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import alertRoutes from "./routes/alertRoute.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(logger);

app.use(
  cors({
    origin:[ "http://localhost:5173","https://flying-panda-self.vercel.app"],
  }),
);
// routes
app.use("/alerts", alertRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// error handler (ALWAYS last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
