/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  rules: {
    "space-before-function-paren": 0,  // 函数定义时括号前面要不要有空格
    "semi": 0,  // 语句可以不需要分号结尾
    "eqeqeq": 2, // 必须使用全等
    "no-unused-vars": 0,
    "vue/multi-word-component-names": 0
  }
}
