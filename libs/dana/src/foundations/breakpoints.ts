export type Breakpoint =
    | 'mobile'
    | 'mobileMedium'
    | 'mobileLandscape'
    | 'phablet'
    | 'tablet'
    | 'desktop'
    | 'leftCol'
    | 'wide';

export const breakpoints = {
    mobile: 320,
    mobileMedium: 375,
    mobileLandscape: 480,
    phablet: 660,
    tablet: 768,
    desktop: 980,
    leftCol: 1140,
    wide: 1300,
};
