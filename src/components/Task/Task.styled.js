import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 42px;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${props => (props.isDragging ? '#c37cc0' : '#f03086')};
  transform: scale(${props => (props.isDragging ? '1.03' : '1')});
  transition: all 0.3s ease;
`;

export const Content = styled.h4`
  margin: 0;
  padding: 4px;
  color: #fff;
`;

export const NumberItem = styled.span`
  margin-left: 8px;
  color: #ffffff88;
  font-weight: 700;
`;

export const BoxItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const DragHandle = styled.div`
  width: 25px;
  height: 25px;
  background: #446699;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 4px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding-right: 4px;
  width: 100%;
  background-color: #f66052;
`;

export const Input = styled.input`
  flex-grow: 1;
  font-size: 16px;
  font-family: Segoe UI;
  padding: 12px 4px;
  font-weight: 700;
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  display: block;
  height: 34px;
  background-color: #ffffffbb;
  color: #f66052;
  border: none;
  font-size: 14px;
  font-family: Segoe UI;
  font-weight: 500;
  padding: 0 12px;
  border-radius: 6px;
  cursor: pointer;
`;
