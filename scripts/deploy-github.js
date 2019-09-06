const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/gitconsensus/www.gitconsensus.com'
  },
  () => {
    console.log('Deploy Complete!')
  }
)