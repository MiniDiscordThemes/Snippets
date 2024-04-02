import * as sass from "sass";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { globSync } from "glob";

import log from "./log.js";

// Get snippet names
const snippetNames = ((dir) =>
    fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name))("themes");

// Compile and save css to `themesdist/snippetName`
const compileAndSaveCss = (snippetName: any) => {
    const dirScss = path.join("themes", snippetName, "scss");
    const dirCss = path.join("themesdist", snippetName);

    const base = "main";
    const fileScss = path.join(dirScss, base + ".scss");
    const fileCss = path.join(dirCss, base + ".css");

    try {
        if (!fs.existsSync(fileScss)) {
            throw new Error(`Can't find ${fileScss}`);
        }

        // Compile css
        const css = sass.compile(fileScss, {
            style: "compressed",
            charset: false,
            loadPaths: ["node_modules"]
        }).css;

        // Save css
        if (!fs.existsSync(dirCss)) fs.mkdirSync(dirCss, { recursive: true });
        fs.writeFileSync(fileCss, css);

        log.created(`${base + ".css"}`);
    } catch (error) {
        log.error(`${base + ".css"}`, error);
    }
};

// Convert preview images from jpg,png,gif to avif in `lib/snippetName`
const convertAndSaveAvif = (snippetName: any) => {
    const dirOriginal = path.join("themes", snippetName, "preview");
    const dirAvif = path.join("themesdist", snippetName);

    const filesOriginal = globSync(`${dirOriginal}/*.{png,jpeg}`, { windowsPathsNoEscape: true });
    if (!filesOriginal.length) {
        log.warning("No preview images found.");
    }

    filesOriginal.forEach((fileOriginal) => {
        const base = path.basename(fileOriginal, path.extname(fileOriginal));
        const fileAvif = path.join(dirAvif, base + ".avif");

        try {
            if (fs.existsSync(fileAvif)) {
                log.exists(`${base + ".avif"}`);
            } else {
                const avif = sharp(fileOriginal).avif({
                    quality: 100,
                    effort: 9
                });
                avif.toFile(fileAvif);
                log.created(`${base + ".avif"}`);
            }
        } catch (error) {
            log.error(`${base + ".avif"}`, error);
        }
    });
};

snippetNames.forEach((snippetName) => {
    log.snippet(snippetName);
    compileAndSaveCss(snippetName);
    convertAndSaveAvif(snippetName);
});
