import { Modal, Form, Input, Row, Col, DatePicker, Button, Radio } from "antd";
import { FormInstance } from "antd/es/form";
import { addStudent } from "@/services/api";
import React from "react";
import { toGeorgianUppercase } from "@/utils/column";

interface AddStudentModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
  form: FormInstance;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({
  open,
  onCancel,
  form,
  onSuccess,
}) => {
  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      await addStudent(values);
      form.resetFields();
      onSuccess();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to submit form:", error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <Modal
      title={toGeorgianUppercase("ახლის დამატება")}
      open={open}
      onCancel={onCancel}
      onOk={handleFormSubmit}
      okText={toGeorgianUppercase("დამატება")}
      footer={
        <div>
          <Button key="submit" type="primary" onClick={handleFormSubmit}>
            {toGeorgianUppercase("დამატება")}
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
              label={toGeorgianUppercase("პირადი N")}
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase(
                    "გთხოვთ შეიყვანოთ პირადი ნომერი!"
                  ),
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: toGeorgianUppercase(
                    "პირადი ნომერი უნდა იყოს რიცხვი!"
                  ),
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
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ კოდი!"),
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: toGeorgianUppercase("კოდი უნდა იყოს რიცხვი!"),
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
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ სახელი!"),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label={toGeorgianUppercase("გვარი")}
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ გვარი!"),
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
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ ელფოსტა!"),
                },
              ]}
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
                  message: toGeorgianUppercase("გთხოვთ აირჩიოთ!"),
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <Radio value="FRESHMAN" className="course-radio">
                    <span className="circle-indicator" />{" "}
                    {toGeorgianUppercase("FRESHMAN")}
                  </Radio>
                  <Radio value="TRANSFER" className="course-radio">
                    <span className="circle-indicator" />{" "}
                    {toGeorgianUppercase("TRANSFER")}
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
                      toGeorgianUppercase(
                        "მობილობის სემ კურსი უნდა იყოს რიცხვი!"
                      )
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
      </Form>
    </Modal>
  );
};

export default AddStudentModal;
