import React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import Output from './output'
import { calculate } from '../libs/utils/utils'
import { DEFAULT_VALUES } from '../libs/constants'
import { TFormData } from '../libs/types'
import CalculatorForm from './watchForm'

const Calculator = () => {
  const { control, register } = useForm<TFormData>({
    defaultValues: DEFAULT_VALUES,
  })
  const formValues = useWatch<TFormData>({
    control,
  })

  const result = calculate({
    principal: formValues.startAmount ?? '',
    rate: formValues.interestRate ?? '',
    time: formValues.investmentTerm ?? '',
    frequency: formValues.interestPaid ?? '',
  })
  return (
    <div>
      <CalculatorForm register={register} />
      <Output>$ {result}</Output>
    </div>
  )
}

export default Calculator
