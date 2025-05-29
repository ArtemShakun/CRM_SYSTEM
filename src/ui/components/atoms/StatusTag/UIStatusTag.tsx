import { StyledDotStatus, StyledStatusTag } from './UIStatusTag.styled';

type UIStatusTagProp = {
  online: boolean;
};

export const UIStatusTag = ({ online }: UIStatusTagProp) => {
  return (
    <StyledStatusTag>
      <StyledDotStatus online={online} />
      Online
    </StyledStatusTag>
  );
};
