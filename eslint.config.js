import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. 检测文件的格式
  { files: ["src/**/*.{js,mjs,cjs,ts,vue}"] },
  {
    // 2. 定义不同环境的全局变量
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  // 3. js 推荐 规则
  pluginJs.configs.recommended,
  // 4. ts 推荐 规则
  ...tseslint.configs.recommended,
  // 5. vue 推荐 规则
  ...pluginVue.configs["flat/strongly-recommended"],
  // 6. 检测 vue 中的 ts 代码采用 tsparser
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  // 7. ignores 配置
  {
    ignores: [
      "**/dist",
      "**/ui",
      "release",
      "dist-electron",
      "coverage/*",
      ".vscode",
      ".idea",
      "*.sh",
      "**/node_modules",
      "*.md",
      "*.woff",
      "*.woff",
      "*.ttf",
      "yarn.lock",
      "package-lock.json",
      "/public",
      "/docs",
      "**/output",
      ".husky",
      ".local",
      "/bin",
      "Dockerfile",
    ],
  },
  eslintConfigPrettier,
];
