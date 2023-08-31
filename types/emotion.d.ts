import '@emotion/react'
import { Theme as BaseTheme } from './Theme'

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}
