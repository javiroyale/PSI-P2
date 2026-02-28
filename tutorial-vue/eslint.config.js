import js from "@eslint/js"
import vue from "eslint-plugin-vue"
import vueParser from "vue-eslint-parser"
import globals from "globals"

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        Cypress: "readonly",
        cy: "readonly"
      }
    }
  },

  js.configs.recommended,
  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    }
  }
]