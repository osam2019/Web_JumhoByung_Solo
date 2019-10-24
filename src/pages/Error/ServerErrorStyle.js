export const styles = {
  '@import url(\https://fonts.googleapis.com/css?family=Fira+Sans\)': true,
  '.left-section .inner-content': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  '*': {
    boxSizing: 'border-box'
  },
  html: {
	margin: '0',
    padding: '0'  
  },
  body: {
    margin: '0',
    padding: '0'
  },
  body: {
    fontFamily: '\'Fira Sans\', sans-serif',
    color: '#f5f6fa'
  },
  '.background': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(#0C0E10, #446182)'
  },
  '.background .ground': {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '25vh',
    background: '#0C0E10'
  },
  '@media (max-width: 770px)': [
    {
      '.background .ground': {
        height: '0vh'
      }
    },
    {
      '.container': {
        flexDirection: 'column',
        paddingBottom: '0vh'
      }
    },
    {
      '.left-section': {
        width: '100%',
        height: '40%',
        position: 'absolute',
        top: '0'
      }
    },
    {
      '.left-section .inner-content': {
        position: 'relative',
        padding: '1rem 0'
      }
    },
    {
      '.heading': {
        fontSize: '7em',
        lineHeight: '1.15',
        margin: '0'
      }
    },
    {
      '.subheading': {
        fontSize: '1.3em',
        lineHeight: '1.15',
        maxWidth: '100%'
      }
    },
    {
      '.right-section': {
        width: '100%',
        height: '60%',
        position: 'absolute',
        bottom: '0'
      }
    },
    {
      '.svgimg': {
        padding: '0'
      }
    }
  ],
  '.container': {
    position: 'relative',
    margin: '0 auto',
    width: '85%',
    height: '100vh',
    paddingBottom: '25vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  '.left-section, .right-section': {
    position: 'relative'
  },
  '.left-section': {
    width: '40%'
  },
  '.heading': {
    textAlign: 'center',
    fontSize: '9em',
    lineHeight: '1.3em',
    margin: '2rem 0 0.5rem 0',
    padding: '0',
    textShadow: '0 0 1rem #fefefe'
  },
  '.subheading': {
    textAlign: 'center',
    maxWidth: '480px',
    fontSize: '1.5em',
    lineHeight: '1.15em',
    padding: '0 1rem',
    margin: '0 auto'
  },
  '.right-section': {
    width: '50%'
  },
  '.svgimg': {
    position: 'absolute',
    bottom: '0',
    paddingTop: '10vh',
    paddingLeft: '1vh',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  '.svgimg .bench-legs': {
    fill: '#0C0E10'
  },
  '.svgimg .top-bench, .svgimg .bottom-bench': {
    stroke: '#0C0E10',
    strokeWidth: '1px',
    fill: '#5B3E2B'
  },
  '.svgimg .bottom-bench path:nth-child(1)': {
    fill: '#432d20'
  },
  '.svgimg .lamp-details': {
    fill: '#202425'
  },
  '.svgimg .lamp-accent': {
    fill: '#2c3133'
  },
  '.svgimg .lamp-bottom': {
    fill: 'linear-gradient(#202425, #0C0E10)'
  },
  '.svgimg .lamp-light': {
    fill: '#EFEFEF'
  },
  '@keyframes glow': {
    '0%': {
      textShadow: '0 0 1rem #fefefe'
    },
    '50%': {
      textShadow: '0 0 1.85rem #ededed'
    },
    '100%': {
      textShadow: '0 0 1rem #fefefe'
    }
  }
}