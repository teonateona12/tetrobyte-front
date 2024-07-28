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
      title={toGeorgianUppercase("რედაქტირება")}
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onSuccess}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="idNumber"
              label={toGeorgianUppercase("პირადი N")}
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
              label={toGeorgianUppercase("კოდი")}
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
              label={toGeorgianUppercase("სახელი")}
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ სახელი!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label={toGeorgianUppercase("გვარი")}
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
              label={toGeorgianUppercase("ჩაბ. წელი")}
            >
              <DatePicker picker="year" format="YYYY" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="graduationYear"
              label={toGeorgianUppercase("დამთ. წელი")}
            >
              <DatePicker picker="year" format="YYYY" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="status" label={toGeorgianUppercase("სტატუსი")}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="school" label={toGeorgianUppercase("სკოლა")}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="program" label={toGeorgianUppercase("პროგრამა")}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label={toGeorgianUppercase("ელფოსტა")}
              rules={[{ required: true, message: "გთხოვთ შეიყვანოთ ელფოსტა!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="voucher" label={toGeorgianUppercase("ვაუჩერი")}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="grant" label={toGeorgianUppercase("გრანტი")}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="citizenship"
              label={toGeorgianUppercase("მოქალაქეობა")}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="dateOfBirth"
              label={toGeorgianUppercase("დაბადების თარიღი")}
            >
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="cityOfBirth"
              label={toGeorgianUppercase("დაბადების ქალაქი")}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="language"
              label={toGeorgianUppercase("სწავლების ენა")}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="course"
              label={toGeorgianUppercase("Freshman / Transfer")}
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
              label={toGeorgianUppercase("მობილობის სემ კურსი")}
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
            <Form.Item name="agent" label={toGeorgianUppercase("აგენტი")}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {toGeorgianUppercase("შენახვა")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditStudentModal;
