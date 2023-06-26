import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const FailureImage = styled.img`
  width: 30%;
  padding: 20px;
`
export const ErrorMessage = styled.h1`
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`
export const FailureCause = styled.p`
  font-size: 18px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
`
export const RetryButton = styled.button`
  cursor: pointer;
  background-color: #3b82f6;
  padding: 8px 15px 8px 15px;
  font-size: 18px;
  border-radius: 6px;
  color: #ffffff;
  border: none;
`
