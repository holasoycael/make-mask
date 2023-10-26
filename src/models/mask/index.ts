// models
import Config from '@models/config'

// utils
// import { OPTIONAL_NUMBER, MASK, NUMBER } from './utils'
import tools from '@utils/tools'

// types and interfaces
import { TLastMaskChar, TWalk } from './types'

function maskFn(value: string, mask: string) {
  const config = new Config()
  const buf = config.buf
  const maskList = config.maskList(mask)

  // console.log(maskList)

  let v = 0
  let m = 0
  let lastMaskChar: TLastMaskChar = undefined
  const offset = 1
  const maskDigitPosArr = []
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
    const n = config.getNextMask(m)(maskList)

    const checkIsMask = [!translation]

    const checkIsMaskSkip = [!translation, valDigit === maskDigit]

    const checkIsNumber = [
      !!translation && !!valDigit.match(translation.pattern),
      !!translation && !translation.optional,
      maskDigit === '0'
    ]

    const checkIsOptionalNumber = [
      !!translation && !!valDigit.match(translation.pattern),
      !!translation && !!translation.optional
    ]

    const checkIsOptionalValue = [
      !!translation && !!translation.optional,
      mask.charAt(n) === valDigit,
      lastMaskChar !== valDigit
    ]

    const walkFn = ((): TWalk => {
      if (tools.isValid(checkIsMaskSkip)) return 'MASK_SAME'
      if (tools.isValid(checkIsMask)) return 'MASK'
      else if (tools.isValid(checkIsNumber)) return 'NUMBER'
      else if (tools.isValid(checkIsOptionalValue)) return 'OPTIONAL_VALUE'
      else if (tools.isValid(checkIsOptionalNumber)) return 'OPTIONAL_NUMBER'
      else return 'SKIP'
    })()

    // console.clear()

    console.group(i, walkFn, buf, tools.isValid(checkIsMaskSkip), maskList)
    console.log(v, valDigit, value)
    console.log(m, maskDigit, mask, lastMaskChar, maskDigitPosArr)

    // eslint-disable-next-line no-case-declarations

    switch (walkFn) {
      case 'NUMBER':
        buf.push(valDigit)
        lastMaskChar = undefined
        v += offset
        m += offset
        break
      case 'OPTIONAL_NUMBER':
        lastMaskChar = undefined
        buf.push(valDigit)
        v += offset
        m += offset
        break
      case 'OPTIONAL_VALUE':
        console.log(n, mask.charAt(n), checkIsOptionalValue)

        lastMaskChar = valDigit
        buf.push(valDigit)
        v += offset
        m += offset
        break
      case 'MASK_SAME':
        buf.push(maskDigit)
        v += offset
        m += offset
        break
      case 'MASK':
        maskDigitPosArr.push(v)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        lastMaskChar = maskDigit
        buf.push(maskDigit)
        m += offset
        break
      default:
        v += offset
        m += offset
    }

    console.log(translation, buf)
    console.groupEnd()
  }

  console.log('%c Oh my heavens! ', 'background: #222; color: #bada55')

  const newVal = buf.join('')
  return newVal
}

const mask = maskFn

export { mask }
