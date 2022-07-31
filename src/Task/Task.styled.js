import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 6px;
  min-height: 35px;
  background-color: ${props => (props.isDragging ? 'green' : '#225588')};
`;

export const Content = styled.h4`
  margin: 0;
  padding: 12px;
  color: #fff;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;

export const DragHandle = styled.div`
  width: 25px;
  height: 25px;
  background: #446699;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 4px;
`;
