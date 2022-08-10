import { Command } from '@oclif/core';
export declare class GetEnvironment extends Command {
    private readonly logger;
    static aliases: string[];
    static flags: {
        env: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
