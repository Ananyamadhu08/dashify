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
        'react/jsx-no-constructed-context-values': ['off'],
        'react/prop-types': ['off'],
        'import/no-cycle': ['off'],
        'jsx-a11y/no-static-element-interactions': ['off'],
        'jsx-a11y/click-events-have-key-events': ['off'],
        'no-template-curly-in-string': ['off'],
        'react/no-array-index-key': ['off'],
        'react/jsx-props-no-spreading': ['off'],
    },
};
