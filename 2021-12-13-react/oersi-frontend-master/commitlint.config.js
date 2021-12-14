// for more info about convention check  url : https://commitlint.js.org/#/
// Level [0..2]: 0 disables the rule. For 1 it will be considered a warning, for 2 an error.
// Applicable always|never: never inverts the rule.
// Value: value to use for this rule.
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [0, 'always'],
        'body-max-line-length': [0, 'always', 100],
        'footer-leading-blank': [0, 'always'],
        'footer-max-line-length': [0, 'always', 100],
        'header-max-length': [0, 'always', 100],
        'scope-case': [0, 'always', 'lower-case'],
        'subject-case': [
            0,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [0, 'never'],
        'subject-full-stop': [0, 'never', '.'],
        'type-case': [0, 'always', 'lower-case'],
        'type-empty': [0, 'never'],   // type must be not empty
        // example: git commit -m "foo: some messge"  ==> fails do not have any type foo
        // example: git commit -m "fix: some messge"  ==> passes 
        'type-enum': [
            0,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],        

    }
};
