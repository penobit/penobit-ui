import { Theme as BaseTheme } from '@emotion/react'
import {
  BreakpointBetweenCallback,
  BreakpointCallback,
  BreakpointOnlyCallback,
  Breakpoints,
  BreakpointsValues,
} from './Breakpoints'
import { NavbarProps, NavbarTitleProps } from './Navbar'
import { Palette } from './Palette'
import { Shadows } from './Shadows'
import { Shape } from './Shape'
import { Spacing } from './Spacing'
import { Transitions } from './Transitions'
import { Typography } from './Typography'
import { ZIndex } from './ZIndex'

export default interface Theme {
  direction: 'ltr' | 'rtl'
  palette: Palette
  typography: Typography
  breakpoints: Breakpoints
  spacing: Spacing
  shape: Shape
  shadows: Shadows
  transitions: Transitions
  zIndex: ZIndex
}

export {
  Theme,
  BreakpointsValues,
  BreakpointOnlyCallback,
  BreakpointCallback,
  BreakpointBetweenCallback,
  Breakpoints,
  Shadows,
  Shape,
  Spacing,
  ZIndex,
  Palette,
  Transitions,
  Typography,
  NavbarProps,
  NavbarTitleProps,
}
