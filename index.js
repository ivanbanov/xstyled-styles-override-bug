import React from 'react'
import ReactDOM from 'react-dom'
import styled, { x, ThemeProvider } from '@xstyled/emotion'

const Box = x.div

const InfoBox = styled(Box)({ backgroundColor: 'info' })
const ErrorBox = styled(Box)({ backgroundColor: 'error' })
const SuccessBox = styled(Box)({ backgroundColor: 'success' })

const App = () => (
  <ThemeProvider theme={{ colors: {
    error: 'red',
    success: 'green',
    info: 'blue',
  }}}>
    <InfoBox backgroundColor='black'>Info</InfoBox>
    <ErrorBox backgroundColor='black'>Error</ErrorBox>
    <SuccessBox backgroundColor='black'>Success</SuccessBox>
  </ThemeProvider>
)

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
