#!/usr/bin/env zx

import { $, fs, glob } from "zx";
import { ast_grep } from "./ast_grep.js";
import { errors } from "./errors.js";
import { root } from "./utils.js";

// clear generated content
await Promise.all([fs.remove(root("cjs")), fs.remove(root("_"))]);

let modules = await glob("*.js", { cwd: root("esm") });

const task_queue = [];

const NO_MODIFY = [
    "/* This file is automatically generated and should not be manually edited. */",
    "/* To modify this file, please run the `npm run build` command instead. */",
];

// generate index.js
const indexESM = [...NO_MODIFY, ""];

const indexCJS = [`"use strict";`, "", ...NO_MODIFY, ""];

const cjs_export_list = [];
const cjs_module_lexer = [];

const main_package_json = fs.readJSONSync(root("package.json"));

main_package_json.exports = {
    "./package.json": "./package.json",
    "./esm/*": "./esm/*",
    "./cjs/*": "./cjs/*",
    ".": { import: "./esm/index.js", default: "./cjs/index.cjs" },
    "./_": { import: "./esm/index.js", default: "./cjs/index.cjs" },
};

modules.forEach((p) => {
    const importBinding = p.slice(0, -3);

    main_package_json.exports[`./_/${importBinding}`] = {
        import: `./esm/${importBinding}.js`,
        default: `./cjs/${importBinding}.cjs`,
    };

    const alias_package = {
        main: `../../cjs/${importBinding}.cjs`,
        module: `../../esm/${importBinding}.js`,
    };
    task_queue.push(
        fs.outputJSON(root("_", importBinding, "package.json"), alias_package, {
            encoding: "utf-8",
            spaces: 4,
        }),
    );

    if (importBinding === "index") {
        return;
    }

    indexESM.push(`export { ${importBinding} } from "./${importBinding}.js";`);

    cjs_module_lexer.push(`${importBinding}: null,`);
    cjs_export_list.push(`get ${importBinding}() {
      return require("./${importBinding}.cjs")._;
  },`);
});

indexCJS.push(
    `module.exports = {`,
    "/* @Annotate start: the CommonJS named exports for ESM import in node */",
    ...cjs_module_lexer,
    "/* @Annotate end */",
    ...cjs_export_list,
    `};`,
);

task_queue.push(
    fs.outputJSON(root("package.json"), main_package_json, { spaces: 4 }),
    fs.outputFile(root("esm", "index.js"), indexESM.join("\n") + "\n", {
        encoding: "utf-8",
    }),
    fs.outputFile(root("cjs", "index.cjs"), indexCJS.join("\n") + "\n", {
        encoding: "utf-8",
    }),
);

task_queue.push(...ast_grep());

await Promise.all(task_queue);

if (errors.length > 0) {
    errors.forEach((e) => {
        console.error(e);
    });
    process.exitCode = 1;
} else {
    $.cwd = root(".");
    await $`dprint fmt`;
    await $`dprint fmt "scripts/*.js" -c scripts/.dprint.json`;
}
