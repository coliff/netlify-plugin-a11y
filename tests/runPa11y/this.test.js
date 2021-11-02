const path = require('path')

// actual test
const pluginCore = require('../../src/pluginCore')
test('runPa11y works', async () => {
	const results = await pluginCore.runPa11y({
		htmlFilePaths: [path.join(__dirname, 'publishDir/index.html')],
		build: { failBuild() {} },
	})
	expect(results).toMatchSnapshot()
})
