// eslint.config.js
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
      parser: vueParser,       // <--- для .vue
      parserOptions: {
        parser: tsParser,      // <--- для <script lang="ts">
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
      'vue/multi-word-component-names': 'off',
      'semi': ['warn', 'always'], // всегда ставим точку с запятой,
      'comma-dangle': ['warn', {
        arrays: 'always-multiline',    // массивы
        objects: 'always-multiline',   // объекты
        imports: 'always-multiline',   // импорты
        exports: 'always-multiline',   // экспорты
        functions: 'never'             // функции без trailing comma
      }]
    },
  },
];