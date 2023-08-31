export type TypographyText = {
    fontSize: string
    fontWeight: number | string
    lineHeight: number | string
    letterSpacing: number | string
    textTransform?: string
}

export interface Typography {
    fontFamily: string,
    fontSize: number | string,
    fontWeightLight: number | string,
    fontWeightRegular: number | string,
    fontWeightMedium: number | string,
    fontWeightBold: number | string,
    h1: TypographyText,
    h2: TypographyText,
    h3: TypographyText,
    h4: TypographyText,
    h5: TypographyText,
    h6: TypographyText,
    subtitle1: TypographyText,
    subtitle2: TypographyText,
    body1: TypographyText,
    body2: TypographyText,
    button: TypographyText,
    caption: TypographyText,
    overline: TypographyText,
}