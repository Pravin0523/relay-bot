const { CloudAdapter, ConfigurationServiceClientCredentialFactory, ConfigurationBotFrameworkAuthentication } = require('botbuilder');
const bot = require('./bot')

const credentialsFactory = new ConfigurationServiceClientCredentialFactory({
    MicrosoftAppId: process.env.BOT_ID,
    MicrosoftAppPassword: process.env.BOT_PASSWORD,
});

const botFrameworkAuthentication = new ConfigurationBotFrameworkAuthentication(
    {},
    credentialsFactory
);

const adapter = new CloudAdapter(botFrameworkAuthentication);
adapter.onTurnError = async (context, error) => {
    // This check writes out errors to console log .vs. app insights.
    console.error(`\n [onTurnError]: ${error}`);
    // Send a message to the user
    await context.sendActivity(`Oops. Something went wrong!`);
};

const botService = (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        // Route to main dialog.
        await bot.run(context);
    });
}

module.exports = botService;