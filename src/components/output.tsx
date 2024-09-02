import React, { PropsWithChildren } from 'react'

const Output = ({ children }: PropsWithChildren) => {
  return <p className="outcome">{children}</p>
}

export default Output
