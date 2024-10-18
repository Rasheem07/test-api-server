import express from "express";

const NODE_PORT = process.env.NODE_PORT;
const HOSTNAME = "my-project";

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${
      req.url
    } - Handled by ${HOSTNAME}`
  );
  next();
});

app.get("/api/users", (req, res) => {
  return res.json(["WittCepter", "Mike", "WittCode", "Spencer"]);
});

app.listen(NODE_PORT, () => {
  console.log(`Server running at ${NODE_PORT}`);
});
