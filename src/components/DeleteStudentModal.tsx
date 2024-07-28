import React from "react";
import { Modal } from "antd";
import { toGeorgianUppercase } from "@/utils/column";

interface DeleteStudentModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
}

const DeleteStudentModal: React.FC<DeleteStudentModalProps> = ({
  open,
  onCancel,
  onSuccess,
}) => {
  return (
    <Modal
      open={open}
      onOk={onSuccess}
      onCancel={onCancel}
      okText={toGeorgianUppercase("დიახ")}
      cancelText={toGeorgianUppercase("არა")}
      centered
    >
      <p>{toGeorgianUppercase("ნამდვილად გსურთ სტუდენტის წაშლა?")}</p>
    </Modal>
  );
};

export default DeleteStudentModal;
