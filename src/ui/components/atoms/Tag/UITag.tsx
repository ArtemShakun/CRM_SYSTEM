import CloseIcon from '@mui/icons-material/Close';

import { IconWrapper, StyledTag } from './UITag.styled';

import type { IUITagProps } from './types';

const renderIcon = () => (
  <IconWrapper>
    <CloseIcon />
  </IconWrapper>
);

export const UITag = ({
  withIcon = false,
  variant = 'primary',
  children,
  position = 'start',
  ...props
}: IUITagProps) => {
  return (
    <StyledTag {...props} variant={variant}>
      {withIcon && position === 'start' && renderIcon()}
      {children}
      {withIcon && position === 'end' && renderIcon()}
    </StyledTag>
  );
};
