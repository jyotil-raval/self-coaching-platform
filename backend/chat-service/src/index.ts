import express from "express";

const app = express();
const PORT = 4002;

app.get("/", (req, res) => res.send("Chat Service running!"));

app.listen(PORT, () => {
  console.log(`Chat Service running at http://localhost:${PORT}`);
});
