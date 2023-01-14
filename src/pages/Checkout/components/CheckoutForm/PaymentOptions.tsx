import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'
import { PaymentOptionInput } from '../PaymentInput'
import { PaymentOptionsContainer } from './styles'

export const paymentOptions = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentOptionError = errors?.paymentOption?.message as unknown as string

  return (
    <PaymentOptionsContainer>
      {Object.entries(paymentOptions).map(([key, { label, icon }]) => (
        <PaymentOptionInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentOption')}
        />
      ))}
      {paymentOptionError && <RegularText>{paymentOptionError}</RegularText>}
    </PaymentOptionsContainer>
  )
}
