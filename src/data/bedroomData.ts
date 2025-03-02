// 침실에서 사용할 데이터

import ic_touchmoney from "../assets/bedroom/ic_touchmoney.svg";
import ic_graph from "../assets/bedroom/ic_graph.svg";

export type bedroomKeys = "photo" | "pillow" | "tv" | "pad";

type bedroomTypes = {
  [key in bedroomKeys]: string;
};

export const bedroomData: bedroomTypes = {
  photo:
    "할아버지와 어린 시절의 내가 함께 찍힌 사진이다. 동전 탑을 쌓으며 할아버지와 즐거운 시간을 보냈던 그 시절은 아직까지도 내게 가장 행복했던 기억으로 남아있다..",
  pillow: "리모콘을 발견했다…!",
  tv: "TV의 채널을 돌릴 무언가가 필요하다..",
  pad: "아이패드를 발견했다…!",
};

export const bedroomEscapeBoolData = [
  { id: 2, checked: false },
  { id: 2, checked: false },
  { id: 2, checked: false },
]; // 선택형 문제 답안

export const bedroomEscapeNumData = [
  { id: 1, checked: 4 },
  { id: 3, checked: 3 },
  { id: 4, checked: 3 },
]; // 객관식 문제 답안

export const bedroomIpadQuizInfo = [
  {
    id: 1,
    question: "주식에 대한 설명으로 옳은 것은?",
    choices: [
      "기업의 경영자만 주식을 사고팔 수 있다.",
      "기업은 자사의 주식을 소유한 투자자에게 이자를 준다.",
      "투자자들은 거래소에서 주식을 자유롭게 거래할 수 없다.",
      "기업이 경영에 필요한 자금을 마련하기 위해 발행하는 것이다.",
    ],
    imageUrl: null,
  },
  {
    id: 3,
    question:
      "사람들이 사고팔 수 있도록 기업이 자사의 주식을 거래소에서 매매될 수 있게 하는 것을 의미하는 말은?",
    choices: ["투자", "거래", "상장", "통합"],
    imageUrl: ic_touchmoney,
  },
  {
    id: 4,
    question:
      "우리나라 기술 기업들의 효율적인 자금 조달을 위해 만들어진 시장은?",
    choices: ["외환시장", "나스닥시장", "코스닥시장", "서브프라임모기지시장"],
    imageUrl: ic_graph,
  },
];
