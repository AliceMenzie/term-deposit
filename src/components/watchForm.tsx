import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { TFormData } from '../libs/types'

type calcFormProps = {
  register: UseFormRegister<TFormData>
}

const CalculatorForm = ({ register }: calcFormProps) => {
  return (
    <form>
      <label className="label">
        Starting amount
        <input min={0} type="number" {...register('startAmount')} step="100" />
      </label>
      <label>
        Interest rate
        <input min={0} type="number" step="0.1" {...register('interestRate')} />
      </label>
      <label>
        Investment term
        <input min={0} type="number" {...register('investmentTerm')} />
      </label>
      <label>
        Interest payment
        <select {...register('interestPaid')}>
          <option value="12">monthly</option>
          <option value="4">quarterly</option>
          <option value="1">annually</option>
          <option value="36">maturity</option>
        </select>
      </label>
    </form>
  )
}

export default CalculatorForm
