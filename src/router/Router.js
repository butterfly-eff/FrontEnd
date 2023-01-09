import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';

export default function Router() {
  return (
    <>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </App>
    </>
  );
}

const App = styled.div`
  width: 1920px;
  height: 100vh;

  @media screen {
    width: 100%;
  }
`;

