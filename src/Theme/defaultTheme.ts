const direction = 'ltr'

export const breakpointsValues: BreakpointsValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2560,
  xxxl: 3840,
}

const palette: Palette = {
  mode: 'light',
  primary: {
    main: '#0af',
    light: '#0af',
    dark: '#0ac',
    contrastText: '#fff',
  },
  secondary: {
    main: '#c0d',
    light: '#c0d',
    dark: '#c0a',
    contrastText: '#fff',
  },
  action: {
    active: '#fff',
    hover: '#fff',
    selected: '#fff',
    disabled: '#fff',
    disabledBackground: '#fff',
    focus: '#fff',
    hoverOpacity: 0.08,
    disabledOpacity: 0.3,
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  background: {
    default: {
      light: '#c7c7c7',
      dark: '#21212b',
    },
    paper: {
      light: '#fff',
      dark: '#2a2a36',
    },
  },
  divider: '#a7a7a7',
  text: {
    primary: '#333',
    secondary: '#666',
    disabled: '#999',
    hint: '#ccc',
    icon: '#333',
    light: '#fff',
    dark: '#333',
  },
}

const typography: Typography = {
  fontFamily: 'Roboto, Arial, sans-serif',
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '6rem',
    fontWeight: 300,
    lineHeight: 1.167,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: 1.167,
    letterSpacing: '0em',
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 400,
    lineHeight: 1.235,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  fontSize: '',
  fontWeightLight: '',
  fontWeightRegular: '',
  fontWeightMedium: '',
  fontWeightBold: '',
}

const shape: Shape = {
  borderRadius: 4,
}

const spacing: Spacing = (factor: number) => `${0.25 * factor}rem`

const zIndex: ZIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}

const breakpoints: Breakpoints = {
  values: breakpointsValues,
  up: (key: string | number) => `@media (min-width:${key}px)`,
  down: (key: string | number) => `@media (max-width:${key}px)`,
  between: function (start: string | number, end: string | number) {
    if (typeof start === 'number') {
      start = spacing(start)
    }

    if (typeof end === 'number') {
      end = spacing(end)
    }

    return `@media (min-width:${start}px) and (max-width:${end}px)`
  },
  // keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
  only: function (key: keyof BreakpointsValues) {
    if (typeof key === 'number') {
      return breakpoints.between(key, key)
    }

    const keys: string[] = Object.keys(this.values)
    // @ts-ignore
    const start: string | number = this.values[key]
    const endKey: string = keys[keys.indexOf(key) + 1] ?? 'xxxl'
    // @ts-ignore
    const end: string = this.values[endKey]

    if (!start || !end) throw new Error(`Breakpoint ${key} not found`)

    return `@media (min-width:${start}px) and (max-width:${end}px)`
  },
}

const shadows: Shadows = {
  0: 'none',
  1: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
  2: '0 0 8px 0 rgba(0, 0, 0, 0.08)',
  3: '0 0 16px 0 rgba(0, 0, 0, 0.08)',
  4: '0 0 24px 0 rgba(0, 0, 0, 0.08)',
  5: '0 0 32px 0 rgba(0, 0, 0, 0.08)',
}

const transitions: Transitions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
}

const defaultTheme: Theme = {
  direction,
  palette,
  typography,
  shape,
  spacing,
  zIndex,
  breakpoints,
  shadows,
  transitions,
}

export default defaultTheme
