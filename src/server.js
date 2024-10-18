import express from "express";
import crypto from 'crypto';

const NODE_PORT = process.env.NODE_PORT;
const unique_id = crypto.randomUUID();

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${
      req.url
    } - Handled by ${unique_id}`
  );
  next();
});

app.get("/api/users", (req, res) => {
  return res.json(["WittCepter", "Mike", "WittCode", "Spencer"]);
});

app.listen(NODE_PORT, () => {
  console.log(`Server running at ${NODE_PORT}`);
});
