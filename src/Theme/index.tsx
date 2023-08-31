import React from 'react'
import { prefixer } from 'stylis'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { CacheProvider, ThemeProvider as EmotionThemeProvider, ThemeProviderProps } from '@emotion/react'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, stylisRTLPlugin],
})

function RTL(props: { children: React.ReactNode }) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
}

function ThemeProvider({ children, theme }: ThemeProviderProps & { theme: Theme }) {
  console.log('provider: ', theme.palette.mode)
  const emotionProvider = <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>

  if (theme.direction === 'rtl') {
    return <RTL>{emotionProvider}</RTL>
  }

  return emotionProvider
}

export default ThemeProvider
export { default as createTheme } from './createTheme'
