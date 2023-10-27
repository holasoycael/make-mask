import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// modules
import { mask } from '@models/mask'

// helpers
import App from '@helpers/TestingLibrary'

describe('[Date]', () => {
  it('should return 1 when type 1', () => {
    expect(mask('1', '00/00/0000')).toEqual('1')
  })

  it('should return 12 when type 12', () => {
    expect(mask('12', '00/00/0000')).toEqual('12')
  })

  it('should return 12/3 when type 123', () => {
    expect(mask('123', '00/00/0000')).toEqual('12/3')
  })

  it('should return 12/34 when type 1234', () => {
    expect(mask('1234', '00/00/0000')).toEqual('12/34')
  })

  it('should return 12/34/5 when type 12345', () => {
    expect(mask('12345', '00/00/0000')).toEqual('12/34/5')
  })

  it('should return 12/34/56 when type 123456', () => {
    expect(mask('123456', '00/00/0000')).toEqual('12/34/56')
  })

  it('should return 12/34/567 when type 1234567', () => {
    expect(mask('1234567', '00/00/0000')).toEqual('12/34/567')
  })

  it('should return 12/34/5678 when type 12345678', () => {
    expect(mask('12345678', '00/00/0000')).toEqual('12/34/5678')
  })

  it('should return 12/34/5678 when type 123456789', () => {
    expect(mask('123456789', '00/00/0000')).toEqual('12/34/5678')
  })
})

describe('[Hour]', () => {
  it('should return 1 when type 1', () => {
    expect(mask('1', '00:00:00')).toEqual('1')
  })

  it('should return 12 when type 12', () => {
    expect(mask('12', '00:00:00')).toEqual('12')
  })

  it('should return 12:3 when type 123', () => {
    expect(mask('123', '00:00:00')).toEqual('12:3')
  })

  it('should return 12:34 when type 1234', () => {
    expect(mask('1234', '00:00:00')).toEqual('12:34')
  })

  it('should return 12:34:5 when type 12345', () => {
    expect(mask('12345', '00:00:00')).toEqual('12:34:5')
  })

  it('should return 12:34:56 when type 123456', () => {
    expect(mask('123456', '00:00:00')).toEqual('12:34:56')
  })

  it('should return 12:34:56 when type 1234567', () => {
    expect(mask('1234567', '00:00:00')).toEqual('12:34:56')
  })

  it('should return 12:34:56 when type 12345678', () => {
    expect(mask('12345678', '00:00:00')).toEqual('12:34:56')
  })

  it('should return 12:34:56 when type 123456789', () => {
    expect(mask('123456789', '00:00:00')).toEqual('12:34:56')
  })
})

describe('[Date & Hour]', () => {
  it('should return 1 when type 1', () => {
    expect(mask('1', '00/00/0000 00:00:00')).toEqual('1')
  })

  it('should return 12 when type 12', () => {
    expect(mask('12', '00/00/0000 00:00:00')).toEqual('12')
  })

  it('should return 12/3 when type 123', () => {
    expect(mask('123', '00/00/0000 00:00:00')).toEqual('12/3')
  })

  it('should return 12/34 when type 1234', () => {
    expect(mask('1234', '00/00/0000 00:00:00')).toEqual('12/34')
  })

  it('should return 12/34/5 when type 12345', () => {
    expect(mask('12345', '00/00/0000 00:00:00')).toEqual('12/34/5')
  })

  it('should return 12/34/56 when type 123456', () => {
    expect(mask('123456', '00/00/0000 00:00:00')).toEqual('12/34/56')
  })

  it('should return 12/34/567 when type 1234567', () => {
    expect(mask('1234567', '00/00/0000 00:00:00')).toEqual('12/34/567')
  })

  it('should return 12/34/5678 when type 12345678', () => {
    expect(mask('12345678', '00/00/0000 00:00:00')).toEqual('12/34/5678')
  })

  it('should return 12/34/5678 9 when type 123456789', () => {
    expect(mask('123456789', '00/00/0000 00:00:00')).toEqual('12/34/5678 9')
  })

  it('should return 12/34/5678 90 when type 1234567890', () => {
    expect(mask('1234567890', '00/00/0000 00:00:00')).toEqual('12/34/5678 90')
  })

  it('should return 12/34/5678 90:1 when type 12345678901', () => {
    expect(mask('12345678901', '00/00/0000 00:00:00')).toEqual(
      '12/34/5678 90:1'
    )
  })

  it('should return 12/34/5678 90:12 when type 123456789012', () => {
    expect(mask('123456789012', '00/00/0000 00:00:00')).toEqual(
      '12/34/5678 90:12'
    )
  })

  it('should return 12/34/5678 90:12:3 when type 1234567890123', () => {
    expect(mask('1234567890123', '00/00/0000 00:00:00')).toEqual(
      '12/34/5678 90:12:3'
    )
  })

  it('should return 12/34/5678 90:12:34 when type 12345678901234', () => {
    expect(mask('12345678901234', '00/00/0000 00:00:00')).toEqual(
      '12/34/5678 90:12:34'
    )
  })
})

