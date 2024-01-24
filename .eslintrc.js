module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        'airbnb',
        'airbnb-typescript'
    ],
    overrides: [
        {
            files: [
                "./src/**/*.tsx",
                '.eslintrc.js'
            ],
            
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module",
        'project': './tsconfig.json'
    },
    plugins: [
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        'func-style': ["error", "expression"],
        'react/function-component-definition': [
            2,
            {
              namedComponents: ['arrow-function', 'function-declaration'],
              unnamedComponents: 'arrow-function',
            },
          ],
        "linebreak-style": "off",
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            '': 'never',
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'no-param-reassign': 0,
    },
    root: true,
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
}