import express from "express";
import { router } from "./routes/image.js";
const server = express();

server.get('/', (req, res) => { res.send('Running') })

server.use(express.json());
server.use(router)

server.listen(1337, () => console.log("Running"));