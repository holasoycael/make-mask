export type TPattern = {
  pattern: RegExp
  optional?: boolean
  recursive?: boolean
}

export type TPatterns = {
  [key: string]: TPattern | undefined
}
