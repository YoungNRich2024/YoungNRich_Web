import React, { useState } from "react";
import styled from "styled-components";
import pad_large from "../../../assets/bedroom/pad_large.png";
import IpadQuiz1 from "./IpadQuiz1";
import IpadQuiz2 from "./IpadQuiz2";
import IpadQuizSuccess from "./IpadQuizSuccess";
import IpadQuizFail from "./IpadQuizFail";

// 퀴즈 아이템 타입 정의
export interface QuizItem {
  id: number;
  checked: boolean | undefined;
}

// 아이패드 확대
const IpadLarge = () => {
  const [quizStep, setQuizStep] = useState(1); // 아이패드 퀴즈 단계
  const [quiz, setQuiz] = useState<QuizItem[]>([
    { id: 0, checked: undefined },
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
  ]); // 아이패드 퀴즈 답안 선택 (왼쪽 선택이 false, 오른쪽 선택이 true)

  return (
    <Wrapper>
      <Screen>
        {quizStep === 1 && (
          <IpadQuiz1 setQuizStep={setQuizStep} quiz={quiz} setQuiz={setQuiz} />
        )}
        {quizStep === 2 && (
          <IpadQuiz2 setQuizStep={setQuizStep} quiz={quiz} setQuiz={setQuiz} />
        )}
        {quizStep === 3 && <IpadQuizSuccess />}
        {quizStep === 4 && <IpadQuizFail setQuizStep={setQuizStep} />}
      </Screen>
    </Wrapper>
  );
};

export default IpadLarge;

const Wrapper = styled.div`
  width: 50%;
  height: 80%;
  background: url(${pad_large}) center no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Screen = styled.div`
  width: 75%;
  height: 75%;
  padding: 3%;

  @media screen and (orientation: landscape) and (max-height: 500px) and (max-aspect-ratio: 1.8),
    (orientation: portrait) and (max-width: 500px) and (min-aspect-ratio: 0.56) {
    // 화면 길쭉하지 않은 것들 예외 처리
    height: 65%;
  }
`;
