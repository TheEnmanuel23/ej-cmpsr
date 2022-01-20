import { CSSObject } from '@chakra-ui/system';
import { ComponentDefaultProps } from '@chakra-ui/theme';
import { TextVariant } from '../Text';

export const textPairingVariants = [
  'textpairing-header-4XL',
  'textpairing-header-3XL',
  'textpairing-header-2XL',
  'textpairing-header-XL',
  'textpairing-header-L',
  'textpairing-header-M',
  'textpairing-body-display-2XL',
  'textpairing-body-display-XL',
  'textpairing-body-display-L',
  'textpairing-body-display-M',
  'textpairing-body-display-S',
  'textpairing-body-bold',
  'textpairing-body-medium',
  'textpairing-body-bold-meta',
  'textpairing-body-medium-meta',
  'textpairing-body-regular-meta',
  'textpairing-body-meta-bold',
  'textpairing-body-meta-medium',
] as const;
type TextPairingVariantTuple = typeof textPairingVariants;
export type TextPairingVariant = TextPairingVariantTuple[number];

type TextPairingParts = 'label' | 'subLabel';
export type TextPairingStyles = CSSObject &
  {
    [key in TextPairingParts]: {
      variant: TextVariant;
    };
  } & { columnGap: string };

export interface TextPairingProps extends ComponentDefaultProps {
  variant?: TextPairingVariant;
  label: string;
  subLabel: string;
}