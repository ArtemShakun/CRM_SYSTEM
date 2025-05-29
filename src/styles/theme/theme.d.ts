import type * as React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    textXsRegular: React.CSSProperties;
    textXsMedium: React.CSSProperties;
    textXsSemiBold: React.CSSProperties;
    textSmLight: React.CSSProperties;
    textSmRegular: React.CSSProperties;
    textSmMedium: React.CSSProperties;
    textSmSemiBold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    textXsRegular?: React.CSSProperties;
    textXsMedium?: React.CSSProperties;
    textXsSemiBold?: React.CSSProperties;
    textSmLight?: React.CSSProperties;
    textSmRegular?: React.CSSProperties;
    textSmMedium?: React.CSSProperties;
    textSmSemiBold?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    textXsRegular: true;
    textXsMedium: true;
    textXsSemiBold: true;
    textSmLight: true;
    textSmRegular: true;
    textSmMedium: true;
    textSmSemiBold: true;
  }
}
