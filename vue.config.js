// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//     publicPath: `/furniture-store/`,
//     transpileDependencies: true,
// })

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/furniture-store/' : '/',
    // outputDir: 'docs',
    filenameHashing: false,
    chainWebpack: (config) => {
        config.module.rules.delete('eslint')
    },
})
