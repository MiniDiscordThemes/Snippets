import chalk from "chalk";

export default {
    snippet: (snippetName: string) => {
        console.log(`${chalk.blueBright.bold(`${snippetName}`)}`);
    },
    created: (message: string) => {
        console.log(`  ${chalk.greenBright("Created")}\t${message}`);
    },
    exists: (message: string) => {
        console.log(`  ${chalk.greenBright("Exists")}\t${message}`);
    },
    copied: (message: string) => {
        console.log(`  ${chalk.greenBright("Copied")}\t${message}`);
    },
    warning: (message: string) => {
        console.log(`  ${chalk.yellowBright("Warning")}\t${message}`);
    },
    error: (message: string, error: any) => {
        console.log(`  ${chalk.redBright("Failed")}\t${message}`);
        console.log(error);
        process.exit(1);
    }
};
