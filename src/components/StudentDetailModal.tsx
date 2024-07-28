import { Modal, Form, Input, Row, Col, DatePicker, Radio } from "antd";
import React from "react";
import { Student } from "../types/student";
import { toGeorgianUppercase } from "@/utils/column";

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
      title={
        <span className="modal-title">
          {toGeorgianUppercase("დეტალურად ნახვა")}
        </span>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
      key={student?._id}
    >
      <Form layout="vertical" initialValues={student || {}}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="idNumber"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("პირადი N")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="code"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("კოდი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სახელი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="lastName"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("გვარი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="yearOfSubmission"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("ჩაბ. წელი")}
                </span>
              }
            >
              <DatePicker picker="year" format="YYYY" disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="graduationYear"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("დამთ. წელი")}
                </span>
              }
            >
              <DatePicker picker="year" format="YYYY" disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="status"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სტატუსი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="school"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სკოლა")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="program"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("პროგრამა")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="email"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("ელფოსტა")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="voucher"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("ვაუჩერი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="grant"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("გრანტი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="citizenship"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("მოქალაქეობა")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="dateOfBirth"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("დაბადების თარიღი")}
                </span>
              }
            >
              <DatePicker format="YYYY-MM-DD" disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="cityOfBirth"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("დაბადების ქალაქი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="language"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("სწავლების ენა")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="course"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("Freshman / Transfer")}
                </span>
              }
            >
              <Radio.Group disabled>
                <div style={{ display: "flex" }}>
                  <Radio
                    value="FRESHMAN"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator" aria-disabled /> FRESHMAN
                  </Radio>
                  <Radio
                    value="TRANSFER"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator" /> TRANSFER
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="mobility"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("მობილობის სემ კურსი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="agent"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("აგენტი")}
                </span>
              }
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default StudentDetailModal;
