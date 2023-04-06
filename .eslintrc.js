module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'global-require': ['off'],
        'no-unused-vars': ['warn'],
        'react/function-component-definition': ['off'],
        'arrow-body-style': ['off'],
    },
};
