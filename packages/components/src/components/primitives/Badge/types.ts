import { BadgeProps as ChakraBadgeProps } from '@chakra-ui/react';

export const badgeVariants = ['solid', 'outline', 'subtle'] as const;
export type BadgeVariant = typeof badgeVariants[number];

export interface BadgeProps extends ChakraBadgeProps {
  variant?: BadgeVariant;
}
