import express from "express";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routers/indexRouter.js";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRoutes);
app.use("/", express.static(join(__dirname, "public")));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is listening at", PORT);
})