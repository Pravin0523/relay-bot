const { TwilioWhatsAppAdapter } = require('@botbuildercommunity/adapter-twilio-whatsapp');
const bot = require('./bot')

const whatsAppAdapter = new TwilioWhatsAppAdapter({
    accountSid: process.env.TWILIO_ACCOUNT_SID, // Account SID
    authToken: process.env.TWILIO_AUTH_TOKEN, // Auth Token
    phoneNumber: process.env.TWILIO_PHONE_NUMBER, // The From parameter consisting of whatsapp: followed by the sending WhatsApp number (using E.164 formatting)
    endpointUrl: process.env.TWILIO_ENDPOINT_URL // Endpoint URL you configured in the sandbox, used for validation
});

const whatsappService = (req, res) => {
    whatsAppAdapter.processActivity(req, res, async (context) => {
        // Route to main dialog.
        await bot.run(context);
    });
}

module.exports = whatsappService