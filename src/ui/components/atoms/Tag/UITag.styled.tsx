import { styled, type CSSObject, type Theme } from '@mui/material';

import type { Variant } from './types';

const variantStyles: Record<Variant, (theme: Theme) => CSSObject> = {
  primary: theme => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
  }),
  secondary: theme => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.grey[300],
    '&:hover': {
      backgroundColor: '#fff',
    },
  }),
  success: theme => ({
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main,
  }),
  info: theme => ({
    backgroundColor: theme.palette.info.light,
    color: theme.palette.info.main,
  }),
  error: theme => ({
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.main,
  }),
  warning: theme => ({
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.main,
  }),
};

export const StyledTag = styled('span')<{ variant: Variant }>(({ theme, variant }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  gap: '4px',
  borderRadius: '99px',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  ...theme.typography.textXsRegular,
  ...variantStyles[variant](theme),
}));

export const IconWrapper = styled('span')(() => ({
  display: 'inline-flex',
  '& svg': {
    fontSize: 12,
  },
}));
