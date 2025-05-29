import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { StyledLinkTag } from './UILinkTag.styled';

type UILinkTagProp = {
  position?: 'start' | 'end';
  link: string;
  title: string;
};

export const UILinkTag = ({ position = 'start', link, title }: UILinkTagProp) => {
  return (
    <StyledLinkTag href={link}>
      {position === 'start' && <AddCircleOutlineIcon style={{ fontSize: '16px' }} />}
      <span>{title}</span>
      {position === 'end' && <AddCircleOutlineIcon style={{ fontSize: '16px' }} />}
    </StyledLinkTag>
  );
};
