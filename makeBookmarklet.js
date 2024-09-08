import { readFileSync, writeFileSync } from 'fs';

const data = readFileSync("bookmarklet.js", "utf-8")
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.indexOf("//") === -1)
    .join("");

writeFileSync("out.txt", `javascript:{${data}}`);