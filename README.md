<div align="center">
  <div>
    <img width="500" src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1532274184/Dimer_Readme_Banner_lyy7wv.svg" alt="Dimer App">
  </div>
  <br>
  <p>
    <a href="https://dimerapp.com/what-is-dimer">
      Dimer is an open source project and CMS to help you publish your documentation online.
    </a>
  </p>
  <br>
  <p>
    <sub>We believe every project/product is incomplete without documentation. <br /> We want to help you publish user facing documentation, without worrying <code>about tools or code</code> to write.</sub>
  </p>
  <br>
</div>

# Dimer cli utils
> Handy utils for Dimer CLI.

[![travis-image]][travis-url]
[![npm-image]][npm-url]

There's no need for this package. But I am finding myself creating more small packages, over sticking everything to one repo.

![](https://res.cloudinary.com/adonisjs/image/upload/v1533170244/Screen_Shot_2018-08-02_at_12.14.06_AM_w0chde.png)

## Installation
```js
npm i @dimerapp/cli-utils

# Yarn
yarn add @dimerapp/cli-utils
```

## API

<dl>
<dt><a href="#info">info(message, [newLine])</a> ⇒ <code>void</code></dt>
<dd><p>Prints info message in yellow color</p>
</dd>
<dt><a href="#error">error(error, [newLine])</a> ⇒ <code>void</code></dt>
<dd><p>Prints error message in red color</p>
</dd>
<dt><a href="#attention">attention(message, [newLine])</a> ⇒ <code>void</code></dt>
<dd><p>Prints message with <code>Attention</code> label in
magenta color</p>
</dd>
<dt><a href="#action">action(action, message)</a> ⇒ <code>void</code></dt>
<dd><p>Prints action in cyan color with it&#39;s message</p>
</dd>
<dt><a href="#wrapInBraces">wrapInBraces(lhs, rhs, [newLine])</a> ⇒ <code>void</code></dt>
<dd><p>Wrap a statement with <code>lhs</code> and <code>rhs</code> inside
braces style</p>
</dd>
<dt><a href="#versionsProgress">versionsProgress(versions)</a> ⇒ <code>void</code></dt>
<dd><p>Log updates for multiple versions. The log will re-write on
the same lines.</p>
<p>A version node must have.</p>
<ul>
<li>no</li>
<li>processed</li>
<li>total</li>
</ul>
</dd>
<dt><a href="#filesErrors">filesErrors(basePath, errors)</a> ⇒ <code>void</code></dt>
<dd><p>Print all errors for multiple files. Errors must be part
of <code>vfile</code> messages.</p>
<p>Base path is required to shorten the file names</p>
</dd>
<dt><a href="#configErrors">configErrors(errors)</a> ⇒ <code>void</code></dt>
<dd><p>Print config errors produced by <code>@dimerapp/config-parser</code></p>
</dd>
</dl>

<a name="info"></a>

## info(message, [newLine]) ⇒ <code>void</code>
Prints info message in yellow color

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| message | <code>String</code> |  | 
| [newLine] | <code>Boolean</code> | <code>false</code> | 

<a name="error"></a>

## error(error, [newLine]) ⇒ <code>void</code>
Prints error message in red color

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| error | <code>Error</code> \| <code>String</code> |  | 
| [newLine] | <code>Boolean</code> | <code>false</code> | 

<a name="attention"></a>

## attention(message, [newLine]) ⇒ <code>void</code>
Prints message with `Attention` label in
magenta color

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| message | <code>String</code> |  | 
| [newLine] | <code>Boolean</code> | <code>false</code> | 

<a name="action"></a>

## action(action, message) ⇒ <code>void</code>
Prints action in cyan color with it's message

**Kind**: global function  

| Param | Type |
| --- | --- |
| action | <code>String</code> | 
| message | <code>String</code> | 

<a name="wrapInBraces"></a>

## wrapInBraces(lhs, rhs, [newLine]) ⇒ <code>void</code>
Wrap a statement with `lhs` and `rhs` inside
braces style

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| lhs | <code>String</code> |  | 
| rhs | <code>String</code> |  | 
| [newLine] | <code>Boolean</code> | <code>false</code> | 

<a name="versionsProgress"></a>

## versionsProgress(versions) ⇒ <code>void</code>
Log updates for multiple versions. The log will re-write on
the same lines.

A version node must have.

- no
- processed
- total

**Kind**: global function  

| Param | Type |
| --- | --- |
| versions | <code>Array</code> | 

<a name="filesErrors"></a>

## filesErrors(basePath, errors) ⇒ <code>void</code>
Print all errors for multiple files. Errors must be part
of `vfile` messages.

Base path is required to shorten the file names

**Kind**: global function  

| Param | Type |
| --- | --- |
| basePath | <code>String</code> | 
| errors | <code>Array</code> | 

<a name="configErrors"></a>

## configErrors(errors) ⇒ <code>void</code>
Print config errors produced by `@dimerapp/config-parser`

**Kind**: global function  

| Param | Type |
| --- | --- |
| errors | <code>Array</code> | 

## Change log

The change log can be found in the [CHANGELOG.md](https://github.com/dimerapp/cli-utils/CHANGELOG.md) file.

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](CONTRIBUTING.md).

## Authors & License
[thetutlage](https://github.com/thetutlage) and [contributors](https://github.com/dimerapp/cli-utils/graphs/contributors).

MIT License, see the included [MIT](LICENSE.md) file.

[travis-image]: https://img.shields.io/travis/dimerapp/cli-utils/master.svg?style=flat-square&logo=travis
[travis-url]: https://travis-ci.org/dimerapp/cli-utils "travis"

[npm-image]: https://img.shields.io/npm/v/@dimerapp/cli-utils.svg?style=flat-square&logo=npm
[npm-url]: https://npmjs.org/package/@dimerapp/cli-utils "npm"
