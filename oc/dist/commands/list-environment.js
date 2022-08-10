"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEnvironment = void 0;
const core_1 = require("@oclif/core");
const environments_1 = require("../lib/environments");
const environment_1 = require("../utilities/dev/environment");
const logger_1 = require("../utilities/logger");
class GetEnvironment extends core_1.Command {
    constructor() {
        super(...arguments);
        this.logger = new logger_1.CliLogger();
    }
    async run() {
        const { flags } = await this.parse(GetEnvironment);
        const environments = (0, environment_1.listEnvironments)();
        this.logger.info(`Possible environments:`);
        environments.forEach(x => {
            this.logger.info(`\t${x}`);
        });
        this.logger.info;
    }
}
exports.GetEnvironment = GetEnvironment;
GetEnvironment.aliases = [
    'env'
];
GetEnvironment.flags = {
    env: core_1.Flags.string({ options: environments_1.environments.map(x => x.name), char: 'e' })
};
