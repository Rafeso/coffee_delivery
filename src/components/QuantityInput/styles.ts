import styled, { css } from 'styled-components'

interface QuantityInputContainerProps {
  size?: 'md' | 'sm'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  &:focus {
    outline: none;
  }

  ${({ size }) =>
    size === 'md' &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  transition: 0.4s;
  background: none;
  color: ${({ theme }) => theme.colors['brand-purple']};

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`
