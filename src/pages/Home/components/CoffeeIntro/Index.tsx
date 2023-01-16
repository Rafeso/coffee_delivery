import {
  BenefitsContainer,
  CoffeIntroContainer,
  CoffeIntroTitle,
  IntroContent,
} from './styles'
import CoffeImageIntro from '../../../../assets/CoffeImage.png'
import { RegularText } from '../../../../components/Typography'
import { InfoIcon } from '../../../../components/InfoIcon/Index'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function CoffeIntro() {
  const { colors } = useTheme()
  return (
    <CoffeIntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <CoffeIntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </CoffeIntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoIcon
              iconColor={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoIcon
              iconColor={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoIcon
              iconColor={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
            <InfoIcon
              iconColor={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>
        <img src={CoffeImageIntro} alt="" />
      </IntroContent>
    </CoffeIntroContainer>
  )
}
