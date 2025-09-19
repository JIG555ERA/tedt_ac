// server/api/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import serverless from "serverless-http";
import router from "../routers/routers.js";   // ✅ default import

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/test", router);

export const handler = serverless(app);
