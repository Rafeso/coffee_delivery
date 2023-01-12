import { RegularText, TitleText } from '../../components/Typography'
import { SuccessOrderContainer, SuccessOrderDetailsContainer } from './styles'
import SuccessOrderImage from '../../assets/Motoboy.svg'
import { InfoIcon } from '../../components/InfoIcon/Index'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function SuccessOrder() {
  const { colors } = useTheme()
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </SuccessOrderDetailsContainer>
        <img src={SuccessOrderImage} alt="" />
      </section>
    </SuccessOrderContainer>
  )
}
