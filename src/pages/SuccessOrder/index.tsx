import { RegularText, TitleText } from '../../components/Typography'
import { SuccessOrderContainer, SuccessOrderDetailsContainer } from './styles'
import SuccessOrderImage from '../../assets/Motoboy.svg'
import { InfoIcon } from '../../components/InfoIcon/Index'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout/Index'
import { paymentOptions } from '../Checkout/components/CheckoutForm/PaymentOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function SuccessOrder() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  })

  if (!state) return <></>

  return (
    <SuccessOrderContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <SuccessOrderDetailsContainer>
          <InfoIcon
            icon={<MapPin weight="fill" />}
            iconColor={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em{' '}
                <strong>
                  {state.district}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <InfoIcon
            icon={<Clock weight="fill" />}
            iconColor={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de Entrega
                <br />
                <strong>20 min - 30 min </strong>
              </RegularText>
            }
          />
          <InfoIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentOptions[state.paymentOption].label}</strong>
              </RegularText>
            }
          />
        </SuccessOrderDetailsContainer>
        <img src={SuccessOrderImage} alt="" />
      </section>
    </SuccessOrderContainer>
  )
}
