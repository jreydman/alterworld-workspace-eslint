const baseConfig = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
  ],
  rules: {
    // Общие правила
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/no-unresolved': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],

    // Next.js специфические правила
    '@next/next/no-img-element': 'off',

    // React специфические правила
    'react/react-in-jsx-scope': 'off',

    // NestJS специфические правила
    '@typescript-eslint/no-namespace': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    // Правила для файлов Next.js
    {
      files: ['pages/**/*.ts', 'pages/**/*.tsx', 'components/**/*.ts', 'components/**/*.tsx'],
      rules: {
        // Специфические правила Next.js
      },
    },
    // Правила для файлов NestJS
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};

module.exports = {baseConfig}
