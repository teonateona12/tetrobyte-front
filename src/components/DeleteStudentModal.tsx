import React from "react";
import { Modal } from "antd";

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
      okText="დიახ"
      cancelText="არა"
      centered
    >
      <p>ნამდვილად გსურთ სტუდენტის წაშლა?</p>
    </Modal>
  );
};

export default DeleteStudentModal;
