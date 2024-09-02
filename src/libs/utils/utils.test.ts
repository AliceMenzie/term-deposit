import { expect, describe, it } from 'vitest'
import { calculate } from './utils'

const exampleCalculation = {
  principal: '1500',
  rate: '2.0',
  time: '3',
  frequency: '12',
}
const emptyCalculation = {
  principal: '',
  rate: '',
  time: '',
  frequency: '',
}

describe('calculate', () => {
  it('returns interest', () => {
    const result = calculate(exampleCalculation)
    expect(result).toBe('1592.68')
  })
  it('returns valid response when empty', () => {
    const result = calculate(emptyCalculation)
    expect(result).toBe('0.00')
  })
})
