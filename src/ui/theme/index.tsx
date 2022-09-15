import * as React from 'react';
// import { createTheme, BaseTheme } from '@shopify/restyle';
import {
  ThemeProvider as ReThemeProvider,
  TextProps,
  BoxProps,
  useTheme as useRTheme,
} from '@shopify/restyle';

type BaseThemeType = typeof BaseTheme & {
  textVariants: {[key: string]: TextProps<typeof BaseTheme>};
  navigation: any;
  buttonVariants: {[key: string]: BoxProps<typeof BaseTheme>};
};

const createTheme = <T extends BaseThemeType>(themeObject: T): T => themeObject;

const BaseTheme = {
  colors: {
    text: '#202124',
    background: '#fff',

    muted: '#f1f3f4',

    //Color main
    blue_primary: '#00A4E4',
    lBlue_primary: '#CCEDFA',
    green: '#45C079',
    light_green: '#D4EFDF',
    red: '#E96F6F',
    light_red: '#FBDDDD',

    // from figma file

    black: '#000000',
    black2: '#2A2D2F',
    black3: '#343739',
    grey1: '#323232',
    grey2: '#797979',
    grey3: '#C4C4C4',
    grey4: '#E1E1E1',
    white: 'white',
    danger: '#EB5757',
    lBlue: '#E7ECF3',
    lBlue2: '#F2F4FA',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const theme = createTheme({
  ...BaseTheme,
  // TODO : Not sure if this the best way to handel navigation theme
  navigation: {
    dark: false,
    colors: {
      primary: 'rgb(0, 122, 255)',
      background: '#f8f8fa',
      card: '#f8f8fa',
      text: '#0c1245',
      border: 'rgb(199, 199, 204)',
      notification: 'red',
    },
  },
  buttonVariants: {
    defaults: {},
    primary: {
      backgroundColor: 'blue_primary',
    },
    secondary: {
      backgroundColor: 'lBlue_primary',
    },
    outline: {
      backgroundColor: 'white',
      borderColor: 'blue_primary',
      borderWidth: 1,
    },
  },
  textVariants: {
    defaults: {},
    header: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 42.5,
      color: 'black',
    },
    subheader: {
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'grey1',
    },
    body: {
      fontFamily: 'Inter',
      fontSize: 15,
      lineHeight: 24,
      color: 'grey2',
    },
    button_primary: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_secondary: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_outline: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'text',
    },
    label: {
      fontFamily: 'Inter',
      fontSize: 13,
      lineHeight: 18,
      color: 'grey2',
      paddingVertical: 's',
    },
  },
});

export type Theme = typeof theme;

export const ThemeProvider = ({children}: {children: React.ReactNode}) => (
  <ReThemeProvider theme={theme}>{children}</ReThemeProvider>
);

export const useTheme = () => useRTheme<Theme>();
