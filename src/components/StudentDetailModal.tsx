import { Modal, Form, Input, Row, Col, DatePicker } from "antd";
import React from "react";
import { Student } from "../types/student";

interface StudentDetailModalProps {
  open: boolean;
  onCancel: () => void;
  student: Student | null;
}

const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  open,
  onCancel,
  student,
}) => {
  return (
    <Modal
      title="დეტალურად ნახვა"
      open={open}
      onCancel={onCancel}
      footer={null}
      key={student?._id}
    >
      <Form layout="vertical" initialValues={student || {}}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="idNumber" label="პირადი N">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="code" label="კოდი">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="სახელი">
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="lastName" label="გვარი">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="yearOfSubmission" label="ჩაბ. წელი">
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="graduationYear" label="დამთ. წელი">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="status" label="სტატუსი">
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="school" label="სკოლა">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="program" label="პროგრამა">
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="email" label="ელფოსტა">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="voucher" label="ვაუჩერი">
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="grant" label="გრანტი">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="citizenship" label="მოქალაქეობა">
              <Input disabled />
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
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="language" label="სწავლების ენა">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="course" label="Freshman / Transfer">
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="mobility" label="მობილობის სემ კურსი">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="agent" label="აგენტი">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default StudentDetailModal;
