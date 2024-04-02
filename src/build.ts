import * as sass from "sass";
import fs, { copyFileSync } from "fs";
import path from "path";
import sharp from "sharp";
import { globSync } from "glob";

import log from "./log.js";

const getBaseWithExt = (file: string, ext: string) => path.basename(file, path.extname(file)) + ext;

const compileAndSaveCss = (dirSource: string, dirTarget: string) => {
    const base = "main";
    const fileSource = path.join(dirSource, base + ".scss");
    const fileTarget = path.join(dirTarget, base + ".css");

    try {
        if (!fs.existsSync(fileSource)) {
            throw new Error(`Can't find ${fileSource}`);
        }

        // Compile css
        const css = sass.compile(fileSource, {
            style: "compressed",
            charset: false,
            loadPaths: ["node_modules"]
        }).css;

        // Save css
        if (!fs.existsSync(dirTarget)) fs.mkdirSync(dirTarget, { recursive: true });
        fs.writeFileSync(fileTarget, css);

        log.created(`${base + ".css"}`);
    } catch (error) {
        log.error(`${base + ".css"}`, error);
    }
};

const convertAndSaveAvif = (fileSource: string, fileTarget: string) => {
    const baseWithExt = getBaseWithExt(fileTarget, ".avif");

    try {
        if (fs.existsSync(fileTarget)) {
            log.exists(`${baseWithExt}`);
        } else {
            const avif = sharp(fileSource).avif({
                quality: 100,
                effort: 9
            });
            avif.toFile(fileTarget);
            log.created(`${baseWithExt}`);
        }
    } catch (error) {
        log.error(`${baseWithExt}`, error);
    }
};

const convertAndSavePreviews = (dirSource: string, dirTarget: string) => {
    // Find paths of jpg,png images
    let filesSource = globSync(`${dirSource}/*.{png,jpeg}`, { windowsPathsNoEscape: true });
    // Convert and save each image
    filesSource.forEach((fileSource) => {
        const fileTarget = fileSource.replace(dirSource, dirTarget).replace(path.extname(fileSource), ".avif");
        convertAndSaveAvif(fileSource, fileTarget);
    });

    // Copy avif images if jpg,png images are not found
    if (!filesSource.length) {
        filesSource = globSync(`${dirSource}/*.avif`, { windowsPathsNoEscape: true });
        filesSource.forEach((fileSource) => {
            const fileTarget = fileSource.replace(dirSource, dirTarget).replace(path.extname(fileSource), ".avif");
            fs.copyFileSync(fileSource, fileTarget);
            log.copied(getBaseWithExt(fileTarget, ".avif"));
        });
    }
};

const copyFiles = (dirSource: string, dirTarget: string) => {
    if (fs.existsSync(dirSource)) {
        // List of files and directories
        const contents = fs.readdirSync(dirSource, { recursive: true, withFileTypes: true }).filter((dirent) => dirent.isFile());
        contents.forEach((content) => {
            try {
                const ext = path.extname(content.name);
                const contentFileSource = path.join(content.path, content.name);
                const contentFileTarget = contentFileSource.replace(dirSource, dirTarget);

                fs.mkdirSync(path.dirname(contentFileTarget), { recursive: true });

                // Convert png,jpg to avif
                // Copy non-convertible files
                if (ext === ".png" || ext === ".jpg") {
                    convertAndSaveAvif(contentFileSource, contentFileTarget.replace(ext, ".avif"));
                } else {
                    fs.copyFileSync(contentFileSource, contentFileTarget);
                    log.copied(content.name);
                }
            } catch (error) {
                log.error("Unable to copy assets", error);
            }
        });
    }
};

// Get snippet names
const snippetNames = ((dir) =>
    fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name))("themes");

// Process each snippet
const processSnippet = (snippetName: any) => {
    const dirSource = path.join("themes", snippetName);
    const dirTarget = path.join("themesdist", snippetName);

    log.snippet(snippetName);

    // Compile and save css to `themesdist/snippetName`
    compileAndSaveCss(path.join(dirSource, "scss"), dirTarget);

    // Convert preview images from jpg,png to avif in `themesdist/snippetName`
    convertAndSavePreviews(path.join(dirSource, "preview"), dirTarget);

    // Copy asset files from `themes/snippetName` to `themesdist/snippetName`
    copyFiles(path.join(dirSource, "asset"), path.join(dirTarget, "asset"));
};

snippetNames.forEach((snippetName) => {
    processSnippet(snippetName);
});