describe('[ZIP Code]', () => {
  it('should return 1 when type 1', () => {
    expect(mask('1', '00000-000')).toEqual('1')
  })

  it('should return 12 when type 12', () => {
    expect(mask('12', '00000-000')).toEqual('12')
  })

  it('should return 123 when type 123', () => {
    expect(mask('123', '00000-000')).toEqual('123')
  })

  it('should return 1234 when type 1234', () => {
    expect(mask('1234', '00000-000')).toEqual('1234')
  })

  it('should return 12345 when type 12345', () => {
    expect(mask('12345', '00000-000')).toEqual('12345')
  })

  it('should return 12345-6 when type 123456', () => {
    expect(mask('123456', '00000-000')).toEqual('12345-6')
  })

  it('should return 12345-67 when type 1234567', () => {
    expect(mask('1234567', '00000-000')).toEqual('12345-67')
  })

  it('should return 12345-678 when type 12345678', () => {
    expect(mask('12345678', '00000-000')).toEqual('12345-678')
  })

  it('should return 12345-678 when type 123456789', () => {
    expect(mask('123456789', '00000-000')).toEqual('12345-678')
  })
})

describe('[Telephone]', () => {
  it('should return 1 when type 1', () => {
    expect(mask('1', '0000-0000')).toEqual('1')
  })

  it('should return 12 when type 12', () => {
    expect(mask('12', '0000-0000')).toEqual('12')
  })

  it('should return 123 when type 123', () => {
    expect(mask('123', '0000-0000')).toEqual('123')
  })

  it('should return 1234 when type 1234', () => {
    expect(mask('1234', '0000-0000')).toEqual('1234')
  })

  it('should return 1234-5 when type 12345', () => {
    expect(mask('12345', '0000-0000')).toEqual('1234-5')
  })

  it('should return 1234-56 when type 123456', () => {
    expect(mask('123456', '0000-0000')).toEqual('1234-56')
  })

  it('should return 1234-567 when type 1234567', () => {
    expect(mask('1234567', '0000-0000')).toEqual('1234-567')
  })

  it('should return 1234-5678 when type 12345678', () => {
    expect(mask('12345678', '0000-0000')).toEqual('1234-5678')
  })

  it('should return 1234-5678 when type 123456789', () => {
    expect(mask('123456789', '0000-0000')).toEqual('1234-5678')
  })
})

