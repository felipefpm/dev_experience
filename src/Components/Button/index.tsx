import React, {ButtonHTMLAttributes} from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

function Button({isOutlined = false, ...props}: ButtonProps) {
  return (
    <Container 
    {...props} 
    className={isOutlined ? 'outlined' : ''}
    />
  )
};

export default Button;