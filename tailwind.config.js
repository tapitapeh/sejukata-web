module.exports = {
  theme: {
    // ...
    extend: {
      colors: {
        'black': '#313848',
        't-white': '#F8F0EE',
        't-red': '#E5386D⁣',
        't-blue': '#53D0EC',
        't-blue-dark': '#2748A0'
      },
      fontFamily: {
        'default': ['Libre Baskerville'],
        'theme': ['Libre Baskerville']
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#2748A0',
              fontWeight: 'bold',
              '&:hover': {
                color: '#53D0EC',
              },
            },
            hr: {
              borderColor: '#E5E7EB',
              borderWidth: '1px'
            }
          },
        },
      },
    }
  },
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
    // ...
  ],
}
