import app from "./app";
import "./database";

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
