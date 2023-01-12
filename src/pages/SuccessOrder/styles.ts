import styled from 'styled-components'

export const SuccessOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2.5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SuccessOrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors['base-background']};
  min-width: 32rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
