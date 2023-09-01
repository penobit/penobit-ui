import React from 'react';
import { prefixer } from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, stylisRTLPlugin],
});
function RTL(props) {
    return React.createElement(CacheProvider, { value: cacheRtl }, props.children);
}
function ThemeProvider({ children, theme }) {
    console.log('provider: ', theme.palette.mode);
    const emotionProvider = React.createElement(EmotionThemeProvider, { theme: theme }, children);
    if (theme.direction === 'rtl') {
        return React.createElement(RTL, null, emotionProvider);
    }
    return emotionProvider;
}
export default ThemeProvider;
export { default as createTheme } from './createTheme';
//# sourceMappingURL=index.js.map