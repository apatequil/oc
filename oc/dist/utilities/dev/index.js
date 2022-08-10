"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEnvironments = exports.getEnvironment = void 0;
var environment_1 = require("./environment");
Object.defineProperty(exports, "getEnvironment", { enumerable: true, get: function () { return environment_1.promptForEnvironment; } });
Object.defineProperty(exports, "listEnvironments", { enumerable: true, get: function () { return environment_1.listEnvironments; } });
