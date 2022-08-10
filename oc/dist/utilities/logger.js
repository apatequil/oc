"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliLogger = void 0;
const tslib_1 = require("tslib");
const chalk_1 = (0, tslib_1.__importDefault)(require("chalk"));
class CliLogger {
    warn(message) {
        console.warn(chalk_1.default.yellow(message));
    }
    error(message) {
        console.error(chalk_1.default.red(message));
    }
    info(message) {
        console.info(chalk_1.default.blue(message));
    }
}
exports.CliLogger = CliLogger;
