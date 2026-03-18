import vue from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['*.js', '*.ts', '*.vue'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tsPlugin,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      // сюда свои правила
      // 'no-console': 'warn',
      // 'vue/multi-word-component-names': 'off',
    },
  },
];