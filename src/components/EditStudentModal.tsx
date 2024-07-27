import React, { useEffect } from "react";
import { Modal, Form, Input, Row, Col, DatePicker, Button, Radio } from "antd";
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
            <Form.Item
              name="idNumber"
              label="პირადი N"
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
              label="კოდი"
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
              <DatePicker picker="year" format="YYYY" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="graduationYear" label="დამთ. წელი">
              <DatePicker picker="year" format="YYYY" />
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
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ ელფოსტა!" }]}
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
            <Form.Item
              name="course"
              label="Freshman / Transfer"
              rules={[
                {
                  required: true,
                  message: "გთხოვთ აირჩიოთ!",
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <Radio value="FRESHMAN" className="course-radio">
                    <span className="circle-indicator" /> FRESHMAN
                  </Radio>
                  <Radio value="TRANSFER" className="course-radio">
                    <span className="circle-indicator" /> TRANSFER
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="mobility"
              label="მობილობის სემ კურსი"
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
