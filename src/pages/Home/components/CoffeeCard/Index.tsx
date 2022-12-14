import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput/Index'
import { RegularText, TitleText } from '../../../../components/Typography'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  AddCartWrapper,
  CardFooter,
  CoffeCardContainer,
  CoffeeName,
  Description,
  Tags,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  description: string
  photo: string
  name: string
  price: number
}

interface CoffeProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeProps) {
  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <CoffeeName>{coffee.name}</CoffeeName>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardContainer>
  )
}
