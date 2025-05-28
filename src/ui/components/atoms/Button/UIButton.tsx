import { IconWrapper, StyledButton } from './UIButton.styled';

import type { IButtonProps } from './types';

export const UIButton = ({
  iconPosition = 'start',
  variant = 'primary',
  disabled = false,
  iconSize = 20,
  icon,
  children,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton variant={variant} disabled={disabled} $hasText={!!children} {...props}>
      {icon && iconPosition === 'start' && <IconWrapper $iconSize={iconSize}>{icon}</IconWrapper>}
      {children}
      {icon && iconPosition === 'end' && <IconWrapper $iconSize={iconSize}>{icon}</IconWrapper>}
    </StyledButton>
  );
};
