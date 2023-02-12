import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-size: 1rem;
    font-weight: 700;
    font-style: normal;
  }
 body{
    font-family:  'Pretendard-Regular';
  }
  html {
    --gray1: #555555; // text color1
    --gray2: #666666; // text color2
    --gray3: #D9D9D9; // bright gray
    --gray4: #444444; // block color

    // 1234 순으로 어두워지는 green
    --green1 : #464F41; // dark color
    --green2 : #698474; // dark btn
    --green3 : #889E81; // mid btn
    --green4 : #BFCBA8; // bright btn
    --green5 : #56776C; // mid point
  }
`;

export default GlobalStyle;
