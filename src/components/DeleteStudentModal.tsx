import React from "react";
import { Modal } from "antd";
import { Student } from "../types/student";

interface DeleteStudentModalProps {
  open: boolean;
  student: Student | null;
  onCancel: () => void;
  onSuccess: () => void;
}

const DeleteStudentModal: React.FC<DeleteStudentModalProps> = ({
  open,
  student,
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
