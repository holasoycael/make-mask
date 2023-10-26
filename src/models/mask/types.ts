export type TOptions = {
  reverse?: boolean
}

export type TCurrent = string[]

export type TLastMaskChar = undefined | string

export type TWalk =
  | 'MASK'
  | 'MASK_SAME'
  | 'NUMBER'
  | 'OPTIONAL_NUMBER'
  | 'OPTIONAL_VALUE'
  | 'SKIP'
