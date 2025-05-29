import { styled } from '@mui/material';

export const StyledStatusTag = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1.5),
  color: theme.palette.text.primary,
  borderRadius: '99px',
  backgroundColor: theme.palette.background.default,
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)',
  ...theme.typography.textXsRegular,
}));

export const StyledDotStatus = styled('span')<{ online: boolean }>(({ theme, online }) => ({
  backgroundColor: online ? theme.palette.success.main : theme.palette.grey[200],
  display: 'inline-block',
  width: '8px',
  height: '8px',
  borderRadius: '10px',
}));
