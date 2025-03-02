import React from "react";
import styled, { css } from "styled-components";
import { BoolQuizItem, NumQuizItem } from "./IpadLarge";
import {
  bedroomEscapeBoolData,
  bedroomEscapeNumData,
  bedroomIpadQuizInfo,
} from "../../../data/bedroomData";
import IpadQuizBtn from "./IpadQuizBtn";

interface IpadQuiz1Props {
  setQuizStep: React.Dispatch<React.SetStateAction<number>>; // 아이패드 퀴즈 단계 설정 함수
  quizState: NumQuizItem[]; // 아이패드 퀴즈 답안
  setQuizState: React.Dispatch<React.SetStateAction<NumQuizItem[]>>; // 아이패드 퀴즈 답안 선택 설정 함수
  questionId: number; // 문제 번호
  boolQuizState?: BoolQuizItem[]; // 아이패드 2번 퀴즈 답안
}
// 침실 아이패드 퀴즈1
const IpadQuiz1: React.FC<IpadQuiz1Props> = ({
  setQuizStep,
  quizState,
  setQuizState,
  questionId,
  boolQuizState,
}) => {
  const quizInfo = bedroomIpadQuizInfo.find((item) => item.id === questionId); // 문제 정보
  const checkedValue = quizState.find(
    (item) => item.id === questionId
  )?.checked; // 현재 선택한 번호

  // 이미지 선택 시 실행되는 함수
  const clickChoice = (choice: 1 | 2 | 3 | 4) => {
    setQuizState((prevQuiz) =>
      prevQuiz.map((item) =>
        item.id === questionId ? { ...item, checked: choice } : item
      )
    );
  };

  const clickPrevBtn = () => {
    setQuizStep(questionId - 1);
  };

  // next 버튼 클릭 시 실행되는 함수
  const clickNextBtn = () => {
    // 체크되어 있지 않을 경우 alert
    setQuizStep(questionId + 1);
  };
  // submit 클릭 시 실행되는 함수
  const clickSubmitBtn = () => {
    // 최종 답안이 정답인지 확인
    if (
      JSON.stringify(quizState) === JSON.stringify(bedroomEscapeNumData) &&
      JSON.stringify(boolQuizState) === JSON.stringify(bedroomEscapeBoolData)
    ) {
      // 성공 페이지로 이동
      setQuizStep(6);
    } else {
      // 실패 페이지로 이동
      setQuizStep(5);
    }
  };

  return (
    <Wrapper>
      <Title>오늘의 경제 퀴즈 #{questionId}</Title>
      <Quiz>
        <QuizText>Q. {quizInfo?.question}</QuizText>
        <QuizChoice $flexDirection={quizInfo?.imageUrl}>
          {quizInfo?.choices.map((item, index) => {
            return quizInfo.imageUrl ? (
              <IpadQuizBtn
                key={index}
                text={item}
                imageUrl={quizInfo.imageUrl}
                checked={checkedValue === index + 1}
                onClick={() => clickChoice((index + 1) as 1 | 2 | 3 | 4)}
              />
            ) : (
              <QuizItem
                key={index}
                $checked={checkedValue === index + 1}
                onClick={() => clickChoice((index + 1) as 1 | 2 | 3 | 4)}
              >
                {item}
              </QuizItem>
            );
          })}
        </QuizChoice>
      </Quiz>
      <Move>
        <PrevBtn $isFirstQuiz={questionId === 1} onClick={clickPrevBtn}>
          ◀ prev
        </PrevBtn>
        {questionId === 4 ? (
          <SubmitBtn $checked={checkedValue} onClick={clickSubmitBtn}>
            submit ▶
          </SubmitBtn>
        ) : (
          <NextBtn $checked={checkedValue} onClick={clickNextBtn}>
            next ▶
          </NextBtn>
        )}
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

const QuizChoice = styled.div<{ $flexDirection: string | null | undefined }>`
  /* 선택지에 이미지가 필요한 문제일 경우 가로 정렬, 없을 경우 세로 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.$flexDirection ? "row" : "column")};
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
  justify-content: space-between;
`;

const MoveBtn = styled(Title)`
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0px 0px 10px var(--black);
  cursor: pointer;
`;

const PrevBtn = styled(MoveBtn)<{ $isFirstQuiz: boolean }>`
  // 문제 번호 1이면 prev 버튼 보여주지 않기
  visibility: ${(props) => (props.$isFirstQuiz ? "hidden" : "visible")};
`;

const NextBtn = styled(MoveBtn)<{ $checked: 1 | 2 | 3 | 4 | undefined }>`
  // 답안 선택되기 전까지는 hidden 처리하기
  visibility: ${(props) => (props.$checked ? "visible" : "hidden")};
`;

const SubmitBtn = styled(NextBtn)`
  color: var(--gold4);
  text-shadow: 0px 0px 10px var(--gold4);
`;
