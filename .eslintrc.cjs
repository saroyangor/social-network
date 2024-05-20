module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:i18next/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'react-refresh'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-undef': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'linebreak-style': [2, 'windows'],
    'max-len': [2, {
      ignoreComments: true,
      code: 120,
    }],
    'import/no-extraneous-dependencies': 1,
    'no-shadow': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    semi: [2, 'always'],
    'import/no-unresolved': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'no-console': 1,
    'no-debugger': 1,
    camelcase: 'off',
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'i18next/no-literal-string': [1, {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to', 'target', 'direction', 'justify', 'align', 'gap', 'role', 'as', 'path'],
    }],
    'import/order': ['error', {
      pathGroupsExcludedImportTypes: [],
      pathGroups: [{
        pattern: '@/**',
        group: 'internal',
      }],
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    }],
  }
};

