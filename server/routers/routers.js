// server/routers/routers.js
import express from "express";
import { createEvent, createEvents, getAllEvents, getEventByName } from "../controllers/controller.js";

const router = express.Router();

router.post("/createEvent", createEvent);
router.post("/createEvents", createEvents);
router.get("/getEventByName/:username", getEventByName);
router.get("/getAllEvents", getAllEvents);

export default router;
