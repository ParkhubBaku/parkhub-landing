// eslint.config.mjs
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import typescriptParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      parser: typescriptParser,
      sourceType: 'module',
      ecmaVersion: 2015,
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules, // Add TypeScript rules
      ...prettier.rules,
      'react/boolean-prop-naming': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
          pathGroups: [
            { pattern: 'env', group: 'internal' },
            { pattern: 'types', group: 'internal' },
            { pattern: 'components/**', group: 'internal' },
            { pattern: 'contexts/**', group: 'internal' },
            { pattern: 'hooks/**', group: 'internal' },
            { pattern: 'pages/**', group: 'internal' },
            { pattern: 'views/**', group: 'internal' },
            { pattern: 'utils/**', group: 'internal' },
            { pattern: 'src/**', group: 'internal', position: 'after' },
            { pattern: 'posts/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['internal'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];