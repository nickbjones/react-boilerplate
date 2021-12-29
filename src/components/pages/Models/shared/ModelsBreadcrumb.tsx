import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ModelsBreadcrumbWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;
const GtSym = styled.span`
  margin: 0 6px;
`;

type ModelsBreadcrumbProps = {
  currentPage: string;
};

export default function ModelsBreadcrumb(props: ModelsBreadcrumbProps) {
  return (
    <ModelsBreadcrumbWrapper>
      <Link to="/models">Models</Link>
      <GtSym>/</GtSym>
      <span>{props.currentPage}</span>
    </ModelsBreadcrumbWrapper>
  );
}
