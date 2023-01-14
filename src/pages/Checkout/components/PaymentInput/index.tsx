/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { PaymentInputContainer, ContentContainer } from './styles'

type PaymentOptionsInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentOptionInput = forwardRef<
  HTMLInputElement,
  PaymentOptionsInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentInputContainer>
      <input id={id} type="radio" {...props} name="paymentOption" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentInputContainer>
  )
})
