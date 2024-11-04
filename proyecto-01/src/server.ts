import createApp from "./app";
import handleMongoConnection from "./db";

const app = createApp();

handleMongoConnection();

// START SERVER
app.listen(8080, () => {
  console.log("Server listening to port 8080.");
});
