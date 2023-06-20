const { ActivityHandler, ActivityTypes } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            await context.sendActivity(`You said '<i>${context.activity.text}</i>'`)

            await next()
        })
    }

}

module.exports = EchoBot