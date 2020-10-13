import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-primary: #15C3D6;
    --color-secondary: #FFD666;
    --color-secondary-hover: #96FEFF;
    --color-success: #37C77F;
    --color-delete: #FF669D;
    --color-white: #FFFFFF;
    --color-green-low: #EDFFF6;
    --color-blue-low: #D1EDF2;
    --color-red-low: #FFE4EE;
    --color-texts-button: #8D734B;
    --color-texts-title: #0089A5;
    --color-texts-title2: #4D6F80;
    --color-texts-base: #5C8599;
    --color-tests-addons: #8FA7B2;
    --color-secondary-shape: #F7F9FC;
    --color-back-lines-in-white: #D3E2E5;
    --color-back-background: #EBF2F5;
    --color-input-background: #F5F8FA;
    --liner-gradient-blue: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  }
  body {
    background: var(--color-back-background);
    color: var(--color-white);
    -webkit-font-smoothing: antialised;
  }
  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 600;
  }

  strong {
    font-weight: 800;
  }

  button {
    cursor: pointer;
  }
`
