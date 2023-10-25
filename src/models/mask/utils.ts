import type {
  TISMatchNumberProps,
  TISOptionalMaskProps,
  TIsMaskProps
} from './types'

export const MASK = ({ translation }: TIsMaskProps) => {
  const checkIsPrimary = [!translation]
  return checkIsPrimary.every(Boolean)
}

export const NUMBER = ({ translation, valDigit }: TISMatchNumberProps) => {
  const checkIsPrimary = [
    !!translation && !!valDigit.match(translation.pattern),
    !!translation && !translation.optional
  ]
  return checkIsPrimary.every(Boolean)
}

export const OPTIONAL_NUMBER = ({
  translation,
  valDigit
}: TISOptionalMaskProps) => {
  const checkIsPrimary = [
    !!translation && !!valDigit.match(translation.pattern),
    !!translation && !!translation.optional
  ]

  return checkIsPrimary.every(Boolean)
}
