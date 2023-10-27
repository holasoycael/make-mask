import { useState } from 'react'

// models
import { mask as maskFn } from '@models/mask'

// types and interfaces
import { AppProps } from './types'

function App({ current, mask, placeholder, options }: AppProps) {
  const [value, setValue] = useState(current)

  const inputFn = (current: string) => setValue(current)

  return (
    <div>
      <input
        type="tel"
        data-testid="input"
        value={maskFn(value, mask, options)}
        onChange={(e) => inputFn(e.currentTarget.value)}
        {...{ placeholder }}
      />
    </div>
  )
}

export default App
