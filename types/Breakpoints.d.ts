export interface BreakpointsValues {
  xs: number | string
  sm: number | string
  md: number | string
  lg: number | string
  xl: number | string
  xxl: number | string
  xxxl: number | string
}

export type BreakpointOnlyCallback = (key: keyof BreakpointsValues) => string

export type BreakpointCallback = (key: string) => string

export type BreakpointBetweenCallback = (start: number | string, end: number | string) => string

export interface Breakpoints {
  values: BreakpointsValues
  // keys: string[],
  up: BreakpointCallback
  down: BreakpointCallback
  between: BreakpointBetweenCallback
  only: BreakpointOnlyCallback
}
