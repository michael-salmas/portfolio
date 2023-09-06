/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: [
        "import",
        "import-newlines"
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',  
        'semi': ['error', 'always'],
        'indent': ["error", 4, { "SwitchCase": 1 }],
        "eol-last": [
            "warn",
            "always"
        ],
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type"
                ],
                "pathGroups": [{
                    "pattern": "@/components/**",
                    "group": "internal",
                }, {
                    "pattern": "@/**",
                    "group": "internal",
                    "position": "before"    
                }],
                "newlines-between": "always",
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ],
        "import-newlines/enforce": [
            "error",
            {
                "items": 3,
                "max-len": 120,
                "forceSingleLine": true
            }
        ],
    },
};
