const mongoose = require("mongoose");
const app = require("./app");

const MONGO_URL =
  "mongodb+srv://matthewBates:cXRY2wZbvaLqLO2D@cluster0.s4aagm0.mongodb.net/";
const PORT = process.env.PORT || 8001;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

startServer();
