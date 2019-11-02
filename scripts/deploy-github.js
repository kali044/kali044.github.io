const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/kali044/kali044.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)