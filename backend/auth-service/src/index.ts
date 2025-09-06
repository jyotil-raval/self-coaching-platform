import express from "express";

const app = express();
const PORT = 4001;

app.get("/", (req, res) => res.send("Auth Service running!"));

app.listen(PORT, () => {
  console.log(`Auth Service running at http://localhost:${PORT}`);
});
