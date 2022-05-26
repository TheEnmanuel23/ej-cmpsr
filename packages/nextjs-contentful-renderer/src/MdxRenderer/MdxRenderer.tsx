import React, { FC, useEffect, useMemo, useState } from 'react';
import * as Composer from '@cmpsr/components';
import { getMDXComponent } from 'mdx-bundler/client';
import { Paragraph, Text } from './components';
import { MdxRendererProps } from './types';

const renderHeader = ({ children, ...props }: Composer.TextProps, as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
  const variants = {
    h1: 'text-header-4XL' as const,
    h2: 'text-header-3XL' as const,
    h3: 'text-header-2XL' as const,
    h4: 'text-header-XL' as const,
    h5: 'text-header-L' as const,
    h6: 'text-header-M' as const,
  };
  return (
    <Text as={as} variant={variants[as]} {...props}>
      {children}
    </Text>
  );
};

const components: any = Object.keys(Composer).reduce(
  (acc, key) => {
    const descriptor = Reflect.getOwnPropertyDescriptor(Composer, key);
    if (
      descriptor?.get &&
      (typeof descriptor.get() === 'function' || typeof descriptor?.get()?.render === 'function')
    ) {
      return { ...acc, [key]: descriptor.get() };
    } else {
      return acc;
    }
  },
  {
    p: Paragraph,
    h1: (props: Composer.TextProps) => renderHeader(props, 'h1'),
    h2: (props: Composer.TextProps) => renderHeader(props, 'h2'),
    h3: (props: Composer.TextProps) => renderHeader(props, 'h3'),
    h4: (props: Composer.TextProps) => renderHeader(props, 'h4'),
    h5: (props: Composer.TextProps) => renderHeader(props, 'h5'),
    h6: (props: Composer.TextProps) => renderHeader(props, 'h6'),
    a: (props: Composer.LinkProps) => <Composer.Link display="inline-flex" {...props} />,
    img: Composer.Image,
  }
);

export const MdxRenderer: FC<MdxRendererProps> = ({ content = {}, componentMap = {} }) => {
  const [isClient, setIsClient] = useState(false);
  const code = Composer.useBreakpointValue(content) || content.base;
  const MdxComponent = useMemo(() => getMDXComponent(code), [code]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return !isClient ? null : <MdxComponent components={{ ...components, Text, ...componentMap }} />;
};