describe('[Telephone with Code Area]', () => {
  it('should return (1 when type 1', () => {
    expect(mask('1', '(00) 0000-0000')).toEqual('(1')
  })

  it('should return (12 when type 12', () => {
    expect(mask('12', '(00) 0000-0000')).toEqual('(12')
  })

  it('should return (12) 3 when type 123', () => {
    expect(mask('123', '(00) 0000-0000')).toEqual('(12) 3')
  })

  it('should return (12) 34 when type 1234', () => {
    expect(mask('1234', '(00) 0000-0000')).toEqual('(12) 34')
  })

  it('should return (12) 345 when type 12345', () => {
    expect(mask('12345', '(00) 0000-0000')).toEqual('(12) 345')
  })

  it('should return (12) 3456 when type 123456', () => {
    expect(mask('123456', '(00) 0000-0000')).toEqual('(12) 3456')
  })

  it('should return (12) 3456-7 when type 1234567', () => {
    expect(mask('1234567', '(00) 0000-0000')).toEqual('(12) 3456-7')
  })

  it('should return (12) 3456-78 when type 12345678', () => {
    expect(mask('12345678', '(00) 0000-0000')).toEqual('(12) 3456-78')
  })

  it('should return (12) 3456-789 when type 123456789', () => {
    expect(mask('123456789', '(00) 0000-0000')).toEqual('(12) 3456-789')
  })

  it('should return (12) 3456-7890 when type 1234567890', () => {
    expect(mask('1234567890', '(00) 0000-0000')).toEqual('(12) 3456-7890')
  })

  it('should return (12) 3456-7890 when type 12345678901', () => {
    expect(mask('12345678901', '(00) 0000-0000')).toEqual('(12) 3456-7890')
  })
})

describe('[US Telephone]', () => {
  it('should return (1 when type 1', () => {
    expect(mask('1', '(000) 000-0000')).toEqual('(1')
  })

  it('should return (12 when type 12', () => {
    expect(mask('12', '(000) 000-0000')).toEqual('(12')
  })

  it('should return (123  when type 123', () => {
    expect(mask('123', '(000) 000-0000')).toEqual('(123')
  })

  it('should return (123) 4 when type 1234', () => {
    expect(mask('1234', '(000) 000-0000')).toEqual('(123) 4')
  })

  it('should return (123) 45 when type 12345', () => {
    expect(mask('12345', '(000) 000-0000')).toEqual('(123) 45')
  })

  it('should return (123) 456 when type 123456', () => {
    expect(mask('123456', '(000) 000-0000')).toEqual('(123) 456')
  })

  it('should return (123) 456-7 when type 1234567', () => {
    expect(mask('1234567', '(000) 000-0000')).toEqual('(123) 456-7')
  })

  it('should return (123) 456-78 when type 12345678', () => {
    expect(mask('12345678', '(000) 000-0000')).toEqual('(123) 456-78')
  })

  it('should return (123) 456-789 when type 123456789', () => {
    expect(mask('123456789', '(000) 000-0000')).toEqual('(123) 456-789')
  })

  it('should return (123) 456-7890 when type 1234567890', () => {
    expect(mask('1234567890', '(000) 000-0000')).toEqual('(123) 456-7890')
  })

  it('should return (123) 456-7890 when type 12345678901', () => {
    expect(mask('12345678901', '(000) 000-0000')).toEqual('(123) 456-7890')
  })
})

describe('[Mixed Type Mask]', () => {
  it('should return 1 when type 1', () => {
    expect(mask('1', 'AAA 000-S0S')).toEqual('1')
  })

  it('should return 12 when type 12', () => {
    expect(mask('12', 'AAA 000-S0S')).toEqual('12')
  })

  it('should return 123  when type 123', () => {
    expect(mask('123', 'AAA 000-S0S')).toEqual('123')
  })

  it('should return 123 4 when type 1234', () => {
    expect(mask('1234', 'AAA 000-S0S')).toEqual('123 4')
  })

  it('should return 123 45 when type 12345', () => {
    expect(mask('12345', 'AAA 000-S0S')).toEqual('123 45')
  })

  it('should return 123 456 when type 123456', () => {
    expect(mask('123456', 'AAA 000-S0S')).toEqual('123 456')
  })

  it('should return 123 456-X when type 123456X', () => {
    expect(mask('123456X', 'AAA 000-S0S')).toEqual('123 456-X')
  })

  it('should return 123 456-X4 when type 123456X4', () => {
    expect(mask('123456X4', 'AAA 000-S0S')).toEqual('123 456-X4')
  })

  it('should return 123 456-X4Y when type 123456X4Y', () => {
    expect(mask('123456X4Y', 'AAA 000-S0S')).toEqual('123 456-X4Y')
  })

  it('should return 123 456-X4Y when type 123456X4Y1', () => {
    expect(mask('123456X4Y1', 'AAA 000-S0S')).toEqual('123 456-X4Y')
  })
})

