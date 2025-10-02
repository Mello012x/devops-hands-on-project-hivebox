import express from 'express';
import {AppInfo} from '../lib/appInfo.js'


const app = express();
const port = 3000


app.get('/', (req, res) => {
  res.send("Home")
})

app.get('/version', (req, res) => {
  res.send(`${AppInfo.version}`)
})


app.listen(port)
