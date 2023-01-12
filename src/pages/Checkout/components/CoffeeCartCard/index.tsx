import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput/Index'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1674432000&Signature=m~aJIcD0LCdAkQJE3Ejn72KnlJjXR8EDmkmmzHbzw3YboGvAfc0cwmTI~IDtYJu~IbZYgCU1kU-2d~0GluwD0HjEyhCg3GykkZaMyAeOp8gD~BsEw6OgFqbep5ndSNZYpXTQqerZ0MxV6PHmWk4-Ee-DmDko5jlBLGclbsiO3fdjwadydUVYQhHj4-DySUhrrnx0AbZU9PV6~OgonCWFODH3vZuYC77r~64MiPihFjVgstaIdrM-uUe4u~ZAA~PXb8nUjf~EABo6v7LRlE3zWZIgGZpqR5DW1PNpsl1KoKzCYIx9iUf4uUudUGJvU4gSUh1OV5p79bgYZKWFjZAwSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Coffe image"
        />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="sm" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
