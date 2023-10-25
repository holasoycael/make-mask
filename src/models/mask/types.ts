import type { TPattern } from '@models/config/types'

export type TOptions = {
  reverse?: boolean
}

export type TCurrent = string[]

export type TWalk = 'NUMBER' | 'OPTIONAL_NUMBER' | 'MASK' | 'SKIP'

export type TISMatchNumberProps = {
  translation?: TPattern
  valDigit: string
}

export type TIsMaskProps = {
  translation?: TPattern
}

export type TISOptionalMaskProps = {
  translation?: TPattern
  valDigit: string
}
