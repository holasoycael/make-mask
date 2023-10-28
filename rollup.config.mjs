import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import fs, { readFileSync, copyFileSync } from 'fs'

const files = [
  {
    fileInput: './package.json',
    fileOutput: './lib/package.json',
    onBuild: (context, setContext) => {
      const current = JSON.parse(context)

      delete current['scripts']
      delete current['lint-staged']
      delete current['husky']

      current.main = './index.js'

      const snapshot = JSON.stringify(current, null, 2)

      setContext(snapshot)
    }
  },
  {
    fileInput: './CHANGELOG.md',
    fileOutput: './lib/CHANGELOG.md'
  },
  {
    fileInput: './CONTRIBUTING.md',
    fileOutput: './lib/CONTRIBUTING.md'
  },
  {
    fileInput: './LICENSE.md',
    fileOutput: './lib/LICENSE.md'
  },
  {
    fileInput: './README.md',
    fileOutput: './lib/README.md'
  },
  {
    fileInput: './index.d.ts',
    fileOutput: './lib/index.d.ts',
    action: 'COPY'
  },
  {
    fileInput: './.npmignore',
    fileOutput: './lib/.npmignore',
    action: 'COPY'
  }
]

Promise.all(
  files.map(async (data) => {
    const fileInput = data.fileInput
    const fileOutput = data.fileOutput
    const onBuild = data.onBuild
    const action = data.action

    let currentSnapshot = ''

    const onBack = (snapshot) => {
      currentSnapshot = snapshot
    }

    if (action === 'COPY') {
      try {
        // Copia o arquivo "origem.txt" para "destino.txt"
        copyFileSync(fileInput, fileOutput)
        console.log('Arquivo copiado com sucesso!')
      } catch (err) {
        console.error('Erro ao copiar o arquivo:', err)
      }
    } else {
      const current = readFileSync(fileInput, { encoding: 'utf8' })

      if (onBuild) onBuild(current, onBack)
      else onBack(current)

      const writeStream = fs.createWriteStream(fileOutput)
      writeStream.write(currentSnapshot)
      writeStream.end()
    }
  })
)

export default async () => {
  return defineConfig([
    // ✔️ Client-side (Minified)
    {
      input: 'src/index.ts',
      output: {
        sourcemap: false,
        file: `lib/dist/make.min.js`,
        format: 'umd',
        name: 'mask'
      },
      plugins: [
        typescript({
          declaration: false,
          exclude: ['src/typings/**', 'src/models/**/types.ts', '**/test.ts']
        }),
        terser()
      ]
    },

    // ✔️ server-side
    {
      input: 'src/index.ts',
      output: [
        {
          sourcemap: false,
          file: 'lib/index.js',
          format: 'cjs'
        }
      ],
      plugins: [
        nodeResolve(),
        commonjs(),
        typescript({
          tsconfig: 'tsconfig.json',
          declaration: false,
          exclude: ['src/**/*.test.ts']
        }),
        babel({
          babelHelpers: 'bundled',
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          exclude: ['node_modules/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current'
                }
              }
            ],
            '@babel/preset-typescript'
          ],
          plugins: [
            [
              'module-resolver',
              {
                alias: {
                  '@helpers': './src/helpers',
                  '@models': './src/models',
                  '@modules': './src/modules',
                  '@utils': './src/utils',
                  '@typings': './src/typings'
                }
              }
            ]
          ]
        }),
        alias({
          entries: [
            { find: '@helpers', replacement: `${process.cwd()}/src/helpers` },
            { find: '@models', replacement: `${process.cwd()}/src/models` },
            { find: '@modules', replacement: `${process.cwd()}/src/modules` },
            { find: '@utils', replacement: `${process.cwd()}/src/utils` },
            { find: '@typings', replacement: `${process.cwd()}/src/typings` }
          ],
          customResolver: {
            moduleResolveRoots: [`${process.cwd()}/src`]
          }
        })
      ]
    }
  ])
}
