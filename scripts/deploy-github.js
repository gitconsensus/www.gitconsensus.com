const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:gitconsensus/www.gitconsensus.com.git'
  },
  () => {
    console.log('Deploy Complete!')
  }
)