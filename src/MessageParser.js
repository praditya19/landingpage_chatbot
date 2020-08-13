class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet();
        }

        if (lowerCaseMessage.includes("javascript")) {
            this.actionProvider.handleJavascriptList();
        }

        if (lowerCaseMessage.includes("datavisual")) {
            this.actionProvider.handleDatavisualList();
        }

        if (lowerCaseMessage.includes("apis")) {
            this.actionProvider.handleApisList();
        }
    }
}

export default MessageParser;