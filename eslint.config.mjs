import stylisticPlugin from '@stylistic/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import destructuringNewlinePlugin from 'eslint-plugin-destructuring-newline';
import importPlugin from 'eslint-plugin-import';

const eslintConfig = [
  ...nextVitals,
  {
    plugins: {
      '@stylistic': stylisticPlugin,
      'destructuring-newline': destructuringNewlinePlugin,
      import: importPlugin,
    },
    rules: {
      // Stylistic rules
      '@stylistic/indent': [
        'error',
        2,
      ],
      '@stylistic/quotes': [
        'error',
        'single',
      ],
      '@stylistic/jsx-quotes': [
        'error',
        'prefer-double',
      ],
      '@stylistic/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          children: true,
        },
      ],
      '@stylistic/jsx-curly-newline': [
        'error',
        'never',
      ],
      '@stylistic/jsx-one-expression-per-line': [
        'error',
        { allow: 'literal' },
      ],
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'ignore',
        },
      ],
      '@stylistic/no-extra-parens': [
        'error',
        'all',
        {
          ignoreJSX: 'multi-line',
          nestedBinaryExpressions: false,
          nestedConditionalExpressions: false,
          ternaryOperandBinaryExpressions: false,
        },
      ],
      '@stylistic/operator-linebreak': [
        'error',
        'before',
        { overrides: { '=': 'after' } },
      ],
      '@stylistic/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'allow',
        },
      ],
      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],
      '@stylistic/eol-last': [
        'error',
        'always',
      ],
      '@stylistic/no-trailing-spaces': [
        'error',
      ],
      '@stylistic/semi': [
        'error',
        'always',
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      '@stylistic/object-property-newline': [
        'error',
        { 'allowAllPropertiesOnSameLine': false },
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 2,
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 2,
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 2,
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 2,
          },
        },
      ],
      '@stylistic/exp-list-style': [
        'error',
        {
          overrides: {
            '()': 'off',
            '[]': 'off',
            '{}': 'off',
            '<>': 'off',
            ImportDeclaration: {
              singleLine: {
                maxItems: 1,
                spacing: 'always',
              },
            },
            ExportNamedDeclaration: {
              singleLine: {
                maxItems: 1,
                spacing: 'always',
              },
            },
            ArrowFunctionExpression: {
              singleLine: {
                maxItems: 1,
                spacing: 'never',
              },
              multiline: { minItems: 2 },
            },
            FunctionDeclaration: {
              singleLine: {
                maxItems: 1,
                spacing: 'never',
              },
              multiline: { minItems: 2 },
            },
            FunctionExpression: {
              singleLine: {
                maxItems: 1,
                spacing: 'never',
              },
              multiline: { minItems: 2 },
            },
            TSDeclareFunction: {
              singleLine: {
                maxItems: 1,
                spacing: 'never',
              },
              multiline: { minItems: 2 },
            },
            TSFunctionType: {
              singleLine: {
                maxItems: 1,
                spacing: 'never',
              },
              multiline: { minItems: 2 },
            },
          },
        },
      ],
      '@stylistic/curly-newline': [
        'error',
        'always',
      ],
      '@stylistic/array-bracket-newline': [
        'error',
        { minItems: 1 },
      ],
      '@stylistic/array-element-newline': [
        'error',
        'always',
      ],
      '@stylistic/function-paren-newline': [
        'error',
        'multiline',
      ],
      'destructuring-newline/object-property-newline': 2,

      // Import rules
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          distinctGroup: false,
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react-*',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'next',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '*.css',
              group: 'object',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: [
            'react',
            'next',
          ],
          'newlines-between': 'always',
          named: {
            enabled: true,
            types: 'mixed',
          },
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // React rules
      'react/jsx-indent': [
        'error',
        2,
      ],
      'react/jsx-indent-props': [
        'error',
        2,
      ],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
          noSortAlphabetically: false,
        },
      ],
      'react/jsx-first-prop-new-line': [
        'error',
        'multiprop',
      ],
      'react/jsx-max-props-per-line': [
        'error',
        { maximum: 1 },
      ],
      'react/jsx-closing-bracket-location': [
        'error',
        'line-aligned',
      ],
    },
  },
];

export default eslintConfig;
