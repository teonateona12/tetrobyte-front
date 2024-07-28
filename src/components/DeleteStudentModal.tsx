import React from "react";
import { Modal, Button } from "antd";
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
      title={
        <span className="modal-title">
          {toGeorgianUppercase("ნამდვილად გსურთ სტუდენტის წაშლა?")}
        </span>
      }
      open={open}
      onOk={onSuccess}
      onCancel={onCancel}
      okText={toGeorgianUppercase("დიახ")}
      cancelText={toGeorgianUppercase("არა")}
      centered
      footer={[
        <Button key="ok" onClick={onSuccess} className="custom-ok-button">
          {toGeorgianUppercase("კი")}
        </Button>,
        <Button
          key="cancel"
          onClick={onCancel}
          className="custom-cancel-button"
        >
          {toGeorgianUppercase("არა")}
        </Button>,
      ]}
    />
  );
};

export default DeleteStudentModal;
