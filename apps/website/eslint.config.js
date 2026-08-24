import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import nxPlugin from '@nx/eslint-plugin';

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@nx': nxPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: '18.2' },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/prop-types': 'off',
      'no-unused-vars': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': 'off',
      '@nx/enforce-module-boundaries': ['error', {
        enforceBuildableLibDependency: true,
        allow: [],
        depConstraints: [
          { sourceTag: 'type:app', onlyDependOnLibsWithTags: ['type:lib'] },
        ],
      }],
    },
  },
];
