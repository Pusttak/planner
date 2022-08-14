import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 40px;
  height: 40px;
  cursor: pointer;

  & > svg {
    fill: #ffffff88;
    transition: all 0.3s ease;
  }

  &:hover > svg {
    fill: #fff;
    transform: scale(1.1);
  }
`;
