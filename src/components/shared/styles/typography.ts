const linkStates = `
  &:link,
  &:visited,
  &:hover,
  &:active
`;

export default {
  // font weights
  weightNormal: 400,
  weightBold: 700,
  
  // font sizes
  xs: '0.5rem',
  sm: '0.8rem',
  normal: '1rem',
  lg: '1.5rem',
  xl: '2rem',

  linkStates,
} as const;
