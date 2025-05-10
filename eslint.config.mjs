import babelParser from "@babel/eslint-parser";
import importantStuff from "eslint-config-important-stuff";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
    eslintPluginPrettierRecommended,
    {
        files: ["src/**/*.js"],
        languageOptions: {
            parser: babelParser,
            globals: {
                ...globals.browser,
                ...globals.es2020,
                ...globals.jest,
                System: "readonly",
            },
        },
        rules: {
            ...importantStuff.rules,
            ...{
                "no-var": "error"
            },
        },
    },
];
