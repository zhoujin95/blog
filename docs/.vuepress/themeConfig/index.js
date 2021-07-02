const nav = require('./nav')
const sidebar = require('./sidebar.json')
const markdown = require('./markdown')
const head = require('./head')
const plugins = require('./plugins')

module.exports = {
  head,
  markdown,
  plugins,
  themeConfig: {
    logo: '/logo.jpg',
    smoothScroll: true,
    nav,
    sidebar,
    lastUpdated: "Last Updated",
    sidebarDepth: 0,
    repo: "https://github.com/zhoujin95/blog",
    editLinks: false,
    footer: {
      createYear: 2021,
      copyrightInfo: 'staven | <a target="_blank" href="https://github.com/zhoujin95" target="_blank">MIT License</a>'
    },
    author: {
      name: 'staven',
      link: 'https://github.com/zhoujin95'
    }
  }
}
