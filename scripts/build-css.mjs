import { execSync } from "child_process";
import fs from "fs";
import glob from "glob";

// 1. Find all CSS files
const cssFiles = glob.sync("src/**/*.css");

// 2. Combine them into raw.css
const rawCSS = cssFiles.map((f) => fs.readFileSync(f, "utf-8")).join("\n");
fs.writeFileSync("dist/rs-richeditor.raw.css", rawCSS);

// 3. Run PostCSS to process into final output
execSync("npx postcss dist/rs-richeditor.raw.css -o dist/rs-richeditor.css");

console.log("✅ Combined and processed CSS");
