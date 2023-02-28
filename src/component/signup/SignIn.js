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
          <div className="title">
            <img src="logo/butterfly.png" alt="logo" />
            나비 효과
          </div>
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
          <div className="go-signup">
            <span>아직 아이디가 없으신가요?</span> <strong onClick={() => navigate('/signup')}>회원가입하기</strong>
          </div>
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
  max-width: 700px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2%;
  .title {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    position: relative;
    font-size: 2.3em;
    font-weight: 700;
    margin-bottom: 0.7em;
    color: var(--gray2);
  }
  img {
    width: 50px;
  }

  .signin-enter {
    width: 100%;
    height: 13%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2%;
    p {
      width: 20%;
      max-width: 14%;
      padding: 0 1%;
      color: var(--gray1);
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
      border: 1px solid #dadada;
      border-radius: 5px;
      padding-left: 10px;
      ::placeholder {
        color: #dadada;
      }
    }
  }
  .signin-btn {
    width: 100%;
    height: 13%;
    margin-top: 7%;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: var(--green2);
  }
  .go-signup {
    margin-top: 3%;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 0.9rem;
    color: var(--gray1);
    gap: 2%;
    strong {
      text-decoration: underline;
      color: var(--gray1);
      cursor: pointer;
    }
  }
`;
