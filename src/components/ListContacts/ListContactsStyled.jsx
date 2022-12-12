import styled from 'styled-components';

export const List = styled.ul`
  padding-top: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
`;

export const ElementList = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;
