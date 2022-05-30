"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: __dirname + './../../.env' }); // starts from 'dist' folder
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
app.post('/api/hello', (req, res) => {
    console.log("hi there");
    res.end();
});
app.get('/', (req, res) => {
    console.log("got main");
    res.sendFile(path_1.default.join(__dirname, '../../client/build/index.html'));
});
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
