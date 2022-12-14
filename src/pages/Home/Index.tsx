import { CoffeIntro } from './components/CoffeeIntro/Index'
import { Coffes } from './components/Coffees/Index'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CoffeIntro />
      <Coffes />
    </HomeContainer>
  )
}
