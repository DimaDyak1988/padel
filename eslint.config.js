import js from '@eslint/js';
import ts from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import boundaries from 'eslint-plugin-boundaries';
import vueParser from 'vue-eslint-parser';

export default ts.config(
  // 1. Игнорируемые папки
  {
    ignores: ['node_modules/**', 'dist/**', 'public/**', '.vscode/**', '.idea/**']
  },

  // 2. Базовые рекомендуемые конфиги
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],

  // 3. Основная настройка проекта
  {
    files: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: ts.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      'boundaries': boundaries,
    },
    settings: {
      // Настройка слоев FSD
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      'boundaries/map': {
        '@': './src'
      },
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**/*' },
        { type: 'pages', pattern: 'src/pages/**/*' },
        { type: 'widgets', pattern: 'src/widgets/**/*' },
        { type: 'features', pattern: 'src/features/**/*' },
        { type: 'entities', pattern: 'src/entities/**/*' },
        { type: 'shared', pattern: 'src/shared/**/*' },
      ],
      'boundaries/config': { type: 'project' },
    },
    rules: {
      // --- СТИЛЬ КОДА (Замена Prettier) ---
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-unused-vars': 'off', // Отключаем базовый, так как работает TS версия
      '@typescript-eslint/no-unused-vars': ['warn'],

      // --- VUE ФОРМАТИРОВАНИЕ ---
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1
      }],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always'
      }],
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': ['error', {
        html: { void: 'always', normal: 'always', component: 'always' }
      }],
      'vue/singleline-html-element-content-newline': ['error', {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
      }],

      // --- АРХИТЕКТУРА FSD (версия плагина 6+) ---
      'boundaries/dependencies': ['error', {
        default: 'disallow',
        rules: [
          // ... все ваши правила иерархии (app → pages, pages → widgets и т.д.) ...

          // 👇 Разрешаем импорты из корневого index.* каждого слайса
          {
            from: { type: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'] },
            to: {
              type: ['pages', 'widgets', 'features', 'entities'],
              path: 'src/*/*/index.*'          // ← именно index файлы
            },
            allow: '*'
          },

          // 👇 Запрещаем всё остальное внутри слайса (deep imports)
          {
            to: {
              type: ['pages', 'widgets', 'features', 'entities'],
              path: 'src/*/*/**/*'
            },
            disallow: '*',
            message: 'Нарушение Public API: импортируй только через index.ts слайса'
          }
        ]
      }]
    },
  }
);
