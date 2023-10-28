# `Make Mask`

[![NPM](https://img.shields.io/npm/l/make-mask)](https://www.npmjs.com/package/make-mask)
[![Coverage Status](https://coveralls.io/repos/github/holasoycael/make-mask/badge.svg?branch=main)](https://coveralls.io/github/holasoycael/make-mask?branch=main)
[![npm](https://img.shields.io/npm/v/make-mask)](https://www.npmjs.com/package/make-mask)
[![gzip size](https://img.badgesize.io/https://unpkg.com/make-mask/dist/make.min.js?compression=gzip)](https://unpkg.com/make-mask/dist/make.min.js)

`make-mask` is a lightweight javascript library of approximately 1kb for working with text masks. It was built to solve problems mainly in HTML inputs with javascript free from any other library. It was designed to solve inputs, but it is also valid when used to print texts in a simple and objective way. I guarantee a secure library covered with tests and open source!

It is very simple to use to create masks using the patterns below:

`0` — Digits<br />
Only numbers

`9` — Optional digits<br />
Indicates whether there will be a number or not

`#` — Recursive digits<br />
Use this pattern to create infinitely repeatable formulas

`A` — Letters and numbers<br />
Uppercase, lowercase letters and numbers

`S` — Letters<br />
Uppercase, lowercase letters

## Installing

Using npm:
```sh
npm install make-mask
```
Using yarn:
```sh
yarn add make-mask
```
Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/make-mask/dist/make.min.js"></script>
```
Using unpkg CDN:
```html
<script src="https://unpkg.com/make-mask/dist/make.min.js"></script>
```

## Usage
* [Vanilla JS](https://stackblitz.com/edit/vanillajs-make-mask) → [Preview](https://vanillajs-make-mask.stackblitz.io/)
* [React](https://stackblitz.com/edit/react-make-mask) → [Preview](https://react-make-mask.stackblitz.io/)

#
### Default function arguments

It's very simple to use!

```ts
import mask from 'make-mask'

mask('12345678', '00000-000') // => 12345-678
```

Type information about the function

```ts
/**
 * Returns the transformed value
 * @param   {string} value    original value
 * @param   {string} mask     syntax pattern
 * @param   {object} options  options object
 * @return  {string}          mask result
*/
fn(value, mask[ , options]): string
```



### Most common examples

### `Date `

```js
mask('27101', '00/00/0000')     // => 27/10/1
mask('271018', '00/00/0000')    // => 27/10/18
mask('2710182', '00/00/0000')   // => 27/10/182
mask('27101820', '00/00/0000')  // => 27/10/1820
```

### `Hour`

```js
mask('203', '00:00:00')     // => 20:3
mask('2039', '00:00:00')    // => 20:39
mask('20392', '00:00:00')   // => 20:39:2
mask('203922', '00:00:00')  // => 20:39:22
```

### `ZIP Code`

```js
mask('01310', '00000-000')    // => 01310
mask('013109', '00000-000')   // => 01310-9
mask('0131093', '00000-000')  // => 01310-93
mask('01310930', '00000-000') // => 01310-930
```

### `Money`

```js
const options = { reverse: true }
mask('6689', '#.##0,00', options)     // => 66,89
mask('66899', '#.##0,00', options)    // => 668,99
mask('668993', '#.##0,00', options)   // => 6.689,93
mask('6689932', '#.##0,00', options)  // => 66.899,32
```

### `Telephone with DDD`

```js
const m = '(00) 0000-0000'
mask('11994132', m)     // => (11) 9413-2
mask('119941325', m)    // => (11) 9413-25
mask('1199413256', m)   // => (11) 9413-256
mask('11994132568', m)  // => (11) 9413-2568
```

### `CPF`

```js
const options = { reverse: true }
const m = '000.000.000-00'
mask('6698', m, options)    // => 66-98
mask('66980', m, options)   // => 669-80
mask('669809', m, options)  // => 6.698-09
mask('6698090', m, options) // => 66.980-90
```

### `CNPJ`

```js
const options = { reverse: true }
const m = '00.000.000/0000-00'
mask('0000', m, options)    // => 00-00
mask('00001', m, options)   // => 000-01
mask('000016', m, options)  // => 0000-16
mask('0000168', m, options) // => 0/0001-68
```

### `IP Address`

```js
const m = '099.099.099.099'
mask('255255', m)       // => 255.255
mask('25525525', m)     // => 255.255.25
mask('2552552552', m)   // => 255.255.255.2
mask('255255255255', m) // => 255.255.255.255
```
