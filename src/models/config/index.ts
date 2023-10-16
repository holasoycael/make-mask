// types and interfaces
import type { TAddMethod, TMaskDigitPosArr, TPatterns } from './types'

class Config {
  patterns: TPatterns = {
    '0': { pattern: /\d/ },
    '9': { pattern: /\d/, optional: true },
    '#': { pattern: /\d/, recursive: true },
    A: { pattern: /[a-zA-Z0-9]/ },
    S: { pattern: /[a-zA-Z]/ }
  }

  get buf(): string[] {
    return []
  }

  addMethod: TAddMethod = 'push'

  pattern(current: string) {
    return this.patterns[current]
  }

  isCheck(v: number, m: number) {
    return (valLen: number, maskLen: number) => {
      return m < maskLen && v < valLen
    }
  }

  maskDigitPosArr(mask: string) {
    const patterns = this.patterns
    const data = Array.from(mask)
    return data.reduce<TMaskDigitPosArr>((prev, current, i) => {
      if (!patterns[current]) return [...prev, i]
      return prev
    }, [])
  }
}

export default Config
