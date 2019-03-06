const {
    override,
    fixBabelImports,
    addLessLoader,
} = require("customize-cra");
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: true
    }), // change importing css to less
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
        },
    })
);