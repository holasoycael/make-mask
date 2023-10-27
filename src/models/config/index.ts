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

  get addMethod(): 'push' | 'unshift' {
    return 'push'
  }

  pattern(current: string) {
    return this.patterns[current]
  }
}

export default Config
