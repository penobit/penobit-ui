export type TransitionEasing = {
    easeInOut: string
    easeOut: string
    easeIn: string
    sharp: string
    standard: string
}

export type TransitionDuration = {
    shortest: number | string
    shorter: number | string
    short: number | string
    standard: number | string
    complex: number | string
    enteringScreen: number | string
    leavingScreen: number | string
}

export interface Transitions {
    easing: TransitionEasing,
    duration: TransitionDuration,
}