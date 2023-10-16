export type TPatterns = {
  [key: string]: {
    pattern: RegExp
    optional?: boolean
    recursive?: boolean
  }
}

export type TMaskDigitPosArr = number[]

export type TAddMethod = 'push' | 'unshift'
