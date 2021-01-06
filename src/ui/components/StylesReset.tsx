import { createGlobalStyle } from 'styled-components';

export const StylesReset = createGlobalStyle`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr,
  acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub,
  sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption,
  tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer,
  header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    appearance: none;
    -webkit-appearance: none;
  }

  html, body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote {
    &::before,
    &::after {
      content: '';
      content: none;
    }
  }

  q {
    &::before,
    &::after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    box-sizing: border-box;
    outline: none;
    font-size:62.5%;
  }

  * {
    box-sizing: inherit;
    outline: inherit;

    &::before,
    &::after {
      box-sizing: inherit;
      outline: inherit;
    }
  }

  img {
    box-sizing: content-box;
  }

  button, input, textarea {
    font-family: inherit;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

  body {
    font-size: 1.6rem;
    font-family: Helvetica, Arial ,sans-serif;
    line-height: 1;
    color: #262626;
    background:  #fff;
  }
`;
