import React, { useState } from "react";
import styled from "styled-components";
import PWCheckButton from "../../components/PWCheckButton";
import cameraIcon from "../../assets/icons/camera.svg";
import { PopupModal } from "../../components";
import { DeleteModal } from "../../components";
import { api } from "../../lib/api";

const PfEditGeneral = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [logoutModal, setLogoutModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const isMatch = password !== "" && password === confirm;

  const handleLogout = () => {
    api.post("/auth/logout");
    setLogoutModal(false);
  };

  const handleDelete = () => {};

  return (
    <Container>
      <InputSection>
        <ProfileSection>
          <ProfileImageWrapper>
            <ProfileImageIcon src={cameraIcon} />
          </ProfileImageWrapper>
          <ChangePhotoButton>
            <ChangePhotoText>사진 변경</ChangePhotoText>
          </ChangePhotoButton>
        </ProfileSection>

        <Field>
          <Label>닉네임</Label>
          <InputField>
            <InputWrapper placeholder="닉네임을 입력하세요" />
          </InputField>
        </Field>

        <Field>
          <Label>비밀번호</Label>
          <PasswordSection>
            <PasswordField>
              <PasswordInput
                type="password"
                placeholder="비밀번호 입력"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PWCheckButton />
            </PasswordField>
            <PasswordField>
              <PasswordInput
                type="password"
                placeholder="비밀번호 확인"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <PWCheckButton isMatch={isMatch} />
            </PasswordField>
          </PasswordSection>
        </Field>

        <Field>
          <Label>이메일</Label>
          <InputField>
            <InputWrapper placeholder="이메일을 입력하세요" />
          </InputField>
        </Field>
      </InputSection>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between", // 좌우 배치
          alignItems: "center",
          width: "100%",
        }}
      >
        <SaveButton>
          <SaveText>저장</SaveText>
        </SaveButton>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <LogoutButton onClick={() => setLogoutModal(true)}>
            로그아웃
          </LogoutButton>
          <DeleteButton onClick={() => setDeleteModal(true)}>탈퇴</DeleteButton>
        </div>
      </div>
      {deleteModal && (
        <DeleteModal
          content="계정을 삭제 하시겠습니까?"
          buttonText1="취소"
          buttonText2="네"
          onClick1={() => setDeleteModal(false)}
          onClick2={() => setDeleteModal(false)}
        />
      )}
      {logoutModal && (
        <PopupModal
          content="로그아웃 하시겠습니까?"
          buttonText1="취소"
          buttonText2="네"
          onClick1={() => setLogoutModal(false)}
          onClick2={handleLogout}
        />
      )}
    </Container>
  );
};

export default PfEditGeneral;

// 전체 컨테이너
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
`;

// 입력 그룹 묶음
const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

// 각 입력 필드 묶음 (닉네임, 이메일 등)
const Field = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
`;

const Label = styled.label`
  width: 150px;
  padding-top: 12px;
  font-size: 24px;
  font-weight: 600;
  font-family: "Pretendard";
  color: black;
`;

const InputField = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1000px;
  height: 54px;
`;

const InputWrapper = styled.input`
  width: 600px;
  height: 54px;
  padding: 0 25px;
  background: #f0f0f0;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 300;
  color: black;

  &::placeholder {
    color: #767676;
  }
`;

// 비밀번호 입력 섹션 (2개 필드)
const PasswordSection = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const PasswordField = styled.div`
  width: 800px;
  display: flex;
  flex-direcrtion: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 20px;
`;

const PasswordInput = styled(InputWrapper)`
  width: 600px;
`;

// 프로필 & 사진 변경
const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
`;

const ProfileImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 9999px;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImageIcon = styled.img`
  width: 45px;
  height: 45px;
`;

// 사진 변경 버튼
const ChangePhotoButton = styled.button`
  background: #f0f0f0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 19px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

const ChangePhotoText = styled.div`
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 500;
  color: black;
`;

// 저장 버튼
const SaveButton = styled.button`
  background: #ffe3d7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 18px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const SaveText = styled.span`
  color: #ff6148;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 500;
`;

const LogoutButton = styled.button`
  all: unset;
  font-size: 18;
  background-color: #929191;
  color: #ffffff;
  padding: 15px 20px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const DeleteButton = styled.button`
  all: unset;
  font-size: 18;
  background-color: #929191;
  color: #fa5151;
  padding: 15px 20px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
