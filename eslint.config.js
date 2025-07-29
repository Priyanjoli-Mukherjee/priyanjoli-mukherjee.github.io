import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { ignores: ["dist/"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "@mui/material",
              message:
                "Imports to @mui/material are not allowed. Please import directly from @mui/material/<COMPONENT> instead.",
            },
            {
              name: "@mui/icons-material",
              message:
                "Imports to @mui/icons-material are not allowed. Please import directly from @mui/icons-material/<ICON> instead.",
            },
          ],
        },
      ],
    },
  },
];
