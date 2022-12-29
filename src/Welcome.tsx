import React, { useState } from "react";
import ModalPortal from "./Portal";
import Modal from "./Modal";
import styled from "styled-components";

const MyComponent = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const modalAppear = () => {
    setIsModalOn((prev) => !prev);
  };
  return (
    <div>
      <ModalButton onClick={modalAppear}>나와라 모달</ModalButton>
      <ModalPortal>
        {isModalOn && <Modal setIsModalOn={setIsModalOn} />}
      </ModalPortal>
    </div>
  );
};

export default MyComponent;

const ModalButton = styled.button`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
`;
