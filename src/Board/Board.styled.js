import styled from 'styled-components';

export const BoardContainer = styled.div`
  width: 300px;
  border: 1px solid #555555;
  border-radius: 6px;
  padding: 15px;
  background-color: ${props =>
    props.isDraggingOver ? 'rgb(142, 140, 286)' : 'rgb(242, 240, 186)'};
  min-height: 25px;
  transition: background-color 0.4s ease;
  margin-right: 15px;
`;

export const Title = styled.h3`
  margin: 0;
  text-align: center;
  color: #225588;
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
`;
