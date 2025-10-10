import { AppInfo } from "../../lib/appInfo.mjs";
import { fetchAndNormalize, normalizeSenseBoxData } from "../utils/functions.mjs";

export function getHome(req, res) {
    res.status(200).send("Welcome to Hivebox.");
}

export function getVersion(req, res) {
    res.status(200).send(`${AppInfo.version}`)
}

export async function getTemperature(req, res) {
    const data = await fetchAndNormalize()
    res.status(200).send(data)
}