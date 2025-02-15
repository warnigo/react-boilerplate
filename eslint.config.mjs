import {
  fixupConfigRules,
  fixupPluginRules,
  includeIgnoreFile,
} from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import * as tsParser from "@typescript-eslint/parser"
import importPlugin from "eslint-plugin-import"
import jsxA11y from "eslint-plugin-jsx-a11y"
import noSecret from "eslint-plugin-no-secrets"
import prettier from "eslint-plugin-prettier"
import promise from "eslint-plugin-promise"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import security from "eslint-plugin-security"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImport from "eslint-plugin-unused-imports"
import globals from "globals"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const gitIgnoreFile = resolve(__dirname, ".gitignore")

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const eslintConfig = [
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}"],
  },
  includeIgnoreFile(gitIgnoreFile),
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/recommended",
      "plugin:react/recommended",
      "plugin:import/typescript",
      "plugin:jsx-a11y/strict",
      "plugin:promise/recommended",
      "prettier",
    ),
  ),
  {
    plugins: {
      "react": fixupPluginRules(react),
      "react-hooks": fixupPluginRules(reactHooks),
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "prettier": fixupPluginRules(prettier),
      "import": fixupPluginRules(importPlugin),
      "simple-import-sort": fixupPluginRules(simpleImportSort),
      "jsx-a11y": fixupPluginRules(jsxA11y),
      "promise": fixupPluginRules(promise),
      "security": fixupPluginRules(security),
      "unused-imports": fixupPluginRules(unusedImport),
      "no-secrets": fixupPluginRules(noSecret),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: [
          "./tsconfig.json",
          "./tsconfig.app.json",
          "./tsconfig.node.json",
        ],
      },
    },

    settings: {
      "react": {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: [
            "./tsconfig.json",
            "./tsconfig.app.json",
            "./tsconfig.node.json",
          ],
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
    },

    rules: {
      "semi": ["error", "never"],

      // Prettier
      "prettier/prettier": [
        "error",
        {
          semi: false,
        },
      ],

      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          ignoreCase: false,
          noSortAlphabetically: false,
          reservedFirst: true,
          multiline: "last",
        },
      ],
      "react/jsx-no-useless-fragment": [
        "error",
        {
          allowExpressions: true,
        },
      ],
      "react/jsx-pascal-case": [
        "error",
        {
          allowAllCaps: false,
          allowNamespace: false,
          allowLeadingUnderscore: false,
        },
      ],
      "react/jsx-no-leaked-render": [
        "error",
        {
          validStrategies: ["ternary", "coerce"],
        },
      ],
      "react/jsx-max-depth": [
        "error",
        {
          max: 6,
        },
      ],
      "react/jsx-no-duplicate-props": [
        "error",
        {
          ignoreCase: false,
        },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-no-target-blank": [
        "error",
        {
          allowReferrer: false,
          enforceDynamicLinks: "always",
          warnOnSpreadAttributes: true,
          links: true,
          forms: true,
        },
      ],
      "react/no-array-index-key": "error",
      "react/no-danger": "error",
      "react/no-multi-comp": [
        "error",
        {
          ignoreStateless: false,
        },
      ],
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
      "prefer-arrow-callback": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "never",
        },
      ],
      "@typescript-eslint/no-misused-promises": "off", // error
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": true,
          "ts-check": false,
          "minimumDescriptionLength": 10,
        },
      ],
      "@typescript-eslint/sort-type-constituents": [
        "error",
        {
          checkIntersections: true,
          checkUnions: true,
        },
      ],
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // Whitespaces and newlines
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],

      // Import sorting and organization
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react$"],
            ["^@/"],
            ["^@?\\w"],
            ["^~/"],
            [
              "^@app/*",
              "^@shared/*",
              "^@views/*",
              "^@helpers/*",
              "^@entities/*",
              "^@widgets/*",
            ],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.s?css$"],
            ["^\\u0000"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/no-unresolved": [
        "error",
        {
          ignore: ["^geist/font"],
        },
      ],
      "import/newline-after-import": [
        "error",
        {
          count: 1,
        },
      ],
      "import/no-duplicates": [
        "error",
        {
          considerQueryString: true,
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "import/no-cycle": [
        "error",
        {
          maxDepth: 1,
          ignoreExternal: true,
        },
      ],
      "import/no-deprecated": "warn",
      "import/no-mutable-exports": "error",
      "import/no-self-import": "error",
      "import/no-useless-path-segments": [
        "error",
        {
          noUselessIndex: true,
        },
      ],

      // Accessibility rules
      "jsx-a11y/alt-text": [
        "error",
        {
          "elements": ["img", "object", "area", 'input[type="image"]'],
          "img": ["Image", "NextImage"],
          "object": ["Object"],
          "area": ["Area"],
          'input[type="image"]': ["InputImage"],
        },
      ],
      "jsx-a11y/anchor-has-content": [
        "error",
        {
          components: ["Link", "NextLink"],
        },
      ],
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": [
        "error",
        {
          ignoreNonDOM: true,
        },
      ],
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelComponents: ["Label"],
          labelAttributes: ["htmlFor"],
          controlComponents: ["Input", "Select", "Textarea"],
          depth: 3,
        },
      ],

      // Promise related rules
      "promise/always-return": "error",
      "promise/no-callback-in-promise": "error",
      "promise/no-nesting": "error",
      "promise/no-promise-in-callback": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",

      // Security rules
      "no-secrets/no-secrets": [
        "error",
        {
          ignoreContent: ["^https://", "^test", "^example", "^public-key"],
        },
      ],
      "security/detect-buffer-noassert": "error",
      "security/detect-child-process": "error",
      "security/detect-disable-mustache-escape": "error",
      "security/detect-eval-with-expression": "error",
      "security/detect-new-buffer": "error",
      "security/detect-no-csrf-before-method-override": "error",
      "security/detect-non-literal-fs-filename": "error",
      "security/detect-non-literal-regexp": "error",
      "security/detect-non-literal-require": "error",
      "security/detect-object-injection": "off",
      "security/detect-possible-timing-attacks": "error",
      "security/detect-pseudoRandomBytes": "error",
      "security/detect-unsafe-regex": "error",
    },
  },
  {
    files: ["scripts/**/*.js", "*scripts/**/*.mjs"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-secrets/no-secrets": "off",
      "security/detect-non-literal-fs-filename": "off",
    },
  },
]

export default eslintConfig
