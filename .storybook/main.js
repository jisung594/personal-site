/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    { 
      from: "../public",
      to: "static",
      exclude: ["404.html"]
    }
  ],
  "docs": {
    "autodocs": true
  }
};
export default config;