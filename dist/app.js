"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./logger");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('GET request is working here');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return logger_1.logger.info(`${process.env.NODE_ENV || ''} server is listening on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map