import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SignInForm } from '../../api/ApiPost';

function SignIn() {
  const navigate = useNavigate();
  const [signin, setSignin] = useState(false);

  //react hook form
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  // 로그인
  const { mutate: signinform } = useMutation(SignInForm, {
    onSuccess: (data) => {
      console.log(data);
      sessionStorage.setItem('access_token', data.headers.Access_Token);
      sessionStorage.setItem('refresh_token', data.headers.refresh_token);
      sessionStorage.setItem('userinfo', JSON.stringify(data.data));
      alert('로그인이 완료되었습니다.');
      setSignin(true);
    },
    onError: (err) => {
      console.log(err);
      alert('정보를 다시 확인해주세요.');
    },
  });

  const onSignin = (data) => {
    signinform({
      email: data.email,
      password: data.password,
    });
    setValue('email', '');
    setValue('password', '');
  };

  return (
    <>
      <StSignInContainer>
        <StSignInContent onSubmit={handleSubmit(onSignin)}>
          <p className="title">나비 효과</p>
          <div className="signin-enter email">
            <p>이메일</p>
            <div>
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                name="email"
                {...register('email', {
                  required: true,

                  pattern: {
                    value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                    message: '유효한 이메일을 입력해주세요.',
                  },
                })}
              />
              {errors && <h1>{errors?.email?.message}</h1>}
            </div>
          </div>
          <div className="signin-enter password">
            <p>비밀번호</p>
            <div>
              <input
                type="password"
                placeholder="사용하실 비밀번호를 입력하세요"
                name="password"
                {...register('password', {
                  required: true,

                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&+=]{8,16}$/,
                    message: '영문/숫자 중 하나 이상을 사용하여 8-16자로 입력해주세요.',
                  },
                })}
              />
              {errors && <h1>{errors?.password?.message}</h1>}
            </div>
          </div>
          <button className="signin-btn">이메일로 로그인</button>
          <p className="go-signup">
            아직 아이디가 없으신가요? <strong onClick={() => navigate('/signup')}>회원가입하기</strong>
          </p>
        </StSignInContent>
      </StSignInContainer>
    </>
  );
}

export default SignIn;

const StSignInContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StSignInContent = styled.form`
  max-width: 650px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3%;
  .title {
    margin-bottom: 3%;
    display: flex;
    align-self: center;
    width: fit-content;
    position: relative;
    font-size: 2rem;
  }

  .signin-enter {
    width: 100%;
    height: 12%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2%;
    p {
      width: 30%;
      max-width: 16%;
      padding: 0 1%;
    }
    div {
      width: 100%;
      height: 80%;
      box-sizing: border-box;
    }
    input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 1px solid #555;
      border-radius: 5px;
      padding-left: 10px;
    }
  }
  .signin-btn {
    width: 100%;
    height: 12%;
    margin-top: 7%;
    border: 1px solid #555;
    border-radius: 5px;
  }
  .go-signup {
    margin-top: 3%;
    display: flex;
    align-self: center;
    width: 40%;
    position: relative;
    font-size: 0.8rem;
    strong {
      position: absolute;
      text-decoration: underline;
      right: 0;
      cursor: pointer;
    }
  }
`;
