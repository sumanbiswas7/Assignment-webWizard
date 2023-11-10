import serverless from "serverless-http";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

export const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({
    working: true,
    message: `Hello World`,
    secret: `SECRET: ${process.env.SECRET} 🤫`,
  });
});

export const handler = serverless(app);
