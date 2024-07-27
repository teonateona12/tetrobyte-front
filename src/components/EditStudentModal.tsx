import React, { useEffect } from "react";
import { Modal, Form, Input, Row, Col, DatePicker, Button } from "antd";
import { Student } from "../types/student";

interface EditStudentModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: (updatedStudent: Student) => void;
  student: Student | null;
}

const EditStudentModal: React.FC<EditStudentModalProps> = ({
  open,
  onCancel,
  onSuccess,
  student,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (student) {
      form.setFieldsValue(student);
    }
  }, [student, form]);

  return (
    <Modal title="რედაქტირება" open={open} onCancel={onCancel} footer={null}>
      <Form form={form} layout="vertical" onFinish={onSuccess}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="idNumber" label="პირადი N">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="code" label="კოდი">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="სახელი">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName" label="გვარი">
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
            <Form.Item name="email" label="ელფოსტა">
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            შენახვა
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditStudentModal;
