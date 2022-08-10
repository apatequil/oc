"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEnvironments = exports.promptForEnvironment = void 0;
const environments_1 = require("../../lib/environments");
const inquirer = require('inquirer');
async function promptForEnvironment() {
    let responses = await inquirer.prompt([{
            name: 'env',
            message: 'Select an environment',
            type: 'list',
            choices: environments_1.environments,
        }]);
    return responses.env;
}
exports.promptForEnvironment = promptForEnvironment;
function listEnvironments() {
    return environments_1.environments.map(x => x.name);
}
exports.listEnvironments = listEnvironments;
