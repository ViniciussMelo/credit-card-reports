import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    .recharts-pie-label-text {
      font-size: 10px !important;
    }

    .recharts-surface {
      transform: scale(0.9); /* ou ajuste conforme necessário */
      transform-origin: top center;
    }
  }
`