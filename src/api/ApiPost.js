import api from './Api';

//로그인
export async function SignInForm(userData) {
  const data = await api.post('/v1/signin', userData);
  return data;
}

//회원가입
export async function SignUpForm(userData) {
  const { data } = await api.post('/v1/signup', userData);
  return data;
}

//이메일 중복확인
export const EmailChk = async (email) => {
  const data = await api.post('/v1/emailCheck', { email: email });
  return data;
};

//닉네임 중복확인
export const NicknameChk = async (nickname) => {
  const data = await api.post('/v1/nickNameCheck', { nickName: nickname });
  return data;
};
