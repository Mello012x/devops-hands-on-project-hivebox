import express from "express";
import { getHome, getTemperature, getVersion } from "./routes/routes.mjs";

export const app = express();

app.get("/", getHome);

app.get("/version", getVersion);

app.get("/temperature", getTemperature);
