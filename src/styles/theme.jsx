export const theme = Object.freeze({
  colors: {
    accent: '#b5932c',
    active: '#d87825',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    primary: '#1c1c26eb',
    btn: '#1976d2;',

    mainBackground: ['linear-gradient(to bottom, #006d72, #bad3d6,  #e2e2e2)'],
    cardBackground: ['linear-gradient (90deg, #e4f3f3,#c2d1d5'],
  },

  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
  },

  breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },

  animations: {
    cubicBezier: 'cubic-bezier(0, 0.110, 0.35, 2);',
  },

  spacing: {
    step: 4,
  },

  shadow:
    '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);',
});
