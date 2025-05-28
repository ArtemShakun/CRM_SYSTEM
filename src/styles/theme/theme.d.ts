import type * as React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    textXs: React.CSSProperties;
    textXsSemiBold: React.CSSProperties;
    textSmLight: React.CSSProperties;
    textSm: React.CSSProperties;
    textSmMedium: React.CSSProperties;
    textSmSemiBold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    textXs?: React.CSSProperties;
    textXsSemiBold?: React.CSSProperties;
    textSmLight?: React.CSSProperties;
    textSm?: React.CSSProperties;
    textSmMedium?: React.CSSProperties;
    textSmSemiBold?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    textXs: true;
    textXsSemiBold: true;
    textSmLight: true;
    textSm: true;
    textSmMedium: true;
    textSmSemiBold: true;
  }
}
