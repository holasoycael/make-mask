type TOptions = {
  reverse?: boolean | undefined
}

declare module 'make-mask' {
  export default function mask(
    value: string,
    mask: string,
    options?: TOptions
  ): string
}
