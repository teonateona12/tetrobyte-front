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
      title={
        <span className="modal-title">
          {toGeorgianUppercase("ახლის დამატება")}
        </span>
      }
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
              label={
                <span className="formItemLabel">
                  {toGeorgianUppercase("პირადი N")}
                </span>
              }
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
              <Input placeholder="პირადი N" />
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
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ კოდი!"),
                },
                {
                  type: "number",
                  transform: (value) => Number(value),
                  message: toGeorgianUppercase("კოდი უნდა იყოს რიცხვი!"),
                },
              ]}
            >
              <Input placeholder="კოდი" />
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
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ სახელი!"),
                },
              ]}
            >
              <Input placeholder="სახელი" />
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
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ გვარი!"),
                },
              ]}
            >
              <Input placeholder="გვარი" />
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
              <Input placeholder="სტატუსი" />
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
              <Input placeholder="სკოლა" />
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
              <Input placeholder="პროგრამა" />
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
              rules={[
                {
                  required: true,
                  message: toGeorgianUppercase("გთხოვთ შეიყვანოთ ელფოსტა!"),
                },
              ]}
            >
              <Input placeholder="ელფოსტა" />
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
              <Input placeholder="ვაუჩერი" />
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
              <Input placeholder="გრანტი" />
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
              <Input placeholder="მოქალაქეობა" />
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
              <Input placeholder="დაბადების ქალაქი" />
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
              <Input placeholder="სწავლების ენა" />
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
                  message: toGeorgianUppercase("გთხოვთ აირჩიოთ!"),
                },
              ]}
            >
              <Radio.Group>
                <div style={{ display: "flex" }}>
                  <Radio
                    value="FRESHMAN"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator " />
                    {toGeorgianUppercase("FRESHMAN")}
                  </Radio>
                  <Radio
                    value="TRANSFER"
                    className="course-radio formItemRadio"
                  >
                    <span className="circle-indicator " />
                    {toGeorgianUppercase("TRANSFER")}
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
                      toGeorgianUppercase(
                        "მობილობის სემ კურსი უნდა იყოს რიცხვი!"
                      )
                    );
                  },
                },
              ]}
            >
              <Input placeholder="მობილობის სემ კურსი" />
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
              <Input placeholder="აგენტი" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddStudentModal;
