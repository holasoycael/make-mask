// models
import Config from '@models/config'

// types and interfaces
import { TOptions } from './types'

function maskFn(value: string, mask: string, options: TOptions = {}) {
  const config = new Config()
  const buf = config.buf

  let m = 0
  let v = 0
  const maskLen = mask.length
  const valLen = value.length
  let offset = 1
  let addMethod = config.addMethod
  let resetPos = -1
  let maskDigitCount = 0
  const maskDigitPosArr = []
  let lastMaskChar: number
  let check: () => boolean

  if (options.reverse) {
    addMethod = 'unshift'
    offset = -1
    lastMaskChar = 0
    m = maskLen - 1
    v = valLen - 1
    check = function () {
      return m > -1 && v > -1
    }
  } else {
    lastMaskChar = maskLen - 1
    check = function () {
      return m < maskLen && v < valLen
    }
  }

  let lastUntranslatedMaskChar
  while (check()) {
    const maskDigit = mask.charAt(m)
    const valDigit = value.charAt(v)
    const translation = config.patterns[maskDigit]

    if (translation) {
      if (valDigit.match(translation.pattern)) {
        buf[addMethod](valDigit)
        if (translation.recursive) {
          if (resetPos === -1) {
            resetPos = m
          } else if (m === lastMaskChar && m !== resetPos) {
            m = resetPos - offset
          }

          if (lastMaskChar === resetPos) {
            m -= offset
          }
        }
        m += offset
      } else if (valDigit === lastUntranslatedMaskChar) {
        maskDigitCount--
        lastUntranslatedMaskChar = undefined
      } else if (translation.optional) {
        m += offset
        v -= offset
      } else if (translation.fallback) {
        buf[addMethod](translation.fallback)
        m += offset
        v -= offset
      }
      v += offset
    } else {
      buf[addMethod](maskDigit)

      if (valDigit === maskDigit) {
        maskDigitPosArr.push(v)
        v += offset
      } else {
        lastUntranslatedMaskChar = maskDigit
        maskDigitPosArr.push(v + maskDigitCount)
        maskDigitCount++
      }

      m += offset
    }
  }

  const lastMaskCharDigit = mask.charAt(lastMaskChar)
  if (maskLen === valLen + 1 && !config.patterns[lastMaskCharDigit]) {
    buf.push(lastMaskCharDigit)
  }

  const newVal = buf.join('')
  return newVal
}

const mask = maskFn

export { mask }
