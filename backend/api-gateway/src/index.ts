import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => res.send("API Gateway running!"));

app.listen(PORT, () => {
  console.log(`API Gateway running at http://localhost:${PORT}`);
});
