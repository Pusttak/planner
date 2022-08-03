import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-left: 10px;
`;

export const Input = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  color: #fff;
  font-size: 16px;
  background-color: transparent;
  height: 25px;
  border: none;
  border-bottom: solid 1px #ffffff44;

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    color: transparent;
    transition: color 0.4s ease;
  }

  :hover::placeholder,
  :focus::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AddIcon = styled(IoIosAddCircleOutline)`
  display: block;
  color: #ffffff88;
  font-size: 38px;
  transition: color 0.4s ease;

  :hover {
    color: #ffffffdd;
  }
`;
