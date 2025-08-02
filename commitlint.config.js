export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'bug',
        'refactor',
        'design',
        'style',
        'docs',
        'test',
        'chore',
        'rename',
        'remove',
        'build',
      ],
    ],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lowercase'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    // 'references-empty': [2, 'never'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*): (.+)$/, // (#숫자) 없이
      headerCorrespondence: ['type', 'subject'],
    },
  },
}
