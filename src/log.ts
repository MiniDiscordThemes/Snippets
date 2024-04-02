import chalk from "chalk";

export default {
    snippet: (snippetName: unknown | any) => {
        console.log(`${chalk.blueBright.bold(`${snippetName}`)}`);
    },
    created: (message: unknown | any) => {
        console.log(`  ${chalk.greenBright("Created")}\t${message}`);
    },
    exists: (message: unknown | any) => {
        console.log(`  ${chalk.greenBright("Exists")}\t${message}`);
    },
    warning: (message: unknown | any) => {
        console.log(`  ${chalk.yellowBright("Warning")}\t${message}`);
    },
    error: (message: unknown | any, error: any) => {
        console.log(`  ${chalk.redBright("Failed")}\t${message}`);
        console.log(error);
        process.exit(1);
    }
};
