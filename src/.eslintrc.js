module.exports = {
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
    ],
    'env': {
        'browser': false,
        'es2021': true,
        'node': true,
        'jest': true,
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'jest',
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'no-unused-vars': ['error', {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
        }],
    },
};
