module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "react-app", // create react app已集成
    "react-app/jest", // create react app已集成
    "eslint:recommended", // create react app已安装，使用eslint中recommened的规则
    "plugin:react/recommended", // create react app已安装, recommended react linting configs
    "plugin:@typescript-eslint/recommended", // 需额外手动安装 @typescript-eslint/eslint-plugin
    "plugin:react-hooks/recommended", // create react app已安装, hooks相关的lint config
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "@typescript-eslint"],
  "parser": "@typescript-eslint/parser", // 需手动安装 @typescript-eslint/parser，This allows Eslint to understand TypeScript syntax
  "parserOptions": {
    "ecmaVersion": 11,
    "ecmaFeatures": {
      "jsx": true // Allows for the parsing of JSX
    },
    "sourceType": "module", // Allows for the use of imports
    "project": "./tsconfig.json"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "import/first": "error",
    "react/prop-types": "off"
  }
}