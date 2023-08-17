module.exports = {
    // Specify the environments where your code will run
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    // Define the parser options
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    // Specify the plugins you want to use
    plugins: ['eslint-plugin'],
    // Define your rules
    rules: {
      // Add your custom rules here
      'eslint-plugin/rule-name': 'error',
      // ...
    },
  };
  