/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': 0,  // 函数定义时括号前面要不要有空格
    'semi': 2,  // 语句必须以需要分号结尾
    'eqeqeq': 2, // 必须使用全等
    'no-unused-vars': 0, // 不能有声明后未被使用的变量或参数
    'eol-last': 2, // 文件以单一的换行符结束
    'quotes': ['error', 'single'], // 字符串使用单引号
    'comma-dangle': ['error', 'never'], // 对象字面量项尾不能有逗号
    '@typescript-eslint/no-explicit-any': 0 // 禁止使用 any
  }
};
