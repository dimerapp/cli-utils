const utils = require('.')
const { join } = require('path')

console.log('')

utils.info('syncing config')
utils.info('syncing versions')

console.log('')
console.log('')

utils.error(new Error('version no was required'))
utils.attention('Version directory was removed. Make sure to remove reference from config')

console.log('')
console.log('')

utils.action('change', 'intro.md')
utils.action('unlink', 'intro.md')

console.log('')
console.log('')
utils.wrapInBraces('bbfb11929291bfb.png', '32kb')

console.log('')
utils.versionsProgress([
  {
    no: '1.0.0',
    total: 20,
    processed: 10
  },
  {
    no: 'master',
    total: 10,
    processed: 10
  }
])

console.log('')
utils.filesErrors(__dirname, [
  {
    name: `${join(__dirname, 'intro.md')}:1:8`,
    ruleId: 'bad-permalink',
    message: 'Unallowed characters in permalink'
  },
  {
    name: `${join(__dirname, 'foo.md')}:1:8`,
    ruleId: 'duplicate-permalink',
    message: 'intro.md uses the same permalink'
  },
  {
    name: `${join(__dirname, 'holla.md')}:1:8`,
    ruleId: null,
    fatal: true,
    message: 'Blows up'
  }
])

console.log('')
utils.configErrors([
  {
    key: ['domain'],
    message: 'Message sure to define domain'
  },
  {
    key: ['versions', '1.0.0'],
    message: 'Missing directory for version 1.0.1'
  }
])
