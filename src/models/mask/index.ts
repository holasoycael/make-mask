// models
import Config from '@models/config'

// types and interfaces
import type { TOptions } from './types'

function maskFn(value: string, mask: string, options: TOptions = {}) {
  const config = new Config()
  const buf = config.buf
  const maskDigitPosArr = config.maskDigitPosArr(mask)

  // console.log(maskDigitPosArr)

  let v = 0
  let m = 0
  let offset = 1
  let lastMaskChar = -1
  const valLen = value.length
  const maskLen = mask.length
  const addMethod = config.addMethod
  let isCheck = () => false

  if (options.reverse) {
    config.addMethod = 'unshift'
    offset = -1
    lastMaskChar = 0
    m = maskLen - 1
    v = valLen - 1

    isCheck = () => m > -1 && v > -1
  } else {
    lastMaskChar = maskLen - 1
    isCheck = () => m < maskLen && v < valLen
  }

  while (isCheck()) {
    const valDigit = value.charAt(v)
    const maskDigit = mask.charAt(m)
    const translation = config.patterns[maskDigit]

    const isMask = maskDigitPosArr.includes(m)

    // console.log(index, buf, valDigit, maskDigit, isSkip)
    // console.log(buf, isMask, translation)

    if (translation) {
      // console.log(
      //   '==1==',
      //   v,
      //   valDigit,
      //   m,
      //   maskDigit,
      //   valDigit.match(translation.pattern)
      // )

      if (valDigit.match(translation.pattern)) {
        buf[addMethod](valDigit)

        v += offset
        m += offset
      } else {
        v += offset
      }
    } else {
      // console.log('==2==', v, valDigit, m, maskDigit)

      buf.push(maskDigit)

      if (isMask) {
        m += offset
      } else {
        v += offset
        m += offset
      }
    }
  }

  const lastMaskCharDigit = mask.charAt(lastMaskChar)
  if (maskLen === valLen + 1 && !config.patterns[lastMaskCharDigit]) {
    // console.log(lastMaskCharDigit)
    // buf.push(lastMaskCharDigit);
  }

  const newVal = buf.join('')

  // console.log(newVal)

  return newVal
}

const mask = maskFn

export { mask }
