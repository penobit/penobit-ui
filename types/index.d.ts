import * as BaseTheme from './Theme'

declare global {
  interface Theme extends BaseTheme.Theme {}

  interface NavbarProps extends BaseTheme.NavbarProps {
    theme?: Theme
  }

  interface NavbarTitleProps extends BaseTheme.NavbarTitleProps {
    theme?: Theme
  }

  interface Palette extends BaseTheme.Palette {
    theme?: Theme
  }

  interface Typography extends BaseTheme.Typography {
    theme?: Theme
  }

  interface Shadows extends BaseTheme.Shadows {
    theme?: Theme
  }

  interface ZIndex extends BaseTheme.ZIndex {
    theme?: Theme
  }

  interface Transitions extends BaseTheme.Transitions {
    theme?: Theme
  }

  interface Shape extends BaseTheme.Shape {
    theme?: Theme
  }

  interface Spacing extends BaseTheme.Spacing {
    theme?: Theme
  }

  interface BreakpointsValues extends BaseTheme.BreakpointsValues {
    theme?: Theme
  }

  interface Breakpoints extends BaseTheme.Breakpoints {
    theme?: Theme
  }

  interface BreakpointOnlyCallback extends BaseTheme.BreakpointOnlyCallback {
    theme?: Theme
  }

  interface BreakpointCallback extends BaseTheme.BreakpointCallback {
    theme?: Theme
  }

  interface BreakpointBetweenCallback extends BaseTheme.BreakpointBetweenCallback {
    theme?: Theme
  }
}

export {}
