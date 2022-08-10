module.exports = {
  printWidth: 100,
  parser: 'typescript',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['cdk/**', 'taskr/**'],
      options: {
        printWidth: 140
      }
    }
  ],
}
