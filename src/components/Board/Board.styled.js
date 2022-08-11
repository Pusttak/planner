import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 20px 8px;
  width: 365px;
  height: 98%;
  border: 1px solid #555555;
  border-radius: 8px;
  background-color: ${p => (p.isDraggingOver ? '#2a2b2d' : '#131416')};
  transition: background-color 0.6s ease;
`;

export const Title = styled.h3`
  text-align: center;
  color: #fff;
  margin-bottom: 25px;
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
  min-height: 45px;
  padding: 15px 10px;
  border-radius: 8px;
  background-color: ${p => (p.isDraggingOver ? '#333438' : '#2b2b2b')};
  transition: background-color 0.6s ease;
`;

export const Box = styled.div`
  height: 100%;
`;
