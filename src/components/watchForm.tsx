import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { TFormData } from '../libs/types'

type WatchFormProps = {
  register: UseFormRegister<TFormData>
}

const WatchForm = ({ register }: WatchFormProps) => {
  return (
    <form>
      <label className="label">
        Starting amount
        <input
          type="number"
          {...register('startAmount')}
          step="100"
        />
      </label>
      <label>
        Interest rate
        <input
          type="number"
          step="0.1"
          {...register('interestRate')}
        />
      </label>
      <label>
        Investment term
        <input
          type="number"
          {...register('investmentTerm')}
        />
      </label>
      <label>
        Interest payment
        <select
          {...register('interestPaid')}
        >
          <option value="12">monthly</option>
          <option value="4">quarterly</option>
          <option value="1">annually</option>
          <option value="36">maturity</option>
        </select>
      </label>
    </form>
  )
}

export default WatchForm
