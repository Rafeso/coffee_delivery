import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeCard } from '../CoffeeCard/Index'
import { CoffeeList, CoffeesContainer } from './styles'

export function Coffes() {
  return (
    <CoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeesContainer>
  )
}