describe('With input values', () => {
  it('Date - Type', async () => {
    render(<App current="1234" mask="00/00/0000" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12/34')

    await userEvent.type(input, '5678')

    expect(input.value).toBe('12/34/5678')

    await userEvent.type(input, '9')

    expect(input.value).toBe('12/34/5678')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('12/34/5')

    await userEvent.type(input, '!@')

    expect(input.value).toBe('12/34/5')

    await userEvent.type(input, '#$%')

    expect(input.value).toBe('12/34/5')

    await userEvent.type(input, '¨&*')

    expect(input.value).toBe('12/34/5')
  })

  it('Hour - Type', async () => {
    render(<App current="1234" mask="00:00:00" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12:34')

    await userEvent.type(input, '56')

    expect(input.value).toBe('12:34:56')

    await userEvent.type(input, '7')

    expect(input.value).toBe('12:34:56')

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('12:34:5')

    await userEvent.type(input, '!@')

    expect(input.value).toBe('12:34:5')

    await userEvent.type(input, '#$%')

    expect(input.value).toBe('12:34:5')

    await userEvent.type(input, '¨&*')

    expect(input.value).toBe('12:34:5')
  })

  it('Date & Hour - Type', async () => {
    render(<App current="1234" mask="00/00/0000 00:00:00" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12/34')

    await userEvent.type(input, '56')

    expect(input.value).toBe('12/34/56')

    await userEvent.type(input, '78')

    expect(input.value).toBe('12/34/5678')

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('12/34/567')

    await userEvent.type(input, '!@')

    expect(input.value).toBe('12/34/567')

    await userEvent.type(input, '#$%')

    expect(input.value).toBe('12/34/567')

    await userEvent.type(input, '¨&*')

    expect(input.value).toBe('12/34/567')

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('12/34/56')
  })

  it('ZIP Code - Type', async () => {
    render(<App current="1234" mask="00000-000" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('1234')

    await userEvent.type(input, '5')

    expect(input.value).toBe('12345')

    await userEvent.type(input, '6')

    expect(input.value).toBe('12345-6')

    await userEvent.type(input, '7')

    expect(input.value).toBe('12345-67')

    await userEvent.type(input, '8')

    expect(input.value).toBe('12345-678')

    await userEvent.type(input, '9')

    expect(input.value).toBe('12345-678')

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('12345-67')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('1234')
  })

  it('Crazy Zip Code - Type', async () => {
    const { rerender } = render(<App current="1234" mask="00000-000" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('1234')

    await userEvent.type(input, '5')

    expect(input.value).toBe('12345')

    await userEvent.type(input, '6')

    expect(input.value).toBe('12345-6')

    await userEvent.type(input, '7')

    const masks = ['00000-000', '0-00-00-00']
    rerender(
      <App
        current={input.value}
        mask={input.value.length > 7 ? masks[1] : masks[0]}
      />
    )

    expect(input.value).toBe('1-23-45-67')

    await userEvent.type(input, '8')

    expect(input.value).toBe('1-23-45-67')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    rerender(
      <App
        current={input.value}
        mask={input.value.length > 7 ? masks[1] : masks[0]}
      />
    )

    expect(input.value).toBe('12345')
  })

  it('Money - Type', async () => {
    render(<App current="1234" mask="#.##0,00" options={{ reverse: true }} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12,34')

    await userEvent.type(input, '5')

    expect(input.value).toBe('123,45')

    await userEvent.type(input, '6')

    expect(input.value).toBe('1.234,56')

    await userEvent.type(input, '7')

    expect(input.value).toBe('12.345,67')

    await userEvent.type(input, '8')

    expect(input.value).toBe('123.456,78')

    await userEvent.type(input, '9')

    expect(input.value).toBe('1.234.567,89')

    await userEvent.type(input, '0')
    await userEvent.type(input, '9')

    expect(input.value).toBe('123.456.789,09')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('1.234.567,89')
  })

  it('Money (NO REVERSE) - Type', async () => {
    render(<App current="1234" mask="#.##0,00" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('1.234')

    await userEvent.type(input, '5')

    expect(input.value).toBe('1.234,5')

    await userEvent.type(input, '6')

    expect(input.value).toBe('1.234,56')

    await userEvent.type(input, '7')

    expect(input.value).toBe('1.234,56')

    await userEvent.type(input, '8')

    expect(input.value).toBe('1.234,56')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('1.234,')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('1.23')
  })

  it('Telephone - Type', async () => {
    render(<App current="1234" mask="0000-0000" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('1234')

    await userEvent.type(input, '5')

    expect(input.value).toBe('1234-5')

    await userEvent.type(input, '6')

    expect(input.value).toBe('1234-56')

    await userEvent.type(input, '7')

    expect(input.value).toBe('1234-567')

    await userEvent.type(input, '8')

    expect(input.value).toBe('1234-5678')

    await userEvent.type(input, '9')

    expect(input.value).toBe('1234-5678')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('1234-56')
  })

  it('Telephone with Code Area - Type', async () => {
    render(<App current="1234" mask="(00) 0000-0000" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('(12) 34')

    await userEvent.type(input, '5')

    expect(input.value).toBe('(12) 345')

    await userEvent.type(input, '6')

    expect(input.value).toBe('(12) 3456')

    await userEvent.type(input, '7')

    expect(input.value).toBe('(12) 3456-7')

    await userEvent.type(input, '8')

    expect(input.value).toBe('(12) 3456-78')

    await userEvent.type(input, '9')

    expect(input.value).toBe('(12) 3456-789')

    await userEvent.type(input, '0')

    expect(input.value).toBe('(12) 3456-7890')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('(12) 3456-78')
  })

  it('US Telephone - Type', async () => {
    render(<App current="1234" mask="(000) 000-0000" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('(123) 4')

    await userEvent.type(input, '5')

    expect(input.value).toBe('(123) 45')

    await userEvent.type(input, '6')

    expect(input.value).toBe('(123) 456')

    await userEvent.type(input, '7')

    expect(input.value).toBe('(123) 456-7')

    await userEvent.type(input, '8')

    expect(input.value).toBe('(123) 456-78')

    await userEvent.type(input, '9')

    expect(input.value).toBe('(123) 456-789')

    await userEvent.type(input, '0')

    expect(input.value).toBe('(123) 456-7890')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('(123) 456-78')
  })

  it('São Paulo Celphones - Type', async () => {
    const { rerender } = render(<App current="1234" mask="(00) 0000-00009" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('(12) 34')

    await userEvent.type(input, '5')

    expect(input.value).toBe('(12) 345')

    await userEvent.type(input, '6')

    expect(input.value).toBe('(12) 3456')

    await userEvent.type(input, '7')

    expect(input.value).toBe('(12) 3456-7')

    await userEvent.type(input, '8')

    expect(input.value).toBe('(12) 3456-78')

    await userEvent.type(input, '9')

    expect(input.value).toBe('(12) 3456-789')

    await userEvent.type(input, '0')

    expect(input.value).toBe('(12) 3456-7890')

    await userEvent.type(input, '9')

    const masks = ['(00) 00000-0000', '(00) 0000-00009']
    rerender(
      <App
        current={input.value}
        mask={
          input.value.replace(/\D/g, '').length === 11 ? masks[0] : masks[1]
        }
      />
    )

    expect(input.value).toBe('(12) 34567-8909')
  })

  it('Mixed Type Mask - Type', async () => {
    render(<App current="1234" mask="AAA 000-S0S" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('123 4')

    await userEvent.type(input, '5')

    expect(input.value).toBe('123 45')

    await userEvent.type(input, '6')

    expect(input.value).toBe('123 456')

    await userEvent.type(input, '7')

    expect(input.value).toBe('123 456-')

    await userEvent.type(input, 'X')

    expect(input.value).toBe('123 456-X')

    await userEvent.type(input, 'Y')

    expect(input.value).toBe('123 456-X')

    await userEvent.type(input, '6')

    expect(input.value).toBe('123 456-X6')

    await userEvent.type(input, 'Z')

    expect(input.value).toBe('123 456-X6Z')

    await userEvent.type(input, 'a')

    expect(input.value).toBe('123 456-X6Z')

    await userEvent.type(input, 'B')

    expect(input.value).toBe('123 456-X6Z')

    await userEvent.type(input, '7')

    expect(input.value).toBe('123 456-X6Z')

    await userEvent.type(input, '!@##@$$#%')

    expect(input.value).toBe('123 456-X6Z')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('123 456-X')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('123')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('1')

    await userEvent.type(input, 'a')

    expect(input.value).toBe('1a')

    await userEvent.type(input, '{backspace}')

    await userEvent.type(input, 'A')

    expect(input.value).toBe('1A')

    await userEvent.type(input, '3')

    expect(input.value).toBe('1A3')
  })

  it('CPF - Type', async () => {
    render(
      <App current="1234" mask="000.000.000-00" options={{ reverse: true }} />
    )
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12-34')

    await userEvent.type(input, '5')

    expect(input.value).toBe('123-45')

    await userEvent.type(input, '6')

    expect(input.value).toBe('1.234-56')

    await userEvent.type(input, '7')

    expect(input.value).toBe('12.345-67')

    await userEvent.type(input, '8')

    expect(input.value).toBe('123.456-78')

    await userEvent.type(input, '9')

    expect(input.value).toBe('1.234.567-89')

    await userEvent.type(input, '0')

    expect(input.value).toBe('12.345.678-90')

    await userEvent.type(input, '9')

    expect(input.value).toBe('123.456.789-09')
  })

  it('CNPJ - Type', async () => {
    render(
      <App
        current="1234"
        mask="00.000.000/0000-00"
        options={{ reverse: true }}
      />
    )
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12-34')

    await userEvent.type(input, '5')

    expect(input.value).toBe('123-45')

    await userEvent.type(input, '6')

    expect(input.value).toBe('1234-56')

    await userEvent.type(input, '7')

    expect(input.value).toBe('1/2345-67')

    await userEvent.type(input, '8')

    expect(input.value).toBe('12/3456-78')

    await userEvent.type(input, '9')

    expect(input.value).toBe('123/4567-89')

    await userEvent.type(input, '0')

    expect(input.value).toBe('1.234/5678-90')

    await userEvent.type(input, '1')

    expect(input.value).toBe('12.345/6789-01')

    await userEvent.type(input, '2')

    expect(input.value).toBe('123.456/7890-12')

    await userEvent.type(input, '3')

    expect(input.value).toBe('1.234.567/8901-23')

    await userEvent.type(input, '4')

    expect(input.value).toBe('12.345.678/9012-34')
  })

  it('IP Address - Type', async () => {
    render(<App current="1270" mask="099.099.099.099" />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('127.0')

    await userEvent.type(input, '.')
    await userEvent.type(input, '0')

    expect(input.value).toBe('127.0.0')

    await userEvent.type(input, '.')
    await userEvent.type(input, '1')

    expect(input.value).toBe('127.0.0.1')

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('127.0.0.')

    await userEvent.type(input, '.')

    expect(input.value).toBe('127.0.0.')

    await userEvent.type(input, '.')

    expect(input.value).toBe('127.0.0.')

    await userEvent.type(input, '0')
    await userEvent.type(input, '0')

    expect(input.value).toBe('127.0.0.00')

    await userEvent.type(input, '.')

    expect(input.value).toBe('127.0.0.00')

    await userEvent.type(input, '{backspace}')
    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('127.0.0.')

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('127.0.0')
  })

  it('Percent - Type', async () => {
    render(<App current="1234" mask="##0,00%" options={{ reverse: true }} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12,34%')

    await userEvent.type(input, '5')

    expect(input.value).toBe('123,45%')

    await userEvent.type(input, '6')

    expect(input.value).toBe('1234,56%')
  })
})
