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
      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],
      '@stylistic/eol-last': [
        'error',
        'always',
      ],
      '@stylistic/semi': [
        'error',
        'always',
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
      '@stylistic/curly-newline': [
        'error',
        'always',
      ],
      '@stylistic/array-bracket-newline': [
        'error',
        'always',
      ],
      '@stylistic/array-element-newline': [
        'error',
        'always',
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
        'multiline',
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
