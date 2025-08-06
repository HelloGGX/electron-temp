import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import autoImportConfig from "./.eslintrc-auto-import.json";

export default tseslint.config(
  /** js推荐配置 */
  js.configs.recommended,
  /** ts推荐配置 */
  tseslint.configs.recommended,
  /** vue推荐配置 */
  pluginVue.configs["flat/essential"],
  /** 全局变量和规则 */
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImportConfig.globals,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  /** vue文件自定义规则 */
  {
    files: ["**/*.vue"],
    languageOptions: { parser: vueParser, parserOptions: { parser: tseslint.parser, ecmaVersion: "latest" } },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  /** 单测文件解析 */
  {
    files: ["**/*.{test,spec}.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        afterAll: "readonly",
        afterEach: "readonly",
        vi: "readonly",
      },
    },
  },
  { ignores: ["**/ui/**", "**/node_modules/**", "**/coverage/**", "**/release/**"] },
);
