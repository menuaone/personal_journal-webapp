module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    'parser': 'babel-eslint', // main thing
    rules: {
        // 'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'indent': ['warn', 4],
        'react/jsx-indent': ['warn', 4, { 'checkAttributes': true }],
        'react/react-in-jsx-scope': 'off',
        'react/destructuring-assignment': 'off',
        'no-nested-ternary': 'warn',
        'react/prop-types': 'warn',
        // 'semi': ['error', 'always', { 'omitLastInOneLineBlock': false }],
        // "comma-dangle": ["error", "never"],
    },
};
