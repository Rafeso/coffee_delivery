import { CheckoutForm } from './components/CheckoutForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentOptions {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentOption: zod.nativeEnum(PaymentOptions, {
    errorMap: () => {
      return { message: 'Informe a opção de pagamento.' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type confirmOrderFormData = OrderData

export function CheckoutPage() {
  const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  const { cleanCart } = useCart()

  function handleConfirmOrder(data: confirmOrderFormData) {
    navigate('/SuccessOrder', { state: data })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
