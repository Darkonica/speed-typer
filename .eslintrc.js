module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  settings: {
    'import/extensions': ['*', '.js', '.jsx', '.scss'],
    'import/resolver': 'webpack',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        scss: 'never',
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    radix: 'off',
    semi: 'error',
    'no-console': 'warn',
    // 'arrow-parens': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
  },
};
