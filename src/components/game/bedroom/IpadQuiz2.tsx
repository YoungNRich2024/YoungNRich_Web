import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { QuizItem } from "./IpadLarge";
import { bedroomEscapeData } from "../../../data/bedroomData";

interface IpadQuiz2Props {
  setQuizStep: React.Dispatch<React.SetStateAction<number>>; // 아이패드 퀴즈 단계 설정 함수
  quizState: QuizItem[]; // 아이패드 퀴즈 답안
  setQuizState: React.Dispatch<React.SetStateAction<QuizItem[]>>; // 아이패드 퀴즈 답안 선택 설정 함수
}
// 침실 아이패드 2
const IpadQuiz2: React.FC<IpadQuiz2Props> = ({
  setQuizStep,
  quizState,
  setQuizState,
}) => {
  // submit 클릭 시 실행되는 함수
  const clickSubmit = () => {
    // 퀴즈가 정답인지 확인
    if (JSON.stringify(quizState) === JSON.stringify(bedroomEscapeData)) {
      // alert("성공");
      setQuizStep(3);
    } else {
      // alert("실패");
      setQuizStep(4);
    }
  };

  return (
    <Wrapper>
      <Title>오늘의 경제 퀴즈 #2</Title>
      <Quiz>
        <QuizLine>
          <QuizText>Q. 금리가 낮아지면 은행에 저축하려는 사람들이</QuizText>
          <Toggle
            toggleId={1}
            labelOne={"줄어들고"}
            labelTwo={"늘어나고"}
            quiz={quizState}
            setQuiz={setQuizState}
          />
        </QuizLine>

        <QuizLine>
          <QuizText>시장에 자금이 </QuizText>
          <Toggle
            toggleId={2}
            labelOne={"많아져"}
            labelTwo={"적어져"}
            quiz={quizState}
            setQuiz={setQuizState}
          />
          <QuizText>주식 시장에도 돈이 몰리게 되면서 </QuizText>
        </QuizLine>

        <QuizLine>
          <QuizText>주가가 </QuizText>
          <Toggle
            toggleId={3}
            labelOne={"상승"}
            labelTwo={"하락"}
            quiz={quizState}
            setQuiz={setQuizState}
          />
          <QuizText>할 가능성이 높아집니다.</QuizText>
        </QuizLine>
      </Quiz>
      <Move>
        <MoveBtn onClick={() => setQuizStep(1)}>◀ prev</MoveBtn>
        <SubmitBtn onClick={clickSubmit}>submit ▶</SubmitBtn>
      </Move>
    </Wrapper>
  );
};

export default IpadQuiz2;

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

const Quiz = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const QuizLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    gap: 3px;
  }
`;

const QuizText = styled.div`
  font-family: Pretendard-Regular;
  text-align: center;
  word-break: keep-all;
  white-space: nowrap;

  font-size: 1.155vmax;
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

const SubmitBtn = styled(MoveBtn)`
  color: var(--gold4);
  text-shadow: 0px 0px 10px var(--gold4);
`;
