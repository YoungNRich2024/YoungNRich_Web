import React from "react";
import styled from "styled-components";
import ic_upgraph from "../../../assets/bedroom/ic_upgraph.png";
import ic_downgraph from "../../../assets/bedroom/ic_downgraph.png";
import { QuizItem } from "./IpadLarge";

interface IpadQuiz1Props {
  setQuizStep: React.Dispatch<React.SetStateAction<number>>; // 아이패드 퀴즈 단계 설정 함수
  quiz: QuizItem[]; // 아이패드 퀴즈 답안
  setQuiz: React.Dispatch<React.SetStateAction<QuizItem[]>>; // 아이패드 퀴즈 답안 선택 설정 함수
}
// 침실 아이패드 퀴즈1
const IpadQuiz1: React.FC<IpadQuiz1Props> = ({
  setQuizStep,
  quiz,
  setQuiz,
}) => {
  const choiceId = 0; // 답안 번호

  // 이미지 선택 시 실행되는 함수
  const clickChoice = (choice: boolean) => {
    setQuiz((prevQuiz) =>
      prevQuiz.map((item) =>
        item.id === choiceId ? { ...item, checked: choice } : item
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
      <Title>오늘의 경제 퀴즈 #1</Title>
      <Quiz>
        <QuizText>
        Q. 경제에 대한 불확실성이 커지면 투자 심리도 함께 얼어붙어 {"\n"}
        주가가
        </QuizText>
        <QuizChoice>
          <QuizImage
            src={ic_upgraph}
            alt="상승"
            checked={
              // undefined일 때는 선택 안되도록
              typeof quiz[choiceId].checked === "boolean"
                ? !quiz[choiceId].checked
                : undefined
            }
            onClick={() => clickChoice(false)}
          />
          <QuizImage
            src={ic_downgraph}
            alt="하락"
            checked={quiz[choiceId].checked}
            onClick={() => clickChoice(true)}
          />
        </QuizChoice>
      </Quiz>
      <Move>
        <NextBtn checked={quiz[choiceId].checked} onClick={clickNextBtn}>
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
  gap: 20px;
  margin: 20px 0;

  @media screen and (max-width: 500px), (max-height: 500px) {
    // 모바일
    margin: 10px 0;
  }
`;

const QuizImage = styled.img<{ checked: boolean | undefined }>`
  width: 25%;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }

  // 선택되었을 때 scale 1.1 해주기
  transform: ${(props) => (props.checked === true ? "scale(1.1)" : "scale(1)")};
`;

const Move = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NextBtn = styled(Title)<{ checked: boolean | undefined }>`
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0px 0px 10px var(--black);
  cursor: pointer;

  // 답안 선택되기 전까지는 hidden 처리하기
  visibility: ${(props) =>
    typeof props.checked === "boolean" ? "visible" : "hidden"};
`;
