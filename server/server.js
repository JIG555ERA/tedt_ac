import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routers/routers.js";
import storeageRouter from "./routers/storeageRouter.js";
import { MONGO_URI } from './constants/constant.js'
import compression from "compression";

const app = express();
app.use(cors({origin: "https://myindiaventures.com"}));
app.use(bodyParser.json());
app.use(compression())

mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 30000 }).then(() => {
    console.log(`DB connected`)
})
.catch(() => {
    console.log(`Failed to connect to DB ${MONGO_URI}`)
})

app.use("/todo", router);
app.use("/storage", storeageRouter)

export default app;
// local hosting for test
// app.listen(5000, () => {
//     console.log(`server started at http://localhost:5000/`);
// });