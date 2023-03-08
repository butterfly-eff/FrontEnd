import React from 'react';
import styled from 'styled-components';

function DetailInfoPage() {
  return (
    <div>
      <Blank></Blank>
      <PageLayout>
        <ImageContainer>
          <ImageBox></ImageBox>
          <InfoContainer>
            <Catecory>카테고리 - 종류 - 종류2</Catecory>
            <TitleBox>
              <TitleName>제목</TitleName>
              <Title>나비효과 판매합니다</Title>
              <HeartLike>좋</HeartLike>
            </TitleBox>
            <InfoBox>판매자 : 나비효과 </InfoBox>
            <ButtonBox>
              <EditButton>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </ButtonBox>
          </InfoContainer>
        </ImageContainer>
        <CommentContainer>
          <ThumbnailBox></ThumbnailBox>
          <CommentTitleBox>
            <CommentTitle>나비효과</CommentTitle>
            <CommentCost>구매가 : 2000원 </CommentCost>
            <CommentPeriod>소비기한 :1개월 </CommentPeriod>
          </CommentTitleBox>
          <CommentBox>솰라솰라솰라 얄리얄리얄라셩얄라리얄라</CommentBox>
          <CommentButtonBox>
            <CommentEditButton>수정</CommentEditButton>
            <CommentDeleteButton>삭제</CommentDeleteButton>
          </CommentButtonBox>
        </CommentContainer>
      </PageLayout>
    </div>
  );
}

export default DetailInfoPage;

const Blank = styled.div`
  width: 100%;
  height: 95px;
`;
const PageLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const ImageContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  gap: 36px;
`;
const ImageBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: #d9d9d9;
`;
const InfoContainer = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Catecory = styled.div`
  width: 100%;
  height: 50px;
`;
const TitleBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
`;
const TitleName = styled.div`
  width: 20%;
  height: 100%;
`;
const Title = styled.div`
  width: 60%;
  height: 100%;
`;
const HeartLike = styled.div`
  width: 20%;
  height: 100%;
`;
const InfoBox = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid gray;
  border-radius: 8px;
`;
const ButtonBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
`;
const EditButton = styled.div`
  width: 100px;
  height: 50px;
  background-color: #bac7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const DeleteButton = styled.div`
  width: 100px;
  height: 50px;
  background-color: #bac7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const CommentContainer = styled.div`
  width: 1000px;
  height: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ThumbnailBox = styled.div`
  width: 120px;
  height: 120px;
  background-color: #d9d9d9;
  margin-left: 10px;
`;
const CommentTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentTitle = styled.div``;
const CommentCost = styled.div``;
const CommentPeriod = styled.div``;
const CommentBox = styled.div`
  width: 460px;
  height: 100%;
  display: flex;
  align-items: center;
`;
const CommentButtonBox = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;
const CommentEditButton = styled.div`
  width: 77px;
  height: 35px;
  background-color: #bac7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const CommentDeleteButton = styled.div`
  width: 77px;
  height: 35px;
  background-color: #bac7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

