import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { loginChk } from '../../store/store';
import { useMutation } from '@tanstack/react-query';
import { NicknameChk, EmailChk, SignUpForm } from '../../api/ApiPost';

function SignUp() {
  const [islogin, setIsLogin] = useRecoilState(loginChk);
  const [signup, setSignup] = useState(false);

  //react hook form
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  //회원가입
  const { mutate: signUpForm } = useMutation(SignUpForm, {
    onSuccess: (data) => {
      signUpForm({
        email: data.email,
        nickName: data.nickName,
        password: data.password,
        passwordCheck: data.passwordCheck,
      });
      setValue('email', '');
      setValue('nickName', '');
      setValue('password', '');
      setValue('passwordCheck', '');
      alert('회원가입을 성공하셨습니다');
    },
    onError: (err) => {
      alert('입력한 정보를 확인해주세요');
    },
  });

  //전체 오류(값이 비었을 때 - 유효성 검사에 맞지 않을 때)
  const onError = (errors) => {
    alert('입력한 정보를 확인해주세요.');
  };

  // //백엔드 작업 전
  // const { mutate: emailChk } = useMutation(EmailChk, {
  //   onSuccess: ({ data }) => {
  //     if (data.success) {
  //       alert('사용가능한 이메일입니다');
  //     } else {
  //       alert('중복된 이메일입니다');
  //     }
  //   },
  //   onError: (err) => {
  //     alert('다시 한 번 확인해주세요');
  //   },
  // });

  //닉네임 중복확인 - 글자수 체크
  const validateNickname = (value) => {
    if (value.length < 2) {
      console.log(value);
      return '2글자 이상 입력해주세요.';
    }
    return true;
  };

  // 중복확인
  const { mutate: nicknameChk } = useMutation(NicknameChk, {
    onSuccess: (data, value) => {
      if (data.data.success && !value) {
        alert('비어있음');
      } else if (data.data.success && value) {
        alert('사용가능한 닉네임입니다');
      } else {
        alert('중복된 닉네임입니다');
      }
    },
    onError: (err) => {
      alert('다시 한 번 확인해주세요');
    },
  });

  // // 백엔드 작업전
  // const useremailChk = () => {
  //   const { email } = getValues();
  //   emailChk(email);
  // };

  //닉네임 중복확인
  const usernameChk = () => {
    const { nickName } = getValues();
    nicknameChk(nickName);
  };

  return (
    <>
      <StSignUpContainer>
        <StSignUpContent onSubmit={handleSubmit(signUpForm, onError)}>
          <div className="signup-enter email">
            <p>이메일</p>
            <div>
              <input
                type="email"
                placeholder="사용하실 이메일을 입력하세요"
                name="email"
                {...register('email', {
                  required: true,

                  pattern: {
                    value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                    message: '유효한 이메일을 입력해주세요.',
                  },
                })}
              />
              <p className="error-message">{errors && <h1>{errors?.email?.message}</h1>}</p>
            </div>
            <button>이메일 코드 전송</button>
          </div>
          <div className="signup-enter nickname">
            <p>닉네임</p>
            <div>
              <input
                type="text"
                placeholder="사용하실 닉네임을 입력하세요"
                name="nickName"
                {...register('nickName', {
                  required: true,
                  validate: validateNickname,
                  pattern: {
                    value: /^[가-힣a-zA-Z0-9]{2,10}$/,
                    message: '한글/영문/숫자 중 하나 이상을 사용하여 2~10자로 작성해주세요.',
                  },
                })}
              />
              <p className="error-message">{errors && <span>{errors?.nickName?.message}</span>}</p>
            </div>
            <button type="button" onClick={usernameChk}>
              중복확인
            </button>
          </div>
          <div className="signup-enter password">
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
              <p className="error-message">{errors && <h1>{errors?.password?.message}</h1>}</p>
            </div>
          </div>
          <div className="signup-enter password-check">
            <p>비밀번호 확인</p>
            <div>
              <input
                type="password"
                placeholder="비밀번호를 확인해주세요"
                name="passwordCheck"
                {...register('passwordCheck', {
                  required: true,

                  validate: {
                    areSame: (value) => (value === getValues('password') ? true : '비밀번호가 일치하지 않습니다.'),
                  },
                })}
              />
              <p className="error-message">{errors && <h1>{errors?.passwordCheck?.message}</h1>}</p>
            </div>
          </div>
          <div className="signup-enter region">
            <p>지역</p>
            <label htmlFor="cityName">
              <select name="cityName" {...register('cityName', { required: true })}>
                <option value="부산">부산</option>
              </select>
            </label>
          </div>
          <button className="signup-btn">회원가입하기</button>
        </StSignUpContent>
      </StSignUpContainer>
    </>
  );
}

export default SignUp;

const StSignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StSignUpContent = styled.form`
  max-width: 650px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4%;
  .signup-enter {
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
    button {
      width: 34%;
      height: 80%;
      box-sizing: border-box;
      border: 1px solid #555;
      border-radius: 5px;
    }
    .error-message {
      font-size: 0.7rem;
      max-width: 100%;
      width: 100%;
      margin: 0.4rem 0;
      color: red;
    }
  }
  .signup-btn {
    width: 100%;
    height: 12%;
    box-sizing: border-box;
    border: 1px solid #555;
    border-radius: 5px;
    cursor: pointer;
  }
`;
