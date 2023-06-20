// import { DirectLine } from 'botframework-directlinejs';
// For Node.js:
const { DirectLine } = require('botframework-directlinejs');

var directLine = new DirectLine({
    secret: 'waeKOv7yzUk.vUQUyhpgaGeYs171zfjXurvTOlwrU2jsbzRhe-oa21M',
    conversationStartProperties: { /* optional: properties to send to the bot on conversation start */
        locale: 'en-US'
    }
});

const sendMessage = () => {
    directLine.postActivity({
        from:{ id: "user123", name: "User"},
        type: "message",
        text: "Hey!"
    }).subscribe(
        id => console.log("posted, assigned ID", id),
        error => console.log("Error ", error)
    )
}

const listenMessage = () => {
    directLine.activity$.subscribe(activity => console.log("received activity", activity))
}

module.exports = {sendMessage, listenMessage}