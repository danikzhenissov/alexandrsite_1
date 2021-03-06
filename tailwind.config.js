module.exports = {
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '192': '48rem',
        '180': '45rem',
        '168': '42rem',
        '144': '36rem',
        '128': '32rem',
        '112': '28rem',
      }
    },
    colors: {
      'cerise': {
        '50': '#fcf3f8', 
        '100': '#f9e6f1', 
        '200': '#f0c1dc', 
        '300': '#e79cc7', 
        '400': '#d4519c', 
        '500': '#C20772', 
        '600': '#af0667', 
        '700': '#920556', 
        '800': '#740444', 
        '900': '#5f0338'
    },
      'white' : '#FFF',
      'biscay': {
        '50': '#f5f5f7', 
        '100': '#ebebf0', 
        '200': '#cdcdd9', 
        '300': '#afafc2', 
        '400': '#727395', 
        '500': '#363767', 
        '600': '#31325d', 
        '700': '#29294d', 
        '800': '#20213e', 
        '900': '#1a1b32'
    },
    'cloud': {
      '50': '#fcfcfc', 
      '100': '#fafafa', 
      '200': '#f2f2f2', 
      '300': '#ebebeb', 
      '400': '#dbdbdb', 
      '500': '#CCCCCC', 
      '600': '#b8b8b8', 
      '700': '#999999', 
      '800': '#7a7a7a', 
      '900': '#646464'},
      'mine-shaft': {
        '50': '#f5f5f5', 
        '100': '#ebebeb', 
        '200': '#cccccc', 
        '300': '#adadad', 
        '400': '#707070', 
        '500': '#333333', 
        '600': '#2e2e2e', 
        '700': '#262626', 
        '800': '#1f1f1f', 
        '900': '#191919',
        
    },'dove-gray': {
      '50': '#f8f8f8', 
      '100': '#f0f0f0', 
      '200': '#dadada', 
      '300': '#c3c3c3', 
      '400': '#979797', 
      '500': '#6A6A6A', 
      '600': '#5f5f5f', 
      '700': '#505050', 
      '800': '#404040', 
      '900': '#343434'
  }
  
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
