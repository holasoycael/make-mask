export type TPattern = {
  pattern: RegExp
  optional?: boolean
  recursive?: boolean
  fallback?: string
}

export type TPatterns = {
  [key: string]: TPattern | undefined
}
