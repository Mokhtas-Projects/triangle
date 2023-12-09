/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
	description: 'Component Generator',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'component name'
		}
	],
	actions: (data) => {
		const changeCase = require('change-case')
		data.kebabCaseName = changeCase.paramCase(data.name)

		const componentGeneratePath = 'src/components/{{kebabCaseName}}'
		return [
			{
				type: 'add',
				path: componentGeneratePath + '/index.ts',
				templateFile: 'generators/component/index.ts.hbs'
			},
			{
				type: 'add',
				path: componentGeneratePath + '/{{kebabCaseName}}.tsx',
				templateFile: 'generators/component/component.tsx.hbs'
			},
			{
				type: 'add',
				path: componentGeneratePath + '/{{kebabCaseName}}.stories.tsx',
				templateFile: 'generators/component/component.stories.tsx.hbs'
			}
		]
	}
}
