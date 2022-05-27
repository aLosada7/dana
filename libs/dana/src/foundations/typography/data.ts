import { pxToRem } from '../utils/px-to-rem';
import type {
    BodySizes,
    Category,
    FontWeight,
    FontWeightDefinition,
    HeadlineSizes,
    LineHeight,
    TextSansSizes,
    TitlepieceSizes,
    TypographySizes,
} from './types';

const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36, 42, 50, 70];

const fonts = {
    titlepiece: 'GT Guardian Titlepiece, Georgia, serif',
    headlineSerif: 'Merriweather, Arial, sans-serif',
    bodySerif:
        'GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif',
    bodySans: 'Lato, Arial, sans-serif',
    // 'Lato', Arial, sans-serif;
    // 'Guardian Text Sans Web, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
};

const lineHeights = [1.15, 1.35, 1.5];

const fontWeights = [400, 500, 600, 700];

const titlepieceSizes: TitlepieceSizes = {
    small: fontSizes[8], //42px
    medium: fontSizes[9], //50px
    large: fontSizes[10], //70px
};

const headlineSizes: HeadlineSizes = {
    xxxsmall: fontSizes[3], //17px
    xxsmall: fontSizes[4], //20px
    xsmall: fontSizes[5], //24px
    small: fontSizes[6], //28px
    medium: fontSizes[7], //34px
    large: fontSizes[8], //42px
    xlarge: fontSizes[9], //50px
};

const bodySizes: BodySizes = {
    small: fontSizes[2], //15px
    medium: fontSizes[3], //17px
};

const textSansSizes: TextSansSizes = {
    xxsmall: fontSizes[0], //12px
    xsmall: fontSizes[1], //14px
    small: fontSizes[2], //15px
    medium: fontSizes[3], //17px
    large: fontSizes[4], //20px
    xlarge: fontSizes[5], //24px
    xxlarge: fontSizes[6], //30px
    xxxlarge: fontSizes[7], //36px
};

const fontSizeMapping: {
    [cat in Category]: TypographySizes;
} = {
    titlepiece: titlepieceSizes,
    headline: headlineSizes,
    body: bodySizes,
    textSans: textSansSizes,
};

const remFontSizes = fontSizes.map((fontSize) => pxToRem(fontSize));

const remTitlepieceSizes: TitlepieceSizes = {
    small: remFontSizes[8], //42px
    medium: remFontSizes[9], //50px
    large: remFontSizes[10], //70px
};

const remHeadlineSizes: HeadlineSizes = {
    xxxsmall: remFontSizes[3], //17px
    xxsmall: remFontSizes[4], //20px
    xsmall: remFontSizes[5], //24px
    small: remFontSizes[6], //28px
    medium: remFontSizes[7], //34px
    large: remFontSizes[8], //42px
    xlarge: remFontSizes[9], //50px
};

const remBodySizes: BodySizes = {
    small: remFontSizes[2], //15px
    medium: remFontSizes[3], //17px
};

const remTextSansSizes: TextSansSizes = {
    xxsmall: remFontSizes[0], //12px
    xsmall: remFontSizes[1], //14px
    small: remFontSizes[2], //15px
    medium: remFontSizes[3], //17px
    large: remFontSizes[4], //20px
    xlarge: remFontSizes[5], //24px
    xxlarge: remFontSizes[6], //28px
    xxxlarge: remFontSizes[7], //34px
};

const remFontSizeMapping: {
    [cat in Category]: TypographySizes;
} = {
    titlepiece: remTitlepieceSizes,
    headline: remHeadlineSizes,
    body: remBodySizes,
    textSans: remTextSansSizes,
};

const fontMapping: { [cat in Category]: string } = {
    titlepiece: fonts.titlepiece,
    headline: fonts.headlineSerif,
    body: fonts.bodySerif,
    textSans: fonts.bodySans,
};

const lineHeightMapping: { [lineHight in LineHeight]: number } = {
    tight: lineHeights[0],
    regular: lineHeights[1],
    loose: lineHeights[2],
};

const fontWeightMapping: { [fontWeight in FontWeight]: number } = {
    light: fontWeights[0],
    regular: fontWeights[1],
    bold: fontWeights[2],
    bolder: fontWeights[3],
};

const availableFonts: {
    [cat in Category]: {
        [fontWeight in FontWeight]?: FontWeightDefinition;
    };
} = {
    titlepiece: {
        bold: {
            hasItalic: false,
        },
    },
    headline: {
        light: {
            hasItalic: true,
        },
        regular: {
            hasItalic: true,
        },
        bold: {
            hasItalic: false,
        },
    },
    body: {
        regular: {
            hasItalic: true,
        },
        bold: {
            hasItalic: true,
        },
    },
    textSans: {
        light: {
            hasItalic: true,
        },
        regular: {
            hasItalic: true,
        },
        bold: {
            hasItalic: false,
        },
        bolder: {
            hasItalic: true,
        },
    },
};

Object.freeze(titlepieceSizes);
Object.freeze(headlineSizes);
Object.freeze(bodySizes);
Object.freeze(textSansSizes);
Object.freeze(remTitlepieceSizes);
Object.freeze(remHeadlineSizes);
Object.freeze(remBodySizes);
Object.freeze(remTextSansSizes);
Object.freeze(fontMapping);
Object.freeze(fontSizeMapping);
Object.freeze(fontWeightMapping);
Object.freeze(lineHeightMapping);
Object.freeze(availableFonts);

export {
    titlepieceSizes,
    headlineSizes,
    bodySizes,
    textSansSizes,
    remFontSizes,
    remTitlepieceSizes,
    remHeadlineSizes,
    remBodySizes,
    remTextSansSizes,
    remFontSizeMapping,
    fontMapping,
    fontSizeMapping,
    lineHeightMapping,
    fontWeightMapping,
    availableFonts,
};
