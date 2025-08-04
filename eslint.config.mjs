import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next', 'next/core-web-vitals', 'next/typescript'],
		settings: {
			next: {
				rootDir: 'src/',
			},
		},
	}),
	{
		plugins: {
			import: importPlugin,
		},
		rules: {
			'indent': ['error', 'tab'],
			'no-tabs': 'off',
			'quotes': ['error', 'single'],
			'jsx-quotes': ['error', 'prefer-double'],
			'comma-dangle': ['error', 'always-multiline'],
			'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
			'eol-last': ['error', 'always'],
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
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
					pathGroupsExcludedImportTypes: ['react', 'next'],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	},
];

export default eslintConfig;
