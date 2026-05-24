import express from "express";
import cors from "cors";
import "dotenv/config";
import dns from "dns";

import connectDb from "./config/mongodb.js";
import userRouter from "./Routes/userRoutes.js";
import productRouter from "./Routes/productRoute.js";
import cartRouter from "./Routes/cartRoute.js";
import orderRouter from "./Routes/orderRoute.js";

// DNS Fix
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Database Connection
connectDb();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
