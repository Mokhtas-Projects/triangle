/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
	description: 'Page Generator',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'Page name?'
		}
	],
	actions: (data) => {
		const changeCase = require('change-case')
		data.kebabCaseName = changeCase.paramCase(data.name)
		data.pascalCaseName = changeCase.pascalCase(data.name)

		const pageGeneratePath = 'src/app/{{kebabCaseName}}'
		return [
			{
				type: 'add',
				path: pageGeneratePath + '/page.tsx',
				templateFile: 'generators/page/page.tsx.hbs'
			},
			{
				type: 'add',
				path: pageGeneratePath + '/layout.tsx',
				templateFile: 'generators/page/layout.tsx.hbs'
			}
		]
	}
}
