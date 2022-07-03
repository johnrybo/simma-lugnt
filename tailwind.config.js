module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      lg: ['40px'],
      md: ['24px'],
      sm: ['16px'],
    },
    letterSpacing: {
      tight: '-0.03em',
    },
    extend: {
      textColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      backgroundColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      borderColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      placeholderColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      backgroundImage: {
        wave: "url('./images/wave.gif')",
      },
      borderRadius: {
        boxRadius: '40px',
        inputRadius: '1e+06px',
        buttonRadius: '24px',
      },
    },
  },
  plugins: [],
};
