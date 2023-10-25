# `Make Mask`

#### `0` — Dígitos
> Somente números

#### `9` — Dígitos opcionais
> Um número que pode ser opcional

```js
mask('1270', '099.099.099.099') // 127.0
mask('127.0.', '099.099.099.099') // 127.0.
mask('127.0.0', '099.099.099.099') // 127.0.0
mask('127.0.0.1', '099.099.099.099') // 127.0.0.1
```

#### `#` — Dígitos recursivos
#### `#` — Dígitos alternativos
> Este indica um número que se repete, infinitamente, o que

#### `A` — Números e Letras
> Letras maiscula, minusculas ou números

#### `S` — Letras (A-Za-z)
> Letras maiscula, minusculas
