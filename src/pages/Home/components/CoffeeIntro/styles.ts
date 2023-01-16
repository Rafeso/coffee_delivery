import { TitleText } from '../../../../components/Typography'
import rgba from 'polished/lib/color/rgba'
import styled from 'styled-components'
import CoffeintroBackground from '../../../../assets/CoffeIntro-background.png'

export const CoffeIntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${CoffeintroBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${rgba(theme.colors['base-background'], 0, 2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const CoffeIntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
