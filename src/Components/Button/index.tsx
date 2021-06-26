import React, {ButtonHTMLAttributes} from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
  return <Container {...props} />
};

export default Button;