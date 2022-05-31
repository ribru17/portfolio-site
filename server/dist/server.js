"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const nodemailer_1 = __importDefault(require("nodemailer"));
dotenv_1.default.config({ path: __dirname + './../../.env' }); // starts from 'dist' folder
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
console.log(process.env.EMAIL_ADDRESS);
const transporter = nodemailer_1.default.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PW,
    },
    tls: {
        rejectUnauthorized: false
    },
});
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
app.post('/api/hello', (req, res) => {
    console.log("hi there");
    res.end();
});
app.post('/api/contact', (req, res) => {
    const mail = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: `Web message from ${req.body.name}`,
        text: req.body.message
    };
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Failed to send message");
        }
        else {
            res.status(200).send("Successfully sent message");
        }
    });
});
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../client/build/index.html'));
});
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
