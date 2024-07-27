import { Modal, Form, Input, Row, Col, DatePicker, Button } from "antd";
import { FormInstance } from "antd/es/form";
import React from "react";

interface AddStudentModalProps {
  visible: boolean;
  onCancel: () => void;
  onSuccess: () => void;
  handleOk: () => void;
  form: FormInstance;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({
  visible,
  onCancel,
  handleOk,
  form,
}) => {
  return (
    <Modal
      title="ახლის დამატება"
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
      okText="დამატება"
      footer={
        <div>
          <Button key="submit" type="primary" onClick={handleOk}>
            დამატება
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          yearOfSubmission: undefined,
          graduationYear: undefined,
          dateOfBirth: undefined,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="idNumber"
              label="პირადი N"
              rules={[
                { required: true, message: "გთხოვთ შეიყვანოთ პირადი N!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="code"
              label="კოდი"
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ კოდი!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="სახელი"
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ სახელი!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="გვარი"
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ გვარი!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="yearOfSubmission" label="ჩაბ. წელი">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="graduationYear" label="დამთ. წელი">
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="status" label="სტატუსი">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="school" label="სკოლა">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="program" label="პროგრამა">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="ელფოსტა"
              rules={[
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="voucher" label="ვაუჩერი">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="grant" label="გრანტი">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="citizenship" label="მოქალაქეობა">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="dateOfBirth" label="დაბადების თარიღი">
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="cityOfBirth" label="დაბადების ქალაქი">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="language" label="სწავლების ენა">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="course" label="Freshman / Transfer">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="mobility" label="მობილობის სემ კურსი">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="agent" label="აგენტი">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddStudentModal;
