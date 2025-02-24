import React from "react";
import styled, { css } from "styled-components";
import { NumQuizItem } from "./IpadLarge";
import { bedroomIpadQuizInfo } from "../../../data/bedroomData";

interface IpadQuiz1Props {
  setQuizStep: React.Dispatch<React.SetStateAction<number>>; // 아이패드 퀴즈 단계 설정 함수
  quizState: NumQuizItem[]; // 아이패드 퀴즈 답안
  setQuizState: React.Dispatch<React.SetStateAction<NumQuizItem[]>>; // 아이패드 퀴즈 답안 선택 설정 함수
  questionId: number; // 문제 번호
}
// 침실 아이패드 퀴즈1
const IpadQuiz1: React.FC<IpadQuiz1Props> = ({
  setQuizStep,
  quizState,
  setQuizState,
  questionId,
}) => {
  const quizInfo = bedroomIpadQuizInfo.find((item) => item.id === questionId); // 문제 정보
  const checkedValue = quizState.find((item) => item.id === questionId)?.checked; // 현재 선택한 번호

  // 이미지 선택 시 실행되는 함수
  const clickChoice = (choice: 1 | 2 | 3 | 4) => {
    setQuizState((prevQuiz) =>
      prevQuiz.map((item) =>
        item.id === questionId ? { ...item, checked: choice } : item
      )
    );
  };

  // next 버튼 클릭 시 실행되는 함수
  const clickNextBtn = () => {
    // 체크되어 있지 않을 경우 alert
    setQuizStep(2);
  };

  return (
    <Wrapper>
      <Title>오늘의 경제 퀴즈 #{questionId}</Title>
      <Quiz>
        <QuizText>Q. {quizInfo?.question}</QuizText>
        <QuizChoice>
          {quizInfo?.choices.map((item, index) => {
            return (
              <QuizItem
                key={index}
                $checked={checkedValue == index + 1}
                onClick={() => clickChoice((index + 1) as 1 | 2 | 3 | 4)}
              >
                {item}
              </QuizItem>
            );
          })}
        </QuizChoice>
      </Quiz>
      <Move>
        <NextBtn $checked={checkedValue} onClick={clickNextBtn}>
          next ▶
        </NextBtn>
      </Move>
    </Wrapper>
  );
};

export default IpadQuiz1;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-family: GowunBatang-Regular;
  font-size: 1.7vmax;
`;

const Quiz = styled.div``;

const QuizText = styled.div`
  font-family: Pretendard-Regular;
  word-break: keep-all;
  white-space: pre-wrap;

  font-size: 1.155vmax;
  line-height: 1.7vmax;
`;

const QuizChoice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  margin: 4% 0;
`;

const QuizItem = styled.div<{ $checked: boolean | undefined }>`
  width: 90%;
  box-sizing: border-box;
  padding: 2%;
  border-radius: 20px;

  font-size: 1vmax;
  font-family: "Pretendard-Regular";
  text-align: center;

  background-color: var(--ipadPurple);

  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }

  ${(props) =>
    props.$checked &&
    css`
      background-color: var(--ipadPink);
      scale: 1.1;
    `}
`;

const Move = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NextBtn = styled(Title)<{ $checked: 1 | 2 | 3 | 4 | undefined }>`
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0px 0px 10px var(--black);
  cursor: pointer;

  // 답안 선택되기 전까지는 hidden 처리하기
  visibility: ${(props) => (props.$checked ? "visible" : "hidden")};
`;
