import React from "react";
import styled from "styled-components";

interface ModalProps {
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setIsModalOn }: ModalProps) => {
  const modalClose = () => {
    setIsModalOn((prev) => !prev);
  };
  return (
    <Background>
      <Content>
        <ButtonContainer>
          <Button onClick={modalClose}>모달끄기</Button>
        </ButtonContainer>
        <ModalTitle>안녕 난 모달이라고 해</ModalTitle>
      </Content>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  height: 80%;
  width: 60%;
  position: relative;
  overflow: scroll;
  border-radius: 8px;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.4);
  background-color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
`;

const ModalTitle = styled.h2`
  position: absolute;
  left: 40%;
  top: 45%;
`;
