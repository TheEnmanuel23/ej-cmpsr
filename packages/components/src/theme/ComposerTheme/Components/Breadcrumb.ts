import { ComponentStyleConfig } from '@chakra-ui/react';

export const Breadcrumb: ComponentStyleConfig = {
  parts: ['container', 'separator', 'separatorIcon', 'lastItem'],
  baseStyle: ({ theme }) => ({
    container: {
      columnGap: '0.5rem',
    },
    separator: {
      ...theme.textStyles['text-body-medium'],
      color: 'text-primary',
    },
    separatorIcon: {
      size: 'm',
      color: 'text-secondary',
    },
    lastItem: {
      ...theme.textStyles['text-body-medium'],
      color: 'text-secondary',
    },
  }),
};