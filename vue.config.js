// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


// vue.config.js
//This will use a ternary to redirect us to the right build.
// we need a build environment variable when running this.
// All Github pages environment variables must start with VUE_APP_
const REPO_NAME="congress-tracker"
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/'
}