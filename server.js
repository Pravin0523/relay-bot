global.XMLHttpRequest = require('xhr2');
global.WebSocket = require('ws');

const express = require("express")
const dotenv = require("dotenv");
const path = require("path")

const {sendMessage, listenMessage } = require("./directline-bot")
// Pravin@bigit
const app = express()
app.use(express.json())

const ENV_FILE = path.join(__dirname, '.env');
dotenv.config({ path: ENV_FILE });

const botService = require("./bot-service");
const whatsappService = require("./whatsapp-service");

// Listen for incoming requests.10.2.0.0/16 24
app.post('/api/messages', (req, res) => {
    console.log("/api/message",req.body)
    // botService(req, res)
    sendMessage()
    res.sendStatus(200)
});

app.post('/api/whatsapp/messages', (req, res) => {
    console.log("/api/whatsapp/messages",req.body)
    whatsappService(req,res)
    
});

app.listen(4000, ()=> {
    listenMessage()
    console.log("Bot server running on port 4000")
})

