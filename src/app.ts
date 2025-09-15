import express from "express";
import ServerlessHttp from "serverless-http";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World", ip: req.ip });
});

export const handler = ServerlessHttp(app);
