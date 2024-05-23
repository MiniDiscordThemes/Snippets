import * as sass from "sass";

import fs from "fs";
import path from "path";

import log from "./log.js";

const validateInput = () => {
    // Snippet name
    if (process.argv.length < 3) {
        log.error("Usage: pnpm run dev:css <snippetName>");
    }
    const snippetName = process.argv[2];
    const snippetPaths = [path.join("themes", snippetName), path.join("themes", snippetName, "scss", "main.scss")];
    snippetPaths.forEach((p) => {
        if (!fs.existsSync(p)) {
            log.error(`Snippet "${snippetName}" not found at ${p}`);
        }
    });
    // Vesktop theme folder
    const vesktopThemeFolder = path.resolve(process.env.APPDATA!, "Vesktop", "themes");
    if (!fs.existsSync(vesktopThemeFolder)) {
        log.error(`Vesktop theme folder not found at ${vesktopThemeFolder}`);
    }
    return snippetName;
};

// Watch scss files in `themes/snippetName/scss`
const watchSnippet = (snippetName: string) => {
    const vesktopThemeFolder = path.resolve(process.env.APPDATA!, "Vesktop", "themes");

    const sourceScssFolder = path.join("themes", snippetName, "scss");
    const outputCssFilename = `Snippet - ${snippetName}.css`;

    log.snippet(snippetName);

    fs.watch(sourceScssFolder, { recursive: true }, (eventType, changedFilename) => {
        changedFilename = changedFilename ? changedFilename : "something";
        log.changed(changedFilename);
        try {
            const css = sass.compile(path.join(sourceScssFolder, "main.scss"), {
                style: "expanded",
                charset: false,
                loadPaths: ["node_modules"]
            }).css;
            fs.writeFileSync(path.join(vesktopThemeFolder, outputCssFilename), css);
            log.updated(outputCssFilename);
        } catch (error) {
            if (error instanceof sass.Exception) {
                log.sasserror(changedFilename, error.message);
            } else {
                log.error(changedFilename, error);
            }
        }
    });
};

watchSnippet(validateInput());
