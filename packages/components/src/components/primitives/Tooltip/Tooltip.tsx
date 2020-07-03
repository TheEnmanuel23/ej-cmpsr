import React from 'react';
import ReactTooltip from 'react-tooltip';
import colors from '../../../../lib/styles/colors.js';

export const TOOLTIP_DEFAULT_TEST_ID = 'tooltip';

const defaultColor = colors['fill-primary'][100];

export enum TooltipPlace {
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
  Top = 'top',
}

type Props = {
  id: string;
  place?: TooltipPlace;
  tooltip: React.ReactNode;
  element: React.ReactNode;
  testId?: string;
  backgroundColor?: string;
  className?: string;
};

export const Tooltip = ({
  id,
  place = TooltipPlace.Top,
  tooltip,
  element,
  testId = TOOLTIP_DEFAULT_TEST_ID,
  backgroundColor = defaultColor,
  className,
}: Props) => {
  return (
    <div data-testid={testId}>
      <a data-tip data-for={id}>
        {element}
      </a>
      <ReactTooltip
        backgroundColor={backgroundColor}
        id={id}
        place={place}
        effect={'solid'}
        className={className}
      >
        {tooltip}
      </ReactTooltip>
    </div>
  );
};
