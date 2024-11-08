import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    root: true,
    ignores: ['dist', 'build', 'public'],
  },
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended, 
      'plugin:react/recommended',
      'plugin:react-hooks/recommended', 
      'prettier',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn', 
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  }
);
