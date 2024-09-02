type Tcalculate = {
  principal: string
  rate: string
  time: string
  frequency: string
}

export const calculate = ({ principal, rate, time, frequency }: Tcalculate) => {
  const r = Number(rate) / 100
  const n = Number(frequency)
  const t = Number(time)
  const A = Number(principal) * Math.pow(1 + r / n, n * t)
  return A.toFixed(2)
}
