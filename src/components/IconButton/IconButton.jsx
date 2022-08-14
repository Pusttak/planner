import { Button } from './IconButton.styled';

const IconButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default IconButton;
