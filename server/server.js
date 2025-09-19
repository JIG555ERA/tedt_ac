import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "../routers/routers.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/test", router);

// ✅ Vercel needs a default export
export default app;
