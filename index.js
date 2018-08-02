/*
* cli-utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

const chalk = require('chalk')
const logUpdate = require('log-update')
const terminalLink = require('terminal-link')
const logSymbols = require('log-symbols')

const utils = exports = module.exports = {}

function padString (value, minWidth, prefix) {
  const actualWidth = String(value).length
  const diff = (minWidth - actualWidth) + 1
  return prefix ? `${new Array(diff).join(' ')}${value}` : `${value}${new Array(diff).join(' ')}`
}

function printLine (newLine) {
  if (newLine) {
    console.log('')
  }
}

function beautify (lhs, rhs) {
  return chalk`{cyan ${lhs} => {dim ${rhs}}}`
}

/**
 * Prints info message in yellow color
 *
 * @method info
 *
 * @param  {String}  message
 * @param  {Boolean} [newLine = false]
 *
 * @return {void}
 */
utils.info = function (message, newLine) {
  printLine(newLine)
  console.log(chalk`{yellow ${message}...}`)
}

/**
 * Prints error message in red color
 *
 * @method error
 *
 * @param  {Error|String} error
 * @param  {Boolean} [newLine = false]
 *
 * @return {void}
 */
utils.error = function (error, newLine) {
  printLine(newLine)

  const message = error.message ? error.message : error
  console.log(chalk`{red ERROR:} ${message}`)
}

/**
 * Prints message with `Attention` label in
 * magenta color
 *
 * @method attention
 *
 * @param  {String}  message
 * @param  {Boolean} [newLine = false]
 *
 * @return {void}
 */
utils.attention = function (message, newLine) {
  printLine(newLine)

  console.log(chalk`{magenta IMPORTANT:} ${message}`)
}

/**
 * Prints action in cyan color with it's message
 *
 * @method action
 *
 * @param  {String} action
 * @param  {String} message
 *
 * @return {void}
 */
utils.action = function (action, message) {
  console.log(chalk`{cyan ${action}:} ${message}`)
}

/**
 * Wrap a statement with `lhs` and `rhs` inside
 * braces style
 *
 * @method wrapInBraces
 *
 * @param  {String}      lhs
 * @param  {String}      rhs
 * @param  {Boolean}     [newLine = false]
 *
 * @return {void}
 */
utils.wrapInBraces = function (lhs, rhs, newLine) {
  printLine(newLine)
  console.log(beautify(`{${lhs}}`, rhs))
}

/**
 * Log updates for multiple versions. The log will re-write on
 * the same lines.
 *
 * A version node must have.
 *
 * - no
 * - processed
 * - total
 *
 * @method versionsProgress
 *
 * @param  {Array}         versions
 *
 * @return {void}
 */
utils.versionsProgress = function (versions) {
  if (!versions.length) {
    return
  }

  const lhsNodes = versions.map(({ no }) => `{Version ${no}}`)

  const largestTotal = Math.max(...versions.map(({ total }) => String(total).length))
  const largestProcessed = Math.max(...versions.map(({ processed }) => String(processed).length))
  const largestLhsNode = Math.max(...lhsNodes.map((node) => node.length))

  const rhsNodes = versions.map(({ processed, total }) => {
    const prefix = processed === total ? `processed ` : `processing`
    return `${prefix} ${padString(processed, largestProcessed, true)} of ${padString(total, largestTotal, true)}`
  })

  const messages = lhsNodes.map((v, index) => {
    return beautify(padString(v, largestLhsNode), rhsNodes[index])
  })

  logUpdate([''].concat(messages).join('\n'))
}

/**
 * Print all errors for multiple files. Errors must be part
 * of `vfile` messages.
 *
 * Base path is required to shorten the file names
 *
 * @method filesErrors
 *
 * @param  {String}    basePath
 * @param  {Array}    errors
 *
 * @return {void}
 */
utils.filesErrors = function (basePath, errors) {
  if (!errors.length) {
    return
  }

  const names = errors.map(({ name }) => `(${name.replace(`${basePath}/`, '')})`)

  const largestName = Math.max(...names.map((name) => name.length))
  const largestMessage = Math.max(...errors.map(({ message }) => message.length))

  const errorMessages = names.map((name, index) => {
    const error = errors[index]
    const url = `https://github.com/dimerapp/rules/blob/master/${error.ruleId}.md`
    const link = error.ruleId ? terminalLink(chalk.dim(error.ruleId), url) : ''
    const symbol = error.fatal ? logSymbols.error : logSymbols.warning

    return chalk`${symbol}  {dim ${padString(name, largestName)}} ${padString(error.message, largestMessage)} ${link}`
  })

  console.log([''].concat(errorMessages).join('\n'))
}

/**
 * Print config errors produced by `@dimerapp/config-parser`
 *
 * @method configErrors
 *
 * @param  {Array}     errors
 *
 * @return {void}
 */
utils.configErrors = function (errors) {
  if (!errors.length) {
    return
  }

  const messages = errors.map(({ key, message }) => {
    return chalk`{red   "${key.join('/')}": "${message}"}`
  })

  console.log(
    ['', chalk.red('```dimer.json'), chalk.red('{')]
      .concat(messages)
      .concat([chalk.red('}'), chalk.red('```')])
      .join('\n')
  )
}
