import styled from 'styled-components';
import cameraIcon from '../../assets/icons/camera.svg';
import checkedIcon from '../../assets/icons/CheckNick.png';
import uncheckedIcon from '../../assets/icons/unchecked.png';

// 전체 컨테이너
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 100px 25px;
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
  font-family: 'Pretendard';
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
  background: #F0F0F0;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  font-family: 'Pretendard';
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

const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
  background: #F0F0F0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImageIcon = styled.img`
  width: 45px;
  height: 45px;
`;

const ChangePhotoButton = styled.div`
  background: #F0F0F0;
  border-radius: 30px;
  padding: 19px 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChangePhotoText = styled.div`
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;
  color: black;
`;

// 저장 버튼
const SaveButton = styled.button`
  background: #FFE3D7;
  border-radius: 30px;
  padding: 18px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const SaveText = styled.span`
  color: #FF6148;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;
`;


const PfEditGeneral = () => {
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
              <PasswordInput placeholder="비밀번호 입력" />
              <Icon src={checkedIcon} />
            </PasswordField>
            <PasswordField>
              <PasswordInput placeholder="비밀번호 확인" />
              <Icon src={uncheckedIcon} />
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

      <SaveButton>
        <SaveText>저장</SaveText>
      </SaveButton>
    </Container>

  );
};

export default PfEditGeneral;