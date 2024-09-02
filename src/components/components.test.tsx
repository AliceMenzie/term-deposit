import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Output from './output.js'
import App from '../App.js'
import Calculator from './calculator.js'
import WatchForm from './watchForm.js'
import * as utils from '../libs/utils/utils.js'
import { TFormData } from '../libs/types.js'
import { UseFormRegister } from 'react-hook-form'

describe('<Output/>', () => {
  it('Output should render given children', async () => {
    render(<Output>1500</Output>)
    expect(await screen.findByText('1500')).toBeInTheDocument()
  })
})

describe('<App/>', () => {
  it('App should be rendered', async () => {
    render(<App />)

    expect(
      await screen.findByText('Term Deposit Calculator')
    ).toBeInTheDocument()
  })
})
describe('<Calculator/>', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })
  it('It renders with default values', async () => {
    vi.spyOn(utils, 'calculate').mockReturnValue('1050.71')

    render(<Calculator />)

    expect(await screen.findByText('Starting amount')).toBeInTheDocument()
    expect(await screen.findByText('Interest rate')).toBeInTheDocument()
    expect(await screen.findByText('Investment term')).toBeInTheDocument()
    expect(await screen.findByText('Interest payment')).toBeInTheDocument()
    expect(screen.getByText('$ 1050.71')).toBeInTheDocument()
  })
})

describe('<WatchForm/>', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('updates the result when form values change', async () => {
    const mockRegister: UseFormRegister<TFormData> = vi.fn()

    render(<WatchForm register={mockRegister} />)

    const startingAmount = await screen.findByLabelText('Starting amount')
    const interestRate = await screen.findByLabelText('Interest rate')
    const investmentTerm = await screen.findByLabelText('Investment term')
    const interestPayment = await screen.findByLabelText('Interest payment')

    fireEvent.change(startingAmount, {
      target: { value: '1200' },
    })
    expect(startingAmount).toHaveValue(1200)

    fireEvent.change(interestRate, {
      target: { value: '2.80' },
    })
    expect(interestRate).toHaveValue(2.8)

    fireEvent.change(investmentTerm, {
      target: { value: '4' },
    })
    expect(investmentTerm).toHaveValue(4)

    expect(interestPayment).toHaveValue('12')
    fireEvent.change(interestPayment, {
      target: { value: '1' },
    })
    expect(interestPayment).toHaveValue('1')
  })
})
