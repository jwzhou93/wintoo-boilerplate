module.exports = function(api, options, preset) {
  if (options.vuex) {
    api.extendPackage({
      dependencies: {
        vuex: '^3.1.2'
      }
    })

    api.render('./template')
  }

  if (options.elementUI) {
    api.extendPackage({
      devDependencies: {
        'element-ui': '^2.13.0'
      }
    })
  }

  api.render({
    './.eslintrc.js': './template/_eslintrc.js',
    './.eslintignore': './template/_eslintignore',
    './.gitignore': './template/_gitignore',
    './.prettierrc.js': './template/_prettierrc.js'
  })
}