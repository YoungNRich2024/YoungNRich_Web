import React from "react";
import styled, { css } from "styled-components";

interface IpadQuizBtnProps {
  text: string;
  imageUrl: string;
  checked: boolean | undefined;
  onClick: () => void;
}
// 침실 아이패드 퀴즈1
const IpadQuizBtn: React.FC<IpadQuizBtnProps> = ({text, imageUrl, checked, onClick} ) => {
  return (
    <Wrapper $checked={checked} onClick={onClick}>
      <Title>{text}</Title>
      <Icon src={imageUrl} />
    </Wrapper>
  );
};

export default IpadQuizBtn;

const Wrapper = styled.div<{ $checked: boolean | undefined }>`
  width: 20%;
  aspect-ratio: 1;
  background-color: var(--ipadPurple);
  box-sizing: border-box;
  padding: 2%;
  border-radius: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }

  ${props => props.$checked && css`
    background-color: var(--ipadPink);
    scale: 1.1;
  `}
`;

const Title = styled.div`
  font-family: GowunBatang-Regular;
  font-weight: bold;
  font-size: 1.2vmax;
  text-align: center;
`;

const Icon = styled.img`
  width: 45%;
`;
