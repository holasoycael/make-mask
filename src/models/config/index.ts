// types and interfaces
import type { TPatterns } from './types'

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

  maskList(mask: string) {
    return ((data) => {
      for (const [i, maskDigit] of Array.from(mask).entries()) {
        const translation = this.patterns[maskDigit]
        if (!translation) data.add(i)
      }

      return Array.from(data)
    })(new Set<number>())
  }

  getNextMask(m: number) {
    return (maskList: number[]) => {
      return maskList.filter((n) => m < n)[0] ?? -1
    }
  }

  pattern(current: string) {
    return this.patterns[current]
  }
}

export default Config
