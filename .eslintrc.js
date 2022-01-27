module.exports = {
  parser: '@typescript-eslint/parser', // 使用 ts 解析器
  extends: [
    'eslint:recommended', // eslint 推荐规则
    'plugin:@typescript-eslint/recommended', // ts 推荐规则
    'plugin:jest/recommended'
  ],
  plugins: ['@typescript-eslint', 'jest'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-prototype-builtins':'off',
    // '@typescript-eslint/no-unused-vars':'off',
    // '@typescript-eslint/no-inferrable-types': 'off',
    // 'prefer-const': 'off',
    'prefer-rest-params': 'off',
    // '@typescript-eslint/no- inferable -types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jest/expect-expect': [
      'error',
      {
        // assertFunctionNames: ['expect', 'expectSaga', 'expect\\$','request.**.expect'],
        // additionalTestBlockFunctions: ['theoretically']
      }
    ]
  } // 自定义
}
