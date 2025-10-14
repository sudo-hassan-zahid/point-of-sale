import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import { setupSwagger } from "./swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("POS Backend API is running...");
});

setupSwagger(app);
app.use("/api/products", productRoutes);

export default app;
