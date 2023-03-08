import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import NewBarterPage from '../pages/NewBarterPage';
import TradePage from '../pages/TradePage';
import DetailPage from '../pages/DetailPage';

export default function Router() {
  return (
    <>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/newbarter" element={<NewBarterPage />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/details" element={<DetailPage />} />
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

