export interface TypographyOptions {
  fontFamily?: string
  fontSize?: string
  fontWeight?: number
  lineHeight?: number
  letterSpacing?: string
  color?: string
}

interface PaeltteOptions {
  primary?: {
    main?: string
    light?: string
    dark?: string
  }
  secondary?: {
    main?: string
    light?: string
    dark?: string
  }
  background?: {
    main?: string
    light?: string
    dark?: string
  }
  text?: {
    main?: string
    light?: string
    dark?: string
  }
}

type BreakpointsOptions = {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
  mobile?: string
  tablet?: string
  laptop?: string
  desktop?: string
}

export default interface ThemeContextValue {
  mode?: 'dark' | 'light'
  Typography?: TypographyOptions,
  palette?: PaeltteOptions,
  breakpoints?: BreakpointsOptions,
}