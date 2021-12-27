import styled, { css } from 'styled-components';

export type BreakpointProps = 'sp' | 'pc' | 'both';

const smallMax = 767;
const mediumMin = 768;
const mediumMax = 994;
const largeMin = 995;
const smallMaxPx = `${smallMax}px`;
const mediumMinPx = `${mediumMin}px`;
const mediumMaxPx = `${mediumMax}px`;
const largeMinPx = `${largeMin}px`;

// media queries
export const smallOnly = (cssRules: string) => css`
  @media (max-width: ${smallMaxPx}) {
    ${cssRules}
  }
`;

export const mediumOnly = (cssRules: string) => css`
  @media (min-width: ${mediumMinPx}) and (max-width: ${mediumMaxPx}) {
    ${cssRules}
  }
`;

export const mediumDown = (cssRules: string) => css`
  @media (max-width: ${mediumMaxPx}) {
    ${cssRules}
  }
`;

export const mediumUp = (cssRules: string) => css`
  @media (min-width: ${mediumMinPx}) {
    ${cssRules}
  }
`;

export const largeOnly = (cssRules: string) => css`
  @media (min-width: ${largeMinPx}) {
    ${cssRules}
  }
`;

// responsive hide divs
export const SpHide = styled.div`
  @media (max-width: ${smallMaxPx}) {
    display: none;
  }
`;

export const PcHide = styled.div`
  @media (min-width: ${mediumMinPx}) {
    display: none;
  }
`;
