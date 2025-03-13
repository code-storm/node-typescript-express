import express from "express";
import { logger } from "./logger";

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('GET request is working here')
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return logger.info(`${process.env.NODE_ENV || ''} server is listening on http://localhost:${port}`)
});