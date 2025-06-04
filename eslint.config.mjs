import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unused variables and assignments
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "none", // Don't warn on unused function arguments
          ignoreRestSiblings: true, // Ignore unused variables in rest destructuring
          argsIgnorePattern: "^_", // Allow arguments starting with an underscore to be unused
        },
      ],
      // Optionally, allow regular unused vars rule for JS files as well
      "no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "none", // Don't warn on unused function arguments
          ignoreRestSiblings: true, // Ignore unused variables in rest destructuring
          argsIgnorePattern: "^_", // Allow arguments starting with an underscore to be unused
        },
      ],
    },
  },
];

export default eslintConfig;