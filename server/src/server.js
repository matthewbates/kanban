const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://matthewBates:tsJctRcS60AJ1mx8@cluster0.s4aagm0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

startServer();
