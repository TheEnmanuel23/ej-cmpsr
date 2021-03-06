import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

export const buttonVariants = [
  'accent',
  'primary',
  'primary-alt',
  'secondary',
  'secondary-alt',
  'destroy',
  'link',
] as const;
export type ButtonVariant = typeof buttonVariants[number];
export const buttonSizes = ['xs', 's', 'm', 'l'] as const;
export type ButtonSize = typeof buttonSizes[number];

export interface ButtonProps extends ChakraButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}
