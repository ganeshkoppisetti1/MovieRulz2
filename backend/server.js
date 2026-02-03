import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import authRoutes from "./routes/authRoutes.js"; 
import showRoute from "./routes/showRoute.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://movierulz2.netlify.app",
  "https://sprightly-florentine-6af0ed.netlify.app",
  "https://steady-beignet-d38893.netlify.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman, etc.

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


app.use(express.json());   
app.use("/uploads", express.static("uploads")); 

connectDB();

app.use("/api/upload", uploadRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/auth", authRoutes); 
app.use("/api/shows", showRoute);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
