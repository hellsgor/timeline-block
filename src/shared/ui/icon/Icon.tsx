import * as React from 'react';
import { Icons as IconsRaw } from '@/shared/assets';

type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof IconsRaw;
  size?: number;
}

const IconBase = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, ...props }, ref) => {
    const Comp = IconsRaw[name] as SvgComponent;
    return <Comp ref={ref} width={size} height={size} {...props} />;
  },
);

IconBase.displayName = 'Icon';

export const Icon = React.memo(IconBase);
