import React from "react";
import styled from "styled-components";
import { BoolQuizItem } from "./IpadLarge";

interface ToggleProps {
  toggleId: number; // 토글 id - 상태 변경에 사용
  questionId: number; // 문제 번호
  labelOne: string; // 선택지1
  labelTwo: string; // 선택지2
  quizState: BoolQuizItem[]; // 아이패드 퀴즈 답안
  setQuizState: React.Dispatch<React.SetStateAction<BoolQuizItem[]>>; // 아이패드 퀴즈 답안 선택 설정 함수
}

// 침실 아이패드 퀴즈2 안의 토글
// 왼쪽(labelOne) 선택이 false, 오른쪽(labelTwo) 선택이 true
const Toggle: React.FC<ToggleProps> = ({
  toggleId,
  questionId,
  labelOne,
  labelTwo,
  quizState,
  setQuizState,
}) => {
  
  const handleToggle = (isChecked: boolean) => {
    let copy = [...quizState];
    copy[toggleId] = { id: questionId, checked: isChecked };
    setQuizState(copy);
  };

  return (
    <Wrapper>
      <input
        type="checkbox"
        id={`toggle-${toggleId}`}
        className="toggleCheckbox"
        checked={quizState[toggleId].checked}
        onChange={(e) => handleToggle(e.target.checked)}
      />
      <label htmlFor={`toggle-${toggleId}`} className="toggleContainer">
        <div>{labelOne}</div>
        <div>{labelTwo}</div>
      </label>
    </Wrapper>
  );
};

export default Toggle;

const Wrapper = styled.div`
  /* font-family: Pretendard-Regular; */
  font-family: GowunBatang-Regular;
  font-weight: bold;
  font-size: 1.155vmax;

  .toggleCheckbox {
    display: none;
  }

  .toggleContainer {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: fit-content;
    border: 1.7px solid var(--lightgray);
    border-radius: 20px;
    cursor: pointer;
  }

  .toggleContainer::before {
    /* 라벨 컨테이너 내부의 움직이는 슬라이더 스타일 */
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0%;
    background: color-mix(in srgb, var(--ipadPurple) 50%, transparent);
    box-sizing: border-box;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    /* transition: all 0.3s; */
  }

  .toggleCheckbox:checked + .toggleContainer::before {
    /* 체크된 상태에서 슬라이더 위치 변경 */
    left: 50%; /* 슬라이더를 오른쪽 끝으로 이동 */
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .toggleContainer div {
    /* 라벨 내부의 div 스타일 설정 */
    padding: 6px;
    text-align: center;
    z-index: 1; /* z-index를 1로 설정하여 가상 요소 위에 위치하게 함 */
    white-space: nowrap;

    @media screen and (max-width: 500px), (max-height: 500px) {
      // 모바일
      padding: 2px;
    }
  }

  .toggleCheckbox:checked + .toggleContainer div:first-child,
  .toggleCheckbox + .toggleContainer div:last-child,
  .toggleCheckbox:checked + .toggleContainer div:last-child,
  .toggleCheckbox + .toggleContainer div:first-child {
    /* 체크된 상태에서 첫 번째 div 텍스트 색상 변경 */
    /* 체크되지 않은 상태에서 두 번째 div 텍스트 색상 설정 */
    /* 체크된 상태에서 두 번째 div 텍스트 색상 변경 */
    /* 체크되지 않은 상태에서 첫 번째 div 텍스트 색상 설정 */
    color: var(--darkblue);
    /* transition: color 0.3s; */
  }
`;
