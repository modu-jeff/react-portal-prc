import React from "react";
import reactDom from "react-dom";

interface Children {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: Children) => {
  const el = document.getElementById("modal") as HTMLElement;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
