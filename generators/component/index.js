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
	actions: () => {
		const componentGeneratePath = 'src/components/{{folder}}'
		return [
			{
				type: 'add',
				path: componentGeneratePath + '/{{properCase name}}/index.ts',
				templateFile: 'generators/component/index.ts.hbs'
			},
			{
				type: 'add',
				path:
					componentGeneratePath +
					'/{{properCase name}}/{{properCase name}}.tsx',
				templateFile: 'generators/component/Component.tsx.hbs'
			},
			{
				type: 'add',
				path:
					componentGeneratePath +
					'/{{properCase name}}/{{properCase name}}.stories.tsx',
				templateFile: 'generators/component/Component.stories.tsx.hbs'
			}
		]
	}
}
