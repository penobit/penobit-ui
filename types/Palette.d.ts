export type PaletteBackground = {
  default: {
    light: string
    dark: string
  }
  paper: {
    light: string
    dark: string
  }
}

export type PaletteColor = {
  main: string
  light: string
  dark: string
  contrastText: string
}

export type PaletteAction = {
  active: string
  hover: string
  selected: string
  disabled: string
  disabledBackground: string
  focus: string
  hoverOpacity: number | string
  disabledOpacity: number | string
  focusOpacity: number | string
  activatedOpacity: number | string
}

type PaletteText = {
  primary: string
  secondary: string
  disabled: string
  hint: string
  icon: string
  light: string
  dark: string
}

export interface Palette {
  mode: 'dark' | 'light'
  background: PaletteBackground
  primary: PaletteColor
  secondary: PaletteColor
  divider: string
  action: PaletteAction
  text: PaletteText
}
