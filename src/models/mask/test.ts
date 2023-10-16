// modules
import { mask } from '@models/mask'

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
