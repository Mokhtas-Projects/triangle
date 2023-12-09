const componentGenerator = require('./generators/component/index')
const pageGenerator = require('./generators/page/index')

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
	plop.setGenerator('component', componentGenerator)
	plop.setGenerator('page', pageGenerator)
}
