import vuePlugin from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsPkg from '@eslint/js';
import vueParser from 'vue-eslint-parser';

const { configs: jsConfigs } = jsPkg;

export default [
  {
    files: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    ...jsConfigs.recommended,
    rules: {
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never'
      }],
      'object-curly-spacing': ['error', 'always'],
      // 'array-bracket-spacing': ['error', 'always'],

      // ESLint не фиксит Vue атрибуты
      'vue/max-attributes-per-line': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/multi-word-component-names': 'off'
    },
  },
];