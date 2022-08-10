"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifier = void 0;
const tslib_1 = require("tslib");
const notifier = (0, tslib_1.__importStar)(require("node-notifier"));
class Notifier {
    async notify(message, title) {
        notifier.notify({
            title: title !== null && title !== void 0 ? title : '',
            message: message
        });
    }
}
exports.Notifier = Notifier;
