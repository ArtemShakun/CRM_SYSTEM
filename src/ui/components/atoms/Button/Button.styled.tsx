import { styled, type CSSObject, type Theme } from '@mui/material';

import type { Variant } from './types';

const variantStyles: Record<Variant, (theme: Theme) => CSSObject> = {
  primary: theme => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    border: 'none',
    '&:not(:disabled):hover': {
      opacity: 0.9,
    },
    '&:disabled': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.grey[300],
      cursor: 'not-allowed',
    },
  }),
  outline: theme => ({
    background: 'transparent',
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.grey[100]}`,
    '&:not(:disabled):hover': {
      opacity: 0.9,
      background: theme.palette.grey[100],
    },
    '&:disabled': {
      borderColor: 'transparent',
      border: `1px solid ${theme.palette.grey[100]}`,
      color: theme.palette.grey[300],
      cursor: 'not-allowed',
    },
  }),
};

export const StyledButton = styled('button')<{
  variant: Variant;
  $hasText: boolean;
}>(({ theme, variant, $hasText }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.6),
  padding: theme.spacing(1.5, $hasText ? 3 : 1.75),
  borderRadius: theme.spacing(0.75),
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ...theme.typography.textXsSemiBold,
  ...variantStyles[variant](theme),
}));

export const IconWrapper = styled('span')<{ $iconSize: number }>(({ $iconSize }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: $iconSize,
  height: $iconSize,
  '& svg': {
    fontSize: $iconSize,
  },
}));
