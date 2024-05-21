import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoil/atom";
import bg_modal from "../../assets/common/bg_modal.png";
import ic_down from "../../assets/common/ic_down.png";
import TvLarge from "../game/TvLarge";

// 확대 모달
const MagnifyModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  if (!modal.isOpen) return null; // modal의 isOpen이 false일 경우 null 리턴

  // 모달 닫는 함수
  const closeModal = () => {
    setModal({ isOpen: false, content: null });
  };

  return (
    <Wrapper>
      {modal.content === "tv" && <TvLarge />}
      {/* <div className="modal-content">{modal.content}</div> */}
      <CloseArrow
        src={ic_down}
        className="down"
        alt="close"
        onClick={closeModal}
      />
    </Wrapper>
  );
};

export default MagnifyModal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.5); */
  background: url(${bg_modal}) center no-repeat;
  background-size: cover;
`;

const CloseArrow = styled.img`
  width: 4%;
  position: absolute;
  bottom: 0;
  margin-bottom: 3%;

  animation-name: down-animation;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  @keyframes down-animation {
    0% {
    }
    100% {
      transform: translateY(20px);
    }
  }
`;