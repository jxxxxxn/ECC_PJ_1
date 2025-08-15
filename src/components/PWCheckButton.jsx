// 비밀번호용
import styled from 'styled-components';
import CheckedButton from "../assets/icons/CheckNick.png";
import UncheckedButton from "../assets/icons/Unchecked.png";

const IconButton = styled.img`
  width: 30px;
  height: 30px;
  user-select: none;
`;

export default function PWCheckButton({ isMatch }) {
  return (
    <IconButton
      src={isMatch ? CheckedButton : UncheckedButton}
      alt={isMatch ? "Checked" : "Unchecked"}
    />
  );
}
