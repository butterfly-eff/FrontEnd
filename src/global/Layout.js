import styled from 'styled-components';

export default function Layout({ children }) {
  return <LayoutStyle>{children}</LayoutStyle>;
}

const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
`;

