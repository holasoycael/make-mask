// models
import Config from '@models/config'
import { TWalk } from './types'
import { OPTIONAL_NUMBER, MASK, NUMBER } from './utils'

function maskFn(value: string, mask: string) {
  const config = new Config()
  const buf = config.buf

  let v = 0
  let m = 0
  const offset = 1
  const valLen = value.length
  const maskLen = mask.length
  let isCheck = () => false

  isCheck = () => m < maskLen && v < valLen

  let i = 0

  while (isCheck()) {
    i++

    const valDigit = value.charAt(v)
    const maskDigit = mask.charAt(m)
    const translation = config.patterns[maskDigit]

    // console.log(i, valDigit, v, '       ', translation)

    // console.group(i, `${value}========${mask}`)
    // console.log(v, value, valDigit)
    // console.log(m, mask, maskDigit)

    const IS_NUMBER = NUMBER({ translation, valDigit })
    const IS_OPTIONAL_NUMBER = OPTIONAL_NUMBER({ translation, valDigit })
    const IS_MASK = MASK({ translation })

    const walkFn = ((): TWalk => {
      if (IS_MASK) return 'MASK'
      else if (IS_NUMBER) return 'NUMBER'
      else if (IS_OPTIONAL_NUMBER) return 'OPTIONAL_NUMBER'
      else return 'SKIP'
    })()

    console.clear()

    console.group(i, walkFn, buf)
    console.log(v, valDigit, value)
    console.log(m, maskDigit, mask)

    switch (walkFn) {
      case 'MASK':
        buf.push(maskDigit)
        m += offset
        break
      case 'NUMBER':
        buf.push(valDigit)
        v += offset
        m += offset
        break
      case 'OPTIONAL_NUMBER':
        buf.push(valDigit)
        v += offset
        m += offset
        break
      default:
        v += offset
        m += offset
    }

    console.log(translation, buf)
    console.groupEnd()
  }

  const newVal = buf.join('')
  return newVal
}

const mask = maskFn

export { mask }
