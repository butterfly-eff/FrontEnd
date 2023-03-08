import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NewBarter() {
  const navigate = useNavigate();

  return (
    <>
      <h1>업로드</h1>
      <>
        여기가 물물교환
        <button
          onClick={() => {
            navigate('/details');
          }}
        >
          물물교환상세페이지 가는 임시 버튼
        </button>
      </>
    </>
  );
}

export default NewBarter;

