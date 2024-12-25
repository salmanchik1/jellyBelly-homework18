import { FC } from "react";
import style from "./style.module.css";
import { createPortal } from "react-dom";

type Props = {
  isModal: boolean;
  onClick: () => void;
};

const Modal: FC<Props> = ({ isModal, onClick }) => {
  if (!isModal) {
    return null;
  }
  const modalRoot = document.getElementById("modal");

  console.log(modalRoot);
  if (!modalRoot) {
    return null;
  }
  return createPortal(
    <div className={style.container} onClick={onClick}>
      <div className={style.modal}>text</div>
    </div>,
    modalRoot
  );
};

export default Modal;
