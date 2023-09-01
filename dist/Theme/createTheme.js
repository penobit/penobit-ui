import defaultTheme, { breakpointsValues } from './defaultTheme';
export default function createTheme(options) {
    return {
        direction: options.direction ?? defaultTheme.direction,
        breakpoints: {
            values: { ...breakpointsValues, ...options.breakpoints?.values },
            up: options.breakpoints?.up ?? defaultTheme.breakpoints.up,
            down: options.breakpoints?.down ?? defaultTheme.breakpoints.down,
            between: options.breakpoints?.between ?? defaultTheme.breakpoints.between,
            // keys: options.breakpoints?.keys ?? defaultTheme.breakpoints.keys,
            only: options.breakpoints?.only ?? defaultTheme.breakpoints.only,
        },
        palette: { ...defaultTheme.palette, ...options.palette },
        typography: { ...defaultTheme.typography, ...options.typography },
        shape: { ...defaultTheme.shape, ...options.shape },
        spacing: options.spacing ?? defaultTheme.spacing,
        zIndex: { ...defaultTheme.zIndex, ...options.zIndex },
        shadows: { ...defaultTheme.shadows, ...options.shadows },
        transitions: { ...defaultTheme.transitions, ...options.transitions },
    };
}
//# sourceMappingURL=createTheme.js.map