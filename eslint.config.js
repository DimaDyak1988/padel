import js from '@eslint/js';
import ts from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import boundaries from 'eslint-plugin-boundaries';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';

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
      globals: globals.browser,
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
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      'boundaries/map': {
        '@': './src'
      },
      // Элементы FSD (без рекурсивных паттернов — так правильно для определения типа)
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/*' },
        { type: 'pages', pattern: 'src/pages/*' },
        { type: 'widgets', pattern: 'src/widgets/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'entities', pattern: 'src/entities/*' },
        { type: 'shared', pattern: 'src/shared/*' },
      ],
      'boundaries/config': { type: 'project' },
    },
    rules: {
      // --- СТИЛЬ КОДА ---
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-unused-vars': 'off',
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
        // 🔥 Общее сообщение для всех запрещённых импортов
        message: '🚫 Нарушение архитектуры FSD. Слой "{{ from.type }}" не может импортировать слой "{{ to.type }}".\nИерархия слоёв: app → pages → widgets → features → entities → shared.\nИмпорт возможен только сверху вниз или внутри своего слайса.',
        rules: [
          // 1. Иерархия слоёв FSD
          {
            from: { type: 'app' },
            allow: [{ to: { type: ['pages', 'widgets', 'features', 'entities', 'shared'] } }]
          },
          {
            from: { type: 'pages' },
            allow: [{ to: { type: ['widgets', 'features', 'entities', 'shared'] } }]
          },
          {
            from: { type: 'widgets' },
            allow: [{ to: { type: ['features', 'entities', 'shared'] } }]
          },
          {
            from: { type: 'features' },
            allow: [{ to: { type: ['entities', 'shared'] } }]
          },
          {
            from: { type: 'entities' },
            allow: [{ to: { type: ['shared'] } }]
          },
          {
            from: { type: 'shared' },
            allow: [{ to: { type: ['shared'] } }]
          },

          // 2. Внутренние импорты
          {
            from: { type: 'pages' },
            allow: [{ to: { type: 'pages' } }]
          },
          {
            from: { type: 'widgets' },
            allow: [{ to: { type: 'widgets' } }]
          },
          {
            from: { type: 'features' },
            allow: [{ to: { type: 'features' } }]
          },
          {
            from: { type: 'entities' },
            allow: [{ to: { type: 'entities' } }]
          },

          // 3. Public API
          {
            from: { type: '*' },
            allow: [{
              to: {
                type: ['pages', 'widgets', 'features', 'entities'],
                internalPath: 'index.*'
              }
            }]
          }
        ]
      }]
    },
  }
);
