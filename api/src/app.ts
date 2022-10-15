import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";

//import routes ej:       import videoRoutes from "./routes/videos.routes"
//app.use esas routes ej: app.use(videoRoutes)
const app = express();

app.set("port", config.PORT || 3001);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
// Para poder entender los cambos de un formulario de un post
app.use(express.urlencoded({ extended: false }));

export default app;
