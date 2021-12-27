import styled from 'styled-components';

export const layoutWidth = 1024;
export const rem = 14;

export const halfWidth = `${(layoutWidth / 2) + rem}px`;
export const fullWidth = `${layoutWidth + (2 * rem)}px`;

const HalfLayout = styled.div`
  width: 50%;
  max-width: ${halfWidth};
  margin: 0;
  padding: 0 1rem;
`;

export const LayoutLeft = styled(HalfLayout)`
  margin-left: auto;
`;

export const LayoutRight = styled(HalfLayout)`
  margin-right: auto;
`;

export default styled.div`
  width: 100%;
  max-width: ${fullWidth};
  margin: 0 auto;
  padding: 0 1rem;
`;
