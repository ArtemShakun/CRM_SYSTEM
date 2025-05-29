import { styled } from '@mui/material';

export const StyledLinkTag = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  textDecoration: 'none',
  color: theme.palette.primary.main,
  cursor: 'pointer',
  ...theme.typography.textXsRegular,
}));
