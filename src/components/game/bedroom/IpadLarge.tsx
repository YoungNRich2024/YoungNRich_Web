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
  checked: boolean | undefined | 1 | 2 | 3 | 4;
}

export interface BoolQuizItem {
  id: number;
  checked: boolean | undefined;
} // 선택형

export interface NumQuizItem {
  id: number;
  checked: 1 | 2 | 3 | 4 | undefined;
} // 객관식

// 아이패드 확대
const IpadLarge = () => {
  const [quizStep, setQuizStep] = useState(1); // 아이패드 퀴즈 단계
  const [quizState, setQuizState] = useState<QuizItem[]>([
    { id: 0, checked: undefined }, // 1번
    { id: 1, checked: undefined },
    { id: 2, checked: undefined },
    { id: 3, checked: undefined }, // 2번
    { id: 4, checked: undefined }, // 3번
    { id: 5, checked: undefined }, // 4번
  ]); // 아이패드 퀴즈 답안 선택 

  const [boolQuizState, setBoolQuizState] = useState<BoolQuizItem[]>([
    { id: 2, checked: undefined }, 
    { id: 2, checked: undefined },
    { id: 2, checked: undefined },
  ]); // 아이패드 2번째 퀴즈 답안 선택

  const [numQuizState, setNumQuizState] = useState<NumQuizItem[]>([
    { id: 1, checked: undefined }, 
    { id: 3, checked: undefined },
    { id: 4, checked: undefined },
  ]); // 아이패드 1, 3, 4번째 퀴즈 답안 선택 

  return (
    <Wrapper>
      <PadContainer>
        <Screen>
          {quizStep === 1 && (
            <IpadQuiz1
              setQuizStep={setQuizStep}
              quizState={numQuizState}
              setQuizState={setNumQuizState}
              questionId={1}
            />
          )}
          {quizStep === 2 && (
            <IpadQuiz2
              setQuizStep={setQuizStep}
              quizState={quizState}
              setQuizState={setQuizState}
              questionId={2}
            />
          )}
          {quizStep === 3 && <IpadQuizSuccess />}
          {quizStep === 4 && <IpadQuizFail setQuizStep={setQuizStep} />}
        </Screen>
      </PadContainer>
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

const PadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: pink;
  opacity: 0.4; */
  aspect-ratio: 1459 / 1072;
  width: 100%;
  position: relative;
`;

const Screen = styled.div`
  width: 75%;
  height: 75%;
  padding: 3%;

  // background-color: green;

  /* @media screen and (orientation: landscape) and (max-height: 500px) and (max-aspect-ratio: 1.8),
    (orientation: portrait) and (max-width: 500px) and (min-aspect-ratio: 0.56) {
    // 화면 길쭉하지 않은 것들 예외 처리
    height: 65%;
  } */
`;
