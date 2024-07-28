import React, { useEffect } from "react";
import { Modal, Form, Input, Row, Col, DatePicker, Button, Radio } from "antd";
import { Student } from "../types/student";
import { toGeorgianUppercase } from "@/utils/column";

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
    <Modal
      title={
        <span className="modal-title">
          {toGeorgianUppercase("რედაქტირება")}
        </span>
      }
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onSuccess}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="idNumber"
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("პირადი N")}
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ პირადი ნომერი!",
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: "პირადი ნომერი უნდა იყოს რიცხვი!",
                },
              ]}
            >
              <Input />
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
              rules={[
                {
                  required: true,
                  message: "გთხოვთ შეიყვანოთ კოდი!",
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: "კოდი უნდა იყოს რიცხვი!",
                },
              ]}
            >
              <Input />
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
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ სახელი!" }]}
            >
              <Input />
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
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ გვარი!" }]}
            >
              <Input />
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
              <DatePicker picker="year" format="YYYY" />
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
              <DatePicker picker="year" format="YYYY" />
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
              <Input />
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
              <Input />
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
              <Input />
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
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ ელფოსტა!" }]}
            >
              <Input />
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
              <Input />
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
              <Input />
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
              <Input />
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
              <DatePicker format="YYYY-MM-DD" />
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
              <Input />
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
              <Input />
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
              rules={[
                {
                  required: true,
                  message: "გთხოვთ აირჩიოთ!",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <Radio
                    value="FRESHMAN"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator" /> FRESHMAN
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
              rules={[
                {
                  validator: (_, value) => {
                    if (value === undefined || value === "") {
                      return Promise.resolve();
                    }
                    if (!isNaN(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "მობილობის სემ კურსი უნდა იყოს რიცხვი!"
                    );
                  },
                },
              ]}
            >
              <Input />
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
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button className="editBtn" type="primary" htmlType="submit">
            {toGeorgianUppercase("შენახვა")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditStudentModal;
