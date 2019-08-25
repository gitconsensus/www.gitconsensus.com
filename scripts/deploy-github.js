const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'public',
    repo: 'https://github.com/gitconsensus/www.gitconsensus.com'
  },
  () => {
    console.log('Deploy Complete!')
  }
)