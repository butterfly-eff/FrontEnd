import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <StHeaderContainer>
      <div className="title">나비효과</div>
      <StPagesList>
        {/* 라우터에 맞춰서 수정필요 */}
        <button
          onClick={() => {
            navigate('/newbarter');
          }}
          className={window.location.pathname === '/newbarter' ? 'clickbtn' : 'noclick'}
        >
          물물교환
        </button>
        {/* 라우터에 맞춰서 수정필요 */}
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          경매
        </button>
        {/* 라우터에 맞춰서 수정필요 */}
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          마이페이지
        </button>
        {/* 라우터에 맞춰서 수정필요 */}
        <button
          onClick={() => {
            navigate('/signin');
          }}
        >
          로그인
        </button>
      </StPagesList>
    </StHeaderContainer>
  );
}

const StHeaderContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10em;
  box-sizing: border-box;
  border-bottom: 1.5px solid #f2f2f2;
  color: var(--green1);
  .title {
    font-size: 1.5em;
    font-weight: 700;
  }
`;

const StPagesList = styled.div`
  button {
    font-size: 0.9em;
    color: var(--green1);
    margin-left: 0.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .clickbtn {
    font-weight: 700;
  }
  .noclick {
  }
`;

