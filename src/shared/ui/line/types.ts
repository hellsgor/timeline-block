export type LineProps = {
  direction?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
  opacity?: number;
};

export type StyledLineProps = {
  [K in keyof LineProps as `$${string & K}`]: LineProps[K];
};
