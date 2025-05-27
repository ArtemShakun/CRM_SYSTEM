declare module '@mui/material/styles' {
  type TypographyVariants = {
    textXs: React.CSSProperties;
    textXsSemiBold: React.CSSProperties;
    textSmLight: React.CSSProperties;
    textSm: React.CSSProperties;
    textSmMedium: React.CSSProperties;
    textSmSemiBold: React.CSSProperties;
  };

  type TypographyVariantsOptions = {
    textXs?: React.CSSProperties;
    textXsSemiBold?: React.CSSProperties;
    textSmLight?: React.CSSProperties;
    textSm?: React.CSSProperties;
    textSmMedium?: React.CSSProperties;
    textSmSemiBold?: React.CSSProperties;
  };
}

declare module '@mui/material/Typography' {
  type TypographyPropsVariantOverrides = {
    textXs: true;
    textXsSemiBold: true;
    textSmLight: true;
    textSm: true;
    textSmMedium: true;
    textSmSemiBold: true;
  };
}
