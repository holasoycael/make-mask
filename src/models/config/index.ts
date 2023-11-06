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

  dataValue(value: string, mask: string, options: TOptions) {
    const checkIsAvailable = [options.reverse, Array.from(mask).includes('#')]
    const isAvailable = checkIsAvailable.every(Boolean)

    if (isAvailable) return value

    const current = value.substring(0, mask.length)

    return current
  }

  get addMethod(): 'push' | 'unshift' {
    return 'push'
  }

  pattern(current: string) {
    return this.patterns[current]
  }
}

export default Config